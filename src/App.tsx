import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <NotificationProvider> 
      <CssBaseline />
      <Header />
      <Outlet />
    </NotificationProvider>
  );
}

export default App;