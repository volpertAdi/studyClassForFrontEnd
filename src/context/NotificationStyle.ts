import { 
  Box, Typography, Dialog, DialogTitle, 
  DialogActions, Button, styled 
} from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '20px',
    padding: theme.spacing(3),
    boxShadow: theme.shadows[10],
  },
}));

export const IconWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '16px',
  '& svg': {
    fontSize: '85px', 
  }
});

export const StyledTitle = styled(DialogTitle)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 800,
  fontSize: '1.6rem',
  padding: theme.spacing(1, 0),
  color: theme.palette.text.primary,
}));

export const MessageBody = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: '1.1rem',
  lineHeight: 1.5,
  wordBreak: 'break-word',
  whiteSpace: 'pre-line', 
}));

export const StyledActions = styled(DialogActions)(({ theme }) => ({
  justifyContent: 'center',
  paddingTop: theme.spacing(3),
}));

export const ConfirmButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 'bold',
  minWidth: '150px',
  textTransform: 'none', 
}));