import { Box, Card, Divider } from '@mui/material';
import { memo } from 'react';
import { useLoginUserContext } from '../../../hooks/context/useLoginUserContext';
import { LoginUserCardFields } from './components/LoginUserCardFields';
import { LoginUserCardImage } from './components/LoginUserCardImage';
import { LoginUserCardTitle } from './components/LoginUserCardTitle';

/**
 * ログインユーザーの情報表示カード
 */
export const LoginUserCard = memo(() => {
  const { loginUser, isAdmin } = useLoginUserContext();

  return (
    <Card
      sx={(theme) => ({
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 180px) 1fr',
        alignItems: 'center',
        maxWidth: theme.breakpoints.values.md,
        width: '90%',
        mx: 'auto',
        gap: 0.7,
      })}
    >
      <LoginUserCardImage userId={loginUser?.id} />
      <Box sx={{ pt: 2, px: 2 }}>
        <LoginUserCardTitle isAdmin={isAdmin} />
        <Divider sx={{ mt: 1.3 }} />
        <LoginUserCardFields user={loginUser} />
      </Box>
    </Card>
  );
});
