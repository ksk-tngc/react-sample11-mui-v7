import { useCallback, useState } from 'react';
import { toast } from 'sonner';
import { usersApi } from '../../api/usersApi';
import type { PatchUserParams, User } from '../../types/api/users';

/**
 * `/users` のAPIコールを行うカスタムフック
 */
export const useUsersApi = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /**
   * ユーザー情報全件取得
   * GET /users
   */
  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await usersApi.getUsers();
      setUsers(data);
    } catch (error) {
      setError(true);
      toast.error('ユーザーの取得に失敗しました');
      console.error(`ログイン失敗: ${error}`);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * ユーザー情報更新
   * PATCH: /users/:id
   */
  const patchUser = useCallback(async (userId: string, params: PatchUserParams) => {
    try {
      setLoading(true);
      setError(false);
      await usersApi.patchUser(userId, params);
      toast.success('更新しました');
    } catch (error) {
      setError(true);
      toast.error('更新に失敗しました');
      console.error(`更新失敗: ${error}`);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getUsers, patchUser, users, loading, error };
};
