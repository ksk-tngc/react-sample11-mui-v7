import { Box } from '@mui/material';
import { memo } from 'react';
import { LoginForm } from '../organisms/LoginForm';

/**
 * ログインページ
 */
export const LoginPage = memo(() => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoginForm />
    </Box>
  );
});
