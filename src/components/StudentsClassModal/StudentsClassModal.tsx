import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { Typography } from '@mui/material';
import * as S from './StudentsClassModalStyles';
import type { StudentsModalProps } from '../../types/ClassroomPageTypes';
import { CLASS_TITLE, NO_STUDENTS } from '../../consts/ClassPageConsts';
import { useAppTheme } from '../../context/ThemeContext/ThemeContext';

const ClassStudentsModal = ({ students, onRemove }: StudentsModalProps) => {
  const { mainColor } = useAppTheme();

  return (
    <S.ModalWrapper>
      <S.ModalTitle>{CLASS_TITLE}</S.ModalTitle>
      {students.length === 0 ? (
        <Typography textAlign="center">{NO_STUDENTS}</Typography>
      ) : (
        students.map((student) => (
          <S.StudentRow key={student.id}>
            <S.StudentInfo>
              <S.GrayAvatar>
                <PersonIcon />
              </S.GrayAvatar>
              <S.StudentName>
                {student.firstName} {student.lastName}
              </S.StudentName>
            </S.StudentInfo>
            
            <S.RemoveStudentButton onClick={() => onRemove(student.id)} sx={{ color: mainColor }}>
              <DeleteIcon />
            </S.RemoveStudentButton>
          </S.StudentRow>
        ))
      )}
    </S.ModalWrapper>
  );
};

export default ClassStudentsModal;