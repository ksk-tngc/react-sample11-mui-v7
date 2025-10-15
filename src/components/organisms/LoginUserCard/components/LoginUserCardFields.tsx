import { List, Stack } from '@mui/material';
import { memo } from 'react';
import type { User } from '../../../../types/api/users';
import { LoginUserCardField } from './LoginUserCardField';

type Props = {
  user: User | null;
};

/**
 * ログインユーザーの情報表示カード（情報表示部）
 */
export const LoginUserCardFields = memo(({ user }: Props) => {
  return (
    <List dense>
      <Stack
        useFlexGap
        direction="row"
        alignItems="start"
        flexWrap="wrap"
        columnGap={2}
        sx={{
          '& .MuiListItem-root': {
            py: 0,
            pl: 0,
          },
        }}
      >
        <LoginUserCardField label="ID" value={user?.id} />
        <LoginUserCardField label="Name" value={user?.username} />
        <LoginUserCardField label="Full Name" value={user?.name} />
        <LoginUserCardField label="Email" value={user?.email} />
      </Stack>
    </List>
  );
});
