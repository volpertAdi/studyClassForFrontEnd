import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import * as S from './ClassroomCardStyles';
import type { ClassCardProps } from '../../types/ClassroomPageTypes';
import { OUT_OFF, SEATS_LEFT, STUDNTS_LIST, THERE_ARE } from '../../consts/ClassPageConsts';

const ClassroomCard = ({ classroom, onDelete, onOpenList }: ClassCardProps) => {
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
        
        <IconButton 
          onClick={() => onDelete(classroom.id)} 
          size="small" 
          sx={{ color: '#3f51b5' }} 
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </S.ActionsArea>
    </S.CardContainer>
  );
};

export default ClassroomCard;