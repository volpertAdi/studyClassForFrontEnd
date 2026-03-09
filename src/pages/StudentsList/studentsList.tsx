import { useEffect, useState } from 'react';
import { Dialog } from '@mui/material';
import * as S from './studentsListStyle';
//context
import { useNotification } from '../../context/NotificationContext';
//types
import type { Classroom, student } from '../../types/createFormsTypes';
//api
import { deleteStudent, getAllStudents, updateStudentClass } from '../../Api/user.api';
import { getAllClassrooms } from '../../Api/classroom.api';
//components
import DataTable from '../../components/studentsTable/studentsTable';
import ClassSelectionModal from '../../components/ClassSelectionModal/ClassSelectionModal';


const StudentsListPage = () => {
  const [students, setStudents] = useState<student[]>([]);
  const [classes, setClasses] = useState<Classroom[]>([]);
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  
  const { showModal } = useNotification();

  const fetchData = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch {
      showModal('שגיאה', 'לא ניתן לטעון נתונים', 'error');
    }
  };

  useEffect(() => { fetchData(); }, []);
  
  const handleDelete = async (id: string) => {
    try {
      await deleteStudent(id);
      showModal('הצלחה', 'הסטודנט נמחק', 'success');
      fetchData();
    } catch {
      showModal('שגיאה', 'המחיקה נכשלה', 'error');
    }
  };

  const handleOpenAssign = async (studentId: string) => {
    try {
      const classData = await getAllClassrooms();
      setClasses(classData);
      setSelectedStudentId(studentId);
      setIsAssignOpen(true);
    } catch {
      showModal('שגיאה', 'לא ניתן לטעון כיתות', 'error');
    }
  };

  const confirmAssignment = async (classId: string) => {
    if (!selectedStudentId) return;
    try {
      await updateStudentClass(selectedStudentId, classId);
      setIsAssignOpen(false);

      showModal('הצלחה', 'הסטודנט שובץ בהצלחה', 'success'); 
      fetchData(); 
    } catch {
      showModal('שגיאה', 'השיבוץ נכשל', 'error');
    }
  };

  return (
    <S.PageWrapper>
      <DataTable data={students} onAssign={handleOpenAssign} onDelete={handleDelete} />

      <Dialog open={isAssignOpen} onClose={() => setIsAssignOpen(false)} maxWidth="xs" fullWidth>
        <ClassSelectionModal classes={classes} onSelect={confirmAssignment} />
      </Dialog>
    </S.PageWrapper>
  );
};

export default StudentsListPage;