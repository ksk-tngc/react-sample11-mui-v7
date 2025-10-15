import { createContext } from 'react';
import type { LoginUserContextValue } from '../types/context/loginUserContext';

/**
 * 認証情報（ログインユーザー情報）を保持する Context
 */
export const LoginUserContext = createContext<LoginUserContextValue | null>(null);
