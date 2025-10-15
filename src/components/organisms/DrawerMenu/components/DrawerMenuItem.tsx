import { ListItem, ListItemButton } from '@mui/material';
import { memo, type ComponentProps } from 'react';
import { RouterLink } from '../../../atoms/RouterLink';

type Props = {
  label: string;
  href: string;
  onClick?: ComponentProps<typeof RouterLink>['onClick'];
};

/**
 * モバイル用ドロワーメニュー（リンクアイテム）
 */
export const DrawerMenuItem = memo((props: Props) => {
  const { label, href, onClick } = props;

  return (
    <ListItem key={label} disablePadding>
      <ListItemButton>
        <RouterLink to={href} onClick={onClick} sx={{ textAlign: 'center', width: '100%' }}>
          {label}
        </RouterLink>
      </ListItemButton>
    </ListItem>
  );
});
