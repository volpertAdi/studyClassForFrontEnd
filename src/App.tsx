import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <NotificationProvider> 
      <CssBaseline />
      <Header />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </NotificationProvider>
  );
}

export default App;