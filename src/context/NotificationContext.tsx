import { createContext, useState, useContext, type ReactNode } from 'react';
//mui
import { DialogContent } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
//style
import * as S from './NotificationStyle';
//types
import type { ModalContent } from '../types/NotifactionTypes';
//consts
import { CONFIRM } from '../consts/NotificationConsts';

const DialogContext = createContext<any>(undefined); 

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const [content, setContent] = useState<ModalContent>({ 
    title: '', 
    message: '', 
    severity: 'success' 
  });

  const showModal = (title: string, message: string, severity: 'success' | 'error' = 'success') => {
    setContent({ title, message, severity });
    setIsOpen(true); 
  };

  const handleClose = () => setIsOpen(false);

  return (
    <DialogContext.Provider value={{ showModal }}>
      {children}
      
      <S.StyledDialog open={isOpen} onClose={handleClose} fullWidth maxWidth="xs">
        <S.IconWrapper>
          {content.severity === 'success' ? 
            <CheckCircleOutlineIcon color="success"/> : 
            <ErrorOutlineIcon color="error"/>}
        </S.IconWrapper>

        <S.StyledTitle>
          {content.title}
        </S.StyledTitle>

        <DialogContent>
          <S.MessageBody>
            {content.message}
          </S.MessageBody>
        </DialogContent>

        <S.StyledActions>
          <S.ConfirmButton 
            onClick={handleClose} 
            variant="contained" 
            color={content.severity === 'success' ? 'success' : 'error'}
          >
            {CONFIRM}
          </S.ConfirmButton>
        </S.StyledActions>
      </S.StyledDialog>
    </DialogContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(DialogContext); 
  if (!context) throw new Error('useNotification must be used within NotificationProvider');
  return context;
};