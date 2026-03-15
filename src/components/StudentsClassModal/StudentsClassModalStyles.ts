import { Box, Typography, styled, Avatar, IconButton } from '@mui/material';

export const ModalWrapper = styled(Box)({
  padding: '24px',
  minWidth: '350px',
  direction: 'rtl',
});

export const ModalTitle = styled(Typography)({
  textAlign: 'center',
  fontWeight: 700,
  fontSize: '1.4rem',
  marginBottom: '24px',
});

export const StudentRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 0',
  borderBottom: '1px solid #eee',
  '&:last-child': { borderBottom: 'none' },
});

export const StudentInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const GrayAvatar = styled(Avatar)({
  backgroundColor: '#e0e0e0',
  color: '#9e9e9e',
});

export const StudentName = styled(Typography)({
  fontSize: '1.1rem',
  fontWeight: 500,
});

export const RemoveStudentButton = styled(IconButton)<{ mainColor?: string }>({
  '&:hover': {
    backgroundColor: 'rgba(63, 81, 181, 0.08)',
  },
});