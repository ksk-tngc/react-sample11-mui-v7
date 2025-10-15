import { ListItem, ListItemText } from '@mui/material';
import { memo } from 'react';

type Props = {
  label: string;
  value?: string | number;
};

/**
 * ログインユーザーの情報表示カード（フィールド）
 */
export const LoginUserCardField = memo(({ label, value }: Props) => {
  return (
    <ListItem sx={{ width: 'fit-content' }}>
      <ListItemText primary={label} secondary={value} sx={{ overflowWrap: 'break-word' }} />
    </ListItem>
  );
});
