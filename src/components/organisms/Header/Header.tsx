import { AppBar, Toolbar } from '@mui/material';
import { grey } from '@mui/material/colors';
import { memo, useState } from 'react';
import { HamburgerButton } from '../../atoms/HamburgerButton';
import { DrawerMenu } from '../DrawerMenu';
import { HeaderMenu } from './components/HeaderMenu';
import { HeaderTitle } from './components/HeaderTitle';

export type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { label: 'ホーム', href: '/' },
  { label: 'ユーザー一覧', href: 'users' },
  { label: '設定', href: 'settings' },
];

/**
 * ヘッダー
 */
export const Header = memo(() => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <AppBar component="header" sx={{ color: grey[50] }} position="static">
        <Toolbar component="nav">
          <HeaderTitle />
          <HamburgerButton
            onClick={() => {
              setOpenDrawer(true);
            }}
          />
          <HeaderMenu menuItems={menuItems} />
        </Toolbar>
      </AppBar>

      {/* モバイル用ドロワーメニュー */}
      <DrawerMenu open={openDrawer} onClose={() => setOpenDrawer(false)} menuItems={menuItems} />
    </>
  );
});
