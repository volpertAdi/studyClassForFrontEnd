import { Paper, TableContainer, styled } from '@mui/material';

export const StyledTableRoot = styled(Paper)(({ theme }) => ({
  maxWidth: '1200px',
  width: '100%',
  borderRadius: '16px',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  marginTop: theme.spacing(3),
}));

export const StyledTableContainer = styled(TableContainer)({
  maxHeight: '70vh', 
});