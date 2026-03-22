import { createContext, useState, useContext, type ReactNode, useMemo } from 'react';
import { COLORS } from '../../consts/ThemeContextConsts';
import type { ThemeColor, ThemeContextType } from '../../types/ThemeContextTypes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isPink, setIsPink] = useState(false);

  const mainColor: ThemeColor = isPink ? COLORS.PINK : COLORS.BLUE;

  const toggleTheme = () => setIsPink((prev) => !prev);

   const contextValues = useMemo(() => ({
    mainColor,
    toggleTheme
    }), [mainColor]);


  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useAppTheme must be used within ThemeProvider');
  return context;
};