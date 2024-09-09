import { jsx as _jsx } from "react/jsx-runtime";
import AppRouter from './router';
import { AuthProvider } from './contexts/AuthContext';
const App = () => (_jsx(AuthProvider, { children: _jsx(AppRouter, {}) }));
export default App;
