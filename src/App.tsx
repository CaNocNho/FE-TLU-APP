import React from 'react';
import AppRouter from './router';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);

export default App;
