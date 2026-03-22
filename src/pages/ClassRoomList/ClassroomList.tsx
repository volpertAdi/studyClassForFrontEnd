import { useState } from 'react';
import { Dialog } from '@mui/material';
//api
import { deleteClassroom } from '../../Api/classroom.api';
import { assigntudentClass } from '../../Api/user.api';
//types
import type { Classroom } from '../../types/createFormsTypes';
//context
import { useNotification } from '../../context/NotificationContext';
//styles
import * as S from './ClassroomStyles';
//component
import ClassroomCard from '../../components/ClassRoomCard/ClassRoomCard';
import ClassStudentsModal from '../../components/StudentsClassModal/StudentsClassModal';
//store
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../Store/store';
import { deleteClassRoom, removeStudentFromClass } from '../../Store/Slices/ClassroomSlice';
import { updateClassRoomStudent } from '../../Store/Slices/StudentsSlice';

const ClassroomsPage = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<Classroom | null>(null);
  const { showModal } = useNotification();

  const { classRooms } = useSelector((state: RootState) => state.classRooms);
  const dispatch = useDispatch();

  const handleDeleteClass = async (classroom: Classroom) => {
    try {
      if(classroom.users.length == 0) {
        await deleteClassroom(classroom.id);
        showModal('הצלחה', 'הכיתה נמחקה בהצלחה', 'success');
        dispatch(deleteClassRoom(classroom.id));
      } else {
        showModal('שגיאה', 'לא ניתן למחוק כיתה עם סטודנטים', 'error');
      }
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
      await assigntudentClass(studentId, null);
      showModal('Success', 'Student removed from class', 'success');
      setIsListOpen(false);
      dispatch(removeStudentFromClass({ classId: selectedClass!.id, studentId }));
      dispatch(updateClassRoomStudent({ studentId, classroomId: null }));
    } catch {
      showModal('Error', 'Failed to remove student', 'error');
    }
  };

  return (
    <S.PageWrapper>
      <S.CardsGrid>
        {classRooms.map((cls) => (
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
