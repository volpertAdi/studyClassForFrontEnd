import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton, Typography } from '@mui/material';
import * as S from './StudentsClassModalStyles';
import type { StudentsModalProps } from '../../types/ClassroomPageTypes';
import { CLASS_TITLE, NO_STUDENTS } from '../../consts/ClassPageConsts';

const ClassStudentsModal = ({ students, onRemove }: StudentsModalProps) => {
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
            
            <IconButton onClick={() => onRemove(student.id)} sx={{ color: '#3f51b5' }}>
              <DeleteIcon />
            </IconButton>
          </S.StudentRow>
        ))
      )}
    </S.ModalWrapper>
  );
};

export default ClassStudentsModal;