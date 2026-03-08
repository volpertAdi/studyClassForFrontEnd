import { Box, styled } from '@mui/material';

export const PageWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
}));