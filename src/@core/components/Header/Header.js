import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAuthContext } from '../../../contexts/AuthContext';
const Header = () => {
    const { logout } = useAuthContext();
    return (_jsx(AppBar, { position: "static", className: "bg-green-500", children: _jsxs(Toolbar, { className: "flex justify-between items-center", children: [_jsx(Typography, { variant: "h6", className: "text-white", children: "Xin ch\u00E0o b\u1EA1n" }), _jsx(Button, { color: "inherit", onClick: logout, className: "hover:bg-green-700", children: "\u0110\u0103ng xu\u1EA5t" })] }) }));
};
export default Header;
