import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { PATH_URL } from '../../constants/pathUrl';
import { Container, Box, TextField, Button, Typography, Alert } from '@mui/material';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(null);
        try {
            await login(username, password);
            navigate(PATH_URL.HOME);
        }
        catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Tên đăng nhập hoặc mật khẩu không đúng.');
        }
    };
    return (_jsx(Container, { component: "main", maxWidth: "xs", sx: { display: 'flex', alignItems: 'center', minHeight: '100vh' }, children: _jsxs(Box, { sx: {
                mt: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: 3,
            }, children: [_jsx(Typography, { component: "h1", variant: "h5", sx: { mb: 3 }, children: "\u0110\u0103ng nh\u1EADp" }), errorMessage && _jsx(Alert, { severity: "error", sx: { mb: 2 }, children: errorMessage }), _jsxs(Box, { component: "form", onSubmit: handleSubmit, sx: { mt: 1 }, children: [_jsx(TextField, { margin: "normal", required: true, fullWidth: true, id: "username", label: "T\u00EAn \u0111\u0103ng nh\u1EADp", name: "username", autoComplete: "username", autoFocus: true, value: username, onChange: (e) => setUsername(e.target.value) }), _jsx(TextField, { margin: "normal", required: true, fullWidth: true, name: "password", label: "M\u1EADt kh\u1EA9u", type: "password", id: "password", autoComplete: "current-password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", color: "primary", sx: { mt: 3, mb: 2 }, children: "\u0110\u0103ng nh\u1EADp" })] })] }) }));
};
export default LoginPage;
