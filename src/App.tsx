import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </>
  );
}

export default App;