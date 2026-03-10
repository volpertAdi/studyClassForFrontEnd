import { Box, Card, styled, Typography } from '@mui/material';

export const CardContainer = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '220px', 
  direction: 'ltr',
   boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
  textAlign: 'left', 
}));

export const ClassTitle = styled(Typography)({
  fontWeight: 800,
  fontSize: '1.8rem',
  marginBottom: '16px',
  textTransform: 'capitalize',
});

export const InfoSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const SeatsText = styled(Typography)({
  fontSize: '1rem',
  color: '#333',
  '& span': {
    fontWeight: 'bold',
  },
});

export const CapacityText = styled(Typography)({
  fontSize: '0.85rem',
  color: '#999',
});

export const ActionsArea = styled(Box)({
  marginTop: 'auto', 
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '20px',
});

export const LinkText = styled('span')({
  cursor: 'pointer',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: '#333',
  '&:hover': {
    textDecoration: 'underline',
  },
});