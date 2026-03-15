import { createContext, useState, useContext, type ReactNode } from 'react';
import { colors } from '../../consts/ThemeContextConsts';
import type { ThemeColor, ThemeContextType } from '../../types/ThemeContextTypes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isPink, setIsPink] = useState(false);

  const mainColor: ThemeColor = isPink ? colors[0] : colors[1];

  const toggleTheme = () => setIsPink((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ mainColor, isPink, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useAppTheme must be used within ThemeProvider');
  return context;
};