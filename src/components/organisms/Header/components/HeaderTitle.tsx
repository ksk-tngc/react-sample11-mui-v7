import { Typography } from '@mui/material';
import { memo } from 'react';
import { RouterLink } from '../../../atoms/RouterLink';

/**
 * ヘッダー（タイトル）
 */
export const HeaderTitle = memo(() => {
  return (
    <Typography component="h1" sx={{ mr: 'auto' }}>
      <RouterLink
        to="/"
        sx={{
          typography: 'subtitle1',
          fontWeight: 'bold',
          color: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.primary.contrastText
              : theme.palette.text.primary,
        }}
      >
        ユーザー管理アプリ
      </RouterLink>
    </Typography>
  );
});
