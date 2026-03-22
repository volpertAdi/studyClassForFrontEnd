import { Box, Typography, ListItem, Avatar, styled, IconButton } from '@mui/material';

export const ModalContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  minWidth: '380px',
  direction: 'rtl',
}));

export const ModalTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 700,
  fontSize: '1.25rem',
  marginBottom: theme.spacing(3),
  color: theme.palette.text.primary,
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5, 0),
  borderBottom: '1px solid #f0f0f0',
  '&:last-child': {
    borderBottom: 'none',
  },
}));

export const ClassInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const GrayAvatar = styled(Avatar)({
  backgroundColor: '#f5f5f5',
  color: '#bdbdbd',
  width: 44,
  height: 44,
});

export const ClassNameText = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 500,
  color: '#333',
});

export const AddButton = styled(IconButton, {shouldForwardProp: (prop) => prop !== 'mainColor'}) <{ mainColor?: string }>(({ mainColor }) =>  ({
  color: mainColor,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(63, 81, 181, 0.08)',
    transform: 'scale(1.1)'
  },
}));