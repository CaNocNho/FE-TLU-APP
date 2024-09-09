import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [token, setTokenState] = useState(() => localStorage.getItem('token'));
    const setToken = (newToken) => {
        if (newToken) {
            localStorage.setItem('token', newToken);
        }
        else {
            localStorage.removeItem('token');
        }
        setTokenState(newToken);
    };
    const login = async (username, password, rememberMe) => {
        const mockLogin = async () => {
            return new Promise((resolve) => setTimeout(() => resolve('mocked_token'), 1000));
        };
        const token = await mockLogin();
        setToken(token);
        if (rememberMe) {
            localStorage.setItem('token', token);
        }
    };
    const logout = () => {
        setToken(null);
    };
    useEffect(() => {
        if (!token) {
            localStorage.removeItem('token');
        }
    }, [token]);
    return (_jsx(AuthContext.Provider, { value: { token, setToken, login, logout }, children: children }));
};
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};
