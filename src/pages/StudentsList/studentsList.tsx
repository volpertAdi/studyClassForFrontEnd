import { useState } from 'react';
import { Dialog } from '@mui/material';
import * as S from './studentsListStyle';
//context
import { useNotification } from '../../context/NotificationContext';
//types
import type { Classroom } from '../../types/createFormsTypes';
//api
import { deleteStudent, assigntudentClass } from '../../Api/user.api';
//components
import DataTable from '../../components/studentsTable/studentsTable';
import ClassSelectionModal from '../../components/ClassSelectionModal/ClassSelectionModal';
//store
import { useDispatch, useSelector } from 'react-redux';
import { addStudentToClass, removeStudentFromClass, selectAvailableClasses } from '../../Store/Slices/ClassroomSlice';
import type { RootState } from '../../Store/store';
import { deleteStudentStore, updateClassRoomStudent } from '../../Store/Slices/StudentsSlice';

const StudentsListPage = () => {
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);

  const dispatch = useDispatch();
  const { students } = useSelector((state: RootState) => state.students);
  const availableClasses = useSelector(selectAvailableClasses);

  const { showModal } = useNotification();

  const currentStudent = students.find(s => s.id === selectedStudentId);
  const filteredClasses = availableClasses.filter(
    (classroom: Classroom) => classroom.id !== currentStudent?.classroomId
  );

  const handleDelete = async (id: string) => {
    try {
      await deleteStudent(id);
      showModal('הצלחה', 'הסטודנט נמחק', 'success');
      dispatch(deleteStudentStore(id));
    } catch {
      showModal('שגיאה', 'המחיקה נכשלה', 'error');
    }
  };

  const handleOpenAssign = async (studentId: string) => {
    try {
      setSelectedStudentId(studentId);
      setIsAssignOpen(true);
    } catch {
      showModal('שגיאה', 'לא ניתן לטעון כיתות', 'error');
    }
  };

  const confirmAssignment = async (classId: string) => {
    if (!selectedStudentId) return;

    try {
      await assigntudentClass(selectedStudentId, classId);
      setIsAssignOpen(false);
      showModal('הצלחה', 'הסטודנט שובץ בהצלחה', 'success'); 

      const currStudent = students.find(s => s.id === selectedStudentId)!;
      dispatch(addStudentToClass({ classId, student: currStudent }));

      if(currStudent.classroomId) {
        dispatch(removeStudentFromClass({ classId: currStudent.classroomId, studentId: selectedStudentId }));
      }
      dispatch(updateClassRoomStudent({ studentId: selectedStudentId,classroomId: classId }));
    } catch {
      showModal('שגיאה', 'השיבוץ נכשל', 'error');
    }
  };

  return (
    <S.PageWrapper>
      <DataTable data={students} onAssign={handleOpenAssign} onDelete={handleDelete} />

      <Dialog open={isAssignOpen} onClose={() => setIsAssignOpen(false)} maxWidth="xs" fullWidth>
        <ClassSelectionModal classes={filteredClasses} onSelect={confirmAssignment} />
      </Dialog>
    </S.PageWrapper>
  );
};

export default StudentsListPage;