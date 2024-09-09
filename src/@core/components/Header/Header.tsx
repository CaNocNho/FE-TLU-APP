import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAuthContext } from '../../../contexts/AuthContext';

const Header: React.FC = () => {
  const { logout } = useAuthContext(); 

  return (
    <AppBar position="static" className="bg-green-500">
      <Toolbar className="flex justify-between items-center">
        <Typography variant="h6" className="text-white">
          Xin chào bạn
        </Typography>
        <Button color="inherit" onClick={logout} className="hover:bg-green-700">
          Đăng xuất
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
