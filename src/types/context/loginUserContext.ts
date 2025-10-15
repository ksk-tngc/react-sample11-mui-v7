import type { User } from '../api/users';

/**
 * 認証情報（ログインユーザー情報）の Context の型
 */
export type LoginUserContextValue = {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;

  loginUser: User | null;
  setLoginUser: (user: User | null) => void;

  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
};
