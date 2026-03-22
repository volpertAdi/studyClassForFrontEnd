import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
//context
import { NotificationProvider } from './context/NotificationContext';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';
//store
import { Provider } from 'react-redux';
import { store } from './Store/store';
import DataLoader from './components/DataLoader/DataLoader';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NotificationProvider>
          <DataLoader> 
            <CssBaseline />
            <Header />
            <Outlet />
          </DataLoader>
        </NotificationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;