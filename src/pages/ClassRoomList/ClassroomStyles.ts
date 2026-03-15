import { Box, styled } from '@mui/material';

export const PageWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
}));

export const CardsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)', 
  gap: theme.spacing(3),
  width: '100%',
  justifyContent: 'center',
  
  '@media (max-width: 1100px)': { gridTemplateColumns: 'repeat(3, 1fr)' },
  '@media (max-width: 700px)': { gridTemplateColumns: 'repeat(1, 1fr)' },
}));
