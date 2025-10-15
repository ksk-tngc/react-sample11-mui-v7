import { Box } from '@mui/material';
import { memo } from 'react';
import { useAuth } from '../../../../hooks/api/useAuth';
import { ProgressBackdrop } from '../../../atoms/ProgressBackdrop';
import type { MenuItem } from '../Header';
import { HeaderMenuLink } from './HeaderMenuLink';

type Props = {
  menuItems: MenuItem[];
};

/**
 * ヘッダー（メニュー）
 */
export const HeaderMenu = memo(({ menuItems }: Props) => {
  const { logout, loading } = useAuth();

  return (
    <>
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 0.5, alignItems: 'center' }}>
        {menuItems.map((item) => (
          <HeaderMenuLink key={item.label} label={item.label} href={item.href} />
        ))}

        {/* ログアウト */}
        <HeaderMenuLink
          label="ログアウト"
          href=""
          onClick={(e) => {
            e.preventDefault(); // NOTE: ページ遷移させない
            logout();
          }}
        />
      </Box>

      {/* ログアウト中のバックドロップ */}
      <ProgressBackdrop open={loading} />
    </>
  );
});
