import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: unknown;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}
interface AuthState {
  token: string;
  user: unknown;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Leves:token');
    const user = localStorage.getItem('@Leves:user');

    if (token && user) return { token, user: JSON.parse(user) };
    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem('@Leves:token', token);
    localStorage.setItem('@Leves:user', JSON.stringify(user));

    setData({ token, user });
  }, []);
  const signOut = useCallback(() => {
    localStorage.remove('@Leves:token');
    localStorage.remove('@Leves:user');
    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}
export { AuthProvider, useAuth };
