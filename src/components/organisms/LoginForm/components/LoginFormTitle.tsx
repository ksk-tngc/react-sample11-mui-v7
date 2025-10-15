import { Typography, type TypographyProps } from '@mui/material';
import { memo } from 'react';

type Props = TypographyProps;

/**
 * ログインフォーム（タイトル）
 */
export const LoginFormTitle = memo(({ children = 'ユーザー管理アプリ', sx, ...props }: Props) => {
  return (
    <Typography
      component="h1"
      sx={{
        fontSize: '1.18rem',
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: '0.05rem',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
});
