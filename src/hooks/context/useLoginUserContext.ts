import { useContext } from 'react';
import { LoginUserContext } from '../../contexts/LoginUserContext';

/**
 * 認証情報（ログインユーザー情報）の Context を安全に取得するカスタムフック
 */
export const useLoginUserContext = () => {
  const context = useContext(LoginUserContext);

  // <Context.Provider>の中でしかvalueは提供されない
  if (!context) throw new Error('useLoginUserContextはLoginUserProvider内で使用する必要があります');

  return context;
};
