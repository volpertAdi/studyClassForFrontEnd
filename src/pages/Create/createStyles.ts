import { Box, styled } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(6, 2),
  gap: theme.spacing(25),
  flexWrap: 'wrap',
}));