import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { usersApi } from '../../api/usersApi';
import type { User } from '../../types/api/users';
import { delay } from '../../utils/delay';
import { useLoginUserContext } from '../context/useLoginUserContext';

/**
 * ユーザー認証（ログイン・ログアウト）に関連するカスタムフック
 */
export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setIsAuthenticated, setLoginUser, setIsAdmin, isAuthenticated } = useLoginUserContext();
  const navigate = useNavigate();

  // 認証関連の情報を設定
  const setAuth = useCallback(
    (user: User) => {
      setIsAuthenticated(true);
      setLoginUser(user);
      setIsAdmin(user.id === 1); // 固定の管理者ユーザー
    },
    [setIsAdmin, setIsAuthenticated, setLoginUser]
  );

  // 認証関連の情報をクリア
  const clearAuth = useCallback(() => {
    setIsAuthenticated(false);
    setLoginUser(null);
    setIsAdmin(false);
  }, [setIsAdmin, setIsAuthenticated, setLoginUser]);

  /**
   * ログイン処理
   */
  const login = useCallback(
    async (userId: string) => {
      try {
        setLoading(true);
        setError(false);

        const user = await usersApi.getUserById(userId);
        setAuth(user);

        toast.success('ログインしました');
        navigate('/', { replace: true });
      } catch (error) {
        setError(true);
        toast.error('ログインできません');
        console.error('Login failed.', error);
      } finally {
        setLoading(false);
      }
    },
    [navigate, setAuth]
  );

  /**
   * ログアウト処理
   */
  const logout = useCallback(async () => {
    setLoading(true);
    // NOTE: 処理を遅らせる
    await delay(1000);

    clearAuth();

    setLoading(false);
    toast.info('ログアウトしました');
    navigate('/login', { replace: true });
  }, [clearAuth, navigate]);

  return { login, logout, loading, error, isAuthenticated };
};
