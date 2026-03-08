import { Typography, Button, styled } from '@mui/material';

export const FormSection = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '400px',
  gap: '16px',
});

export const FormTitle = styled(Typography)({
  marginBottom: '24px',
});

export const ActionButton = styled(Button)({
  marginTop: '8px',
  padding: '10px',
  fontWeight: 'bold',
  backgroundColor: '#2b3cd5', 
  color: '#fff',           
  
  '&:hover': {
    backgroundColor: '#1d2a9d',
  },
});