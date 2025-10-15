import { CardMedia } from '@mui/material';
import { memo } from 'react';
import { getUserImageUrl } from '../../../../utils/user';

type Props = {
  userId?: number;
};

/**
 * ログインユーザーの情報表示カード（ユーザー画像）
 */
export const LoginUserCardImage = memo(({ userId = 1 }: Props) => {
  return <CardMedia image={getUserImageUrl(userId)} sx={{ width: '100%', height: '100%' }} />;
});
