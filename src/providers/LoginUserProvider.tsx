import { memo, useState, type ReactNode } from 'react';
import { LoginUserContext } from '../contexts/LoginUserContext';
import type { User } from '../types/api/users';
import type { LoginUserContextValue } from '../types/context/loginUserContext';

type Props = {
  children: ReactNode;
};

/**
 * 認証情報（ログインユーザー情報）を提供するプロバイダー
 */
export const LoginUserProvider = memo(({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginUser, setLoginUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const value: LoginUserContextValue = {
    isAuthenticated,
    setIsAuthenticated,
    loginUser,
    setLoginUser,
    isAdmin,
    setIsAdmin,
  };

  return <LoginUserContext.Provider value={value}>{children}</LoginUserContext.Provider>;
});
