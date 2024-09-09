import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import LoginPage from '../pages/loginPage/LoginPage';
import MarksPage from '../pages/marksPage/MarksContainer';
import ProtectedRoute from './ProtectedRoute';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/marks" element={<ProtectedRoute><MarksPage /></ProtectedRoute>} />
    </Routes>
  </Router>
);

export default AppRouter;
