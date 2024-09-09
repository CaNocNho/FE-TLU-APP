import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType } from '../utils/faker';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setTokenState] = useState<string | null>(() => localStorage.getItem('token'));

    const setToken = (newToken: string | null) => {
        if (newToken) {
          localStorage.setItem('token', newToken);
        } else {
          localStorage.removeItem('token');
        }
        setTokenState(newToken);
      };

      const login = async (username: string, password: string, rememberMe: boolean) => {
        const mockLogin = async (): Promise<string> => {
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

  return (
    <AuthContext.Provider value={{ token, setToken, login, logout  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
