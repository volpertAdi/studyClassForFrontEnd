import DeleteIcon from '@mui/icons-material/Delete';
import * as S from './ClassroomCardStyles';
import type { ClassCardProps } from '../../types/ClassroomPageTypes';
import { OUT_OFF, SEATS_LEFT, STUDNTS_LIST, THERE_ARE } from '../../consts/ClassPageConsts';
import { useAppTheme } from '../../context/ThemeContext/ThemeContext';

const ClassroomCard = ({ classroom, onDelete, onOpenList }: ClassCardProps) => {
  const {mainColor } = useAppTheme();

  return (
    <S.CardContainer>
      <S.ClassTitle>{classroom.name}</S.ClassTitle>
      
      <S.InfoSection>
        <S.SeatsText>
          {THERE_ARE} <span>{classroom.seatsLeft}</span> {SEATS_LEFT}
        </S.SeatsText>
        <S.CapacityText>
          {OUT_OFF} {classroom.maxSeats}
        </S.CapacityText>
      </S.InfoSection>

      <S.ActionsArea>
        <S.LinkText onClick={() => onOpenList(classroom)}>
         {STUDNTS_LIST}
        </S.LinkText>
        
        <S.DeleteClassButton 
          onClick={() => onDelete(classroom)} 
          size="small"
          mainColor={mainColor}
        >
          <DeleteIcon fontSize="small" />
        </S.DeleteClassButton>
      </S.ActionsArea>
    </S.CardContainer>
  );
};

export default ClassroomCard;