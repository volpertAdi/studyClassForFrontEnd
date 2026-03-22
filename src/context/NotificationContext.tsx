import { createContext, useState, useContext, useCallback, useMemo, type ReactNode } from 'react';
// mui
import { DialogContent } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// style
import * as S from './NotificationStyle';
// types
import type { ModalContent, NotificationContextType, severity } from '../types/NotifactionTypes';
// consts
import { CONFIRM, ERROR, SUCCESS } from '../consts/NotificationConsts';

const DialogContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ModalContent>({
    title: '',
    message: '',
    severity: SUCCESS,
  });

  const showModal = useCallback((title: string, message: string, severity: severity = SUCCESS) => {
    setContent({ title, message, severity });
    setIsOpen(true);
  }, []);

  const handleClose = () => setIsOpen(false);

  const contextValue = useMemo(() => ({
    showModal
  }), [showModal]);

  return (
    <DialogContext.Provider value={contextValue}>
      {children}

      <S.StyledDialog open={isOpen} onClose={handleClose} fullWidth maxWidth="xs">
        <S.IconWrapper>
          {content.severity === SUCCESS ? (
            <CheckCircleOutlineIcon color={SUCCESS} sx={{ fontSize: 40 }} />
          ) : (
            <ErrorOutlineIcon color={ERROR} sx={{ fontSize: 40 }} />
          )}
        </S.IconWrapper>

        <S.StyledTitle>{content.title}</S.StyledTitle>

        <DialogContent>
          <S.MessageBody>{content.message}</S.MessageBody>
        </DialogContent>

        <S.StyledActions>
          <S.ConfirmButton
            onClick={handleClose}
            variant="contained"
            color={content.severity === SUCCESS ? SUCCESS : ERROR}
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
  if (!context) {
    throw new Error('useNotification must be used within NotificationProvider');
  }
  return context;
};