import { Typography } from '@mui/material';
import { memo } from 'react';

type Props = {
  isAdmin?: boolean;
};

/**
 * ログインユーザーの情報表示カード（タイトル）
 */
export const LoginUserCardTitle = memo(({ isAdmin = false }: Props) => {
  return (
    <Typography typography="body2">
      ログインユーザー{isAdmin ? '（管理者）' : '（一般）'}
    </Typography>
  );
});
