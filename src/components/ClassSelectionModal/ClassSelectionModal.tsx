//mui
import { List } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SchoolIcon from '@mui/icons-material/School';
//styles
import * as S from './ClassSelectionModalStyles';
//types
import type { ClassSelectProps } from '../../types/createFormsTypes';
//consts
import { CLASS_SELECT_TITLE } from '../../consts/studentsListConsts';
//context
import { useAppTheme } from '../../context/ThemeContext/ThemeContext';

const ClassSelectionModal = ({ classes, onSelect }: ClassSelectProps) => {
  const {mainColor } = useAppTheme();
  
  return (
    <S.ModalContainer>
      <S.ModalTitle>{CLASS_SELECT_TITLE}</S.ModalTitle>
      <List disablePadding>
        {classes.map((cls) => (
          <S.StyledListItem key={cls.id}>
            <S.ClassInfo>
              <S.GrayAvatar>
                <SchoolIcon />
              </S.GrayAvatar>
              <S.ClassNameText>{cls.name}</S.ClassNameText>
            </S.ClassInfo>

            <S.AddButton onClick={() => onSelect(cls.id)} sx={{ color: mainColor }}>
              <AddCircleOutlineIcon fontSize="medium" />
            </S.AddButton>
          </S.StyledListItem>
        ))}
      </List>
    </S.ModalContainer>
  );
};

export default ClassSelectionModal;