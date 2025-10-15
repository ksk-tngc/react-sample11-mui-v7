import { Box, List } from '@mui/material';
import { memo } from 'react';
import type { MenuItem } from '../../Header/Header';
import { DrawerMenuItem } from './DrawerMenuItem';

type Props = {
  onClose: () => void;
  menuItems: MenuItem[];
  logout: () => Promise<void>;
};

/**
 * モバイル用ドロワーメニュー（リンクリスト）
 */
export const DrawerMenuList = memo((props: Props) => {
  const { onClose, menuItems, logout } = props;

  return (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <DrawerMenuItem key={item.label} label={item.label} href={item.href} onClick={onClose} />
        ))}

        {/* ログアウト */}
        <DrawerMenuItem
          label="ログアウト"
          href=""
          onClick={(e) => {
            e.preventDefault(); // NOTE: ページ遷移させない
            onClose();
            logout();
          }}
        />
      </List>
    </Box>
  );
});
