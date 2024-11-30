import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import { ProfileProvider } from './context/ProfileContext';
import './styles/style.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ProfileProvider>
      <AppRoutes />
    </ProfileProvider>
  </React.StrictMode>
);