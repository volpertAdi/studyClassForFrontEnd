import { useEffect, useState } from 'react';
import { Dialog } from '@mui/material';
//api
import { getAllClassrooms, deleteClassroom } from '../../Api/classroom.api';
import { deleteStudentClass } from '../../Api/user.api';
//types
import type { Classroom } from '../../types/createFormsTypes';
//context
import { useNotification } from '../../context/NotificationContext';
//styles
import * as S from './ClassroomStyles';
//component
import ClassroomCard from '../../components/ClassRoomCard/ClassRoomCard';
import ClassStudentsModal from '../../components/StudentsClassModal/StudentsClassModal';



const ClassroomsPage = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<Classroom | null>(null);
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const { showModal } = useNotification();

  const loadData = async () => {
    try {
      const data = await getAllClassrooms();
      setClassrooms(data);
    } catch {
      showModal('שגיאה', 'לא ניתן לטעון את הכיתות', 'error');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDeleteClass = async (id: string) => {
    // מומלץ להוסיף כאן לוגיקת אישור (Confirm) לפני מחיקה
    try {
      await deleteClassroom(id);
      showModal('הצלחה', 'הכיתה נמחקה בהצלחה', 'success');
      loadData(); 
    } catch {
      showModal('שגיאה', 'מחיקת הכיתה נכשלה', 'error');
    }
  };

  const handleOpenStudentsList = (classroom: Classroom) => {
    setSelectedClass(classroom);
    setIsListOpen(true);
  };

  const handleRemoveStudent = async (studentId: string) => {
    try {
      await deleteStudentClass(studentId);
      showModal('Success', 'Student removed from class', 'success');
      setIsListOpen(false);
      loadData(); 
    } catch {
      showModal('Error', 'Failed to remove student', 'error');
    }
  };

  return (
    <S.PageWrapper>
      <S.CardsGrid>
        {classrooms.map((cls) => (
          <ClassroomCard 
            key={cls.id} 
            classroom={cls} 
            onDelete={handleDeleteClass} 
            onOpenList={handleOpenStudentsList}
          />
        ))}
      </S.CardsGrid>

      <Dialog open={isListOpen} onClose={() => setIsListOpen(false)}>
        {selectedClass && (
          <ClassStudentsModal 
            students={selectedClass.users}
            onRemove={handleRemoveStudent} 
          />
        )}
      </Dialog>
    </S.PageWrapper>
  );
};

export default ClassroomsPage;
