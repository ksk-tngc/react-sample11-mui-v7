import { memo } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../hooks/api/useAuth';
import { HeaderLayout } from './HeaderLayout';

/**
 * 未ログイン時のルートを保護
 */
export const AuthGuard = memo(() => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <HeaderLayout />;
});
