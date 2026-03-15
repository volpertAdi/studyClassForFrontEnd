import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
//context
import { NotificationProvider } from './context/NotificationContext';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider> 
        <CssBaseline />
        <Header />
        <Outlet />
      </NotificationProvider>
    </ThemeProvider>
    
  );
}

export default App;