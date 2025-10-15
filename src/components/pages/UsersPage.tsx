import { Box, styled } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { useUsersApi } from '../../hooks/api/useUsersApi';
import type { User } from '../../types/api/users';
import { getUserImageUrl } from '../../utils/user';
import { ProgressBackdrop } from '../atoms/ProgressBackdrop';
import { UserCard } from '../organisms/UserCard';
import { UserDetailModal } from '../organisms/UserDetailModal';

const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
  gap: theme.spacing(2),
  [theme.breakpoints.up('xs')]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
}));

/**
 * ユーザー一覧ページ
 */
export const UsersPage = memo(() => {
  const { getUsers, users, loading } = useUsersApi();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [openModal, setOpenModal] = useState(false);

  // 初回データ取得
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GridContainer>
        {users.map((user) => (
          <UserCard
            key={user.id}
            image={getUserImageUrl(user.id)}
            name={user.username}
            fullName={user.name}
            onClick={() => {
              setSelectedUser(user);
              setOpenModal(true);
            }}
          />
        ))}
      </GridContainer>

      {/* データ取得中のローディングバックドロップ */}
      <ProgressBackdrop open={loading} />

      {/* ユーザー詳細モーダル */}
      <UserDetailModal open={openModal} onClose={() => setOpenModal(false)} user={selectedUser} />
    </>
  );
});
