import {SUCCESS, ERROR} from '../consts/NotificationConsts'

export interface ModalContent {
  title: string;
  message: string;
  severity: severity;
}

export interface NotificationContextType {
  showModal: (title: string, message: string, severity?: severity) => void;
}

export type severity = typeof SUCCESS |  typeof ERROR;