import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import LoginPage from '../pages/loginPage/LoginPage';
import MarksPage from '../pages/marksPage/MarksContainer';
import ProtectedRoute from './ProtectedRoute';
const AppRouter = () => (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ProtectedRoute, { children: _jsx(HomePage, {}) }) }), _jsx(Route, { path: "/login", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/marks", element: _jsx(ProtectedRoute, { children: _jsx(MarksPage, {}) }) })] }) }));
export default AppRouter;
