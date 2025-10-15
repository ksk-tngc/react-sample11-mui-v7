import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import { memo, useCallback, useEffect, useState } from 'react';
import { useUsersApi } from '../../../hooks/api/useUsersApi';
import { useLoginUserContext } from '../../../hooks/context/useLoginUserContext';
import type { User } from '../../../types/api/users';

type Props = {
  open: boolean;
  onClose: () => void;
  user: User | null;
};

/**
 * ユーザー詳細モーダル
 */
export const UserDetailModal = memo(({ open, onClose, user }: Props) => {
  // form fields
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { isAdmin } = useLoginUserContext();
  const readonly = isAdmin ? false : true;
  const { patchUser, loading } = useUsersApi();

  // モーダルを開くたびにフォームの値を再設定
  useEffect(() => {
    setName(user?.username ?? '');
    setFullName(user?.name ?? '');
    setEmail(user?.email ?? '');
    setPhone(user?.phone ?? '');
  }, [user]);

  const handleUpdateClick = useCallback(async () => {
    if (!user) return;
    await patchUser(String(user.id), {
      username: name,
      name: fullName,
      email,
      phone,
    });
    onClose();
  }, [email, fullName, name, onClose, patchUser, phone, user]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth={true}>
      <DialogTitle>ユーザー詳細</DialogTitle>
      <DialogContent>
        <IconButton
          onClick={() => onClose()}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <Stack useFlexGap spacing={3} sx={{ mt: 1 }}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            slotProps={{ input: { readOnly: readonly } }}
          />
          <TextField
            label="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            variant="outlined"
            slotProps={{ input: { readOnly: readonly } }}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            type="email"
            slotProps={{ input: { readOnly: readonly } }}
          />
          <TextField
            label="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            variant="outlined"
            type="tel"
            slotProps={{ input: { readOnly: readonly } }}
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ pt: 0, pb: 2.3, px: 3 }}>
        {isAdmin && (
          <Button onClick={handleUpdateClick} loading={loading} variant="contained">
            更新
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
});
