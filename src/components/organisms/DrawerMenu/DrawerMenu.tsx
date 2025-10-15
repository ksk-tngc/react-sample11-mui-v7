import { Drawer, type DrawerProps } from '@mui/material';
import { memo } from 'react';
import { useAuth } from '../../../hooks/api/useAuth';
import { ProgressBackdrop } from '../../atoms/ProgressBackdrop';
import type { MenuItem } from '../Header/Header';
import { DrawerMenuList } from './components/DrawerMenuList';

type Props = Omit<DrawerProps, 'open' | 'onClose'> & {
  open: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
};

/**
 * モバイル用ドロワーメニュー
 */
export const DrawerMenu = memo(({ open, onClose, menuItems, sx, ...props }: Props) => {
  const { logout, loading } = useAuth();

  return (
    <>
      <Drawer
        component="nav"
        open={open}
        onClose={onClose}
        variant="temporary"
        anchor="right"
        sx={{ display: { sm: 'none' }, ...sx }}
        {...props}
      >
        <DrawerMenuList onClose={onClose} menuItems={menuItems} logout={logout} />
      </Drawer>

      {/* ログアウト中のバックドロップ */}
      <ProgressBackdrop open={loading} />
    </>
  );
});
