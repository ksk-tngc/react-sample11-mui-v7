import { Box } from '@mui/material';
import { memo } from 'react';
import { LoginUserCard } from '../organisms/LoginUserCard';

/**
 * トップページ
 */
export const HomePage = memo(() => {
  return (
    <Box sx={{ pt: 4 }}>
      <LoginUserCard />
    </Box>
  );
});
