import { colors } from '../consts/ThemeContextConsts';

export type ThemeColor = (typeof colors)[number]

export interface ThemeContextType {
  mainColor: ThemeColor;
  isPink: boolean;
  toggleTheme: () => void;
}