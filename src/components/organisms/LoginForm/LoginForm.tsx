import { Button, Card, Divider, Stack } from '@mui/material';
import { memo, useState, type FormEvent } from 'react';
import { useAuth } from '../../../hooks/api/useAuth';
import { LoginFormField } from './components/LoginFormField';
import { LoginFormTitle } from './components/LoginFormTitle';

/**
 * ログインフォーム
 */
export const LoginForm = memo(() => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();

  const disabled = userId.trim() === '' || password.trim() === '' ? true : false;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(userId);
  };

  return (
    <Card
      sx={{ pt: 3, pb: 4, px: 3, minWidth: 360 }}
      variant="outlined"
      component="form"
      onSubmit={handleSubmit}
    >
      <LoginFormTitle />
      <Divider sx={{ mt: 1.5, mb: 2.5 }} />
      <Stack spacing={3}>
        <LoginFormField
          label="ユーザーID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <LoginFormField
          label="パスワード"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth loading={loading} disabled={disabled}>
          ログイン
        </Button>
      </Stack>
    </Card>
  );
});
