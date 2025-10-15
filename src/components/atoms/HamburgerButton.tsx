import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, type IconButtonProps } from '@mui/material';
import { memo } from 'react';

type Props = IconButtonProps;

/**
 * ハンバーガーアイコンボタン
 */
export const HamburgerButton = memo(({ onClick, sx, ...props }: Props) => {
  return (
    <IconButton
      edge="start"
      onClick={onClick}
      sx={{
        display: { sm: 'none' },
        color: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.primary.contrastText
            : theme.palette.text.primary,
        ...sx,
      }}
      {...props}
    >
      <MenuIcon />
    </IconButton>
  );
});
