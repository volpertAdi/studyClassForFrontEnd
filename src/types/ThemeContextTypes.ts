import { COLORS } from '../consts/ThemeContextConsts';

export type ThemeColor = typeof COLORS[keyof typeof COLORS];

export interface ThemeContextType {
  mainColor: ThemeColor;
  toggleTheme: () => void;
}