import { memo, type ComponentProps } from 'react';
import { RouterLink } from '../../../atoms/RouterLink';

type Props = {
  label: string;
  href: string;
  onClick?: ComponentProps<typeof RouterLink>['onClick'];
};

/**
 * ヘッダー（メニューリンク）
 */
export const HeaderMenuLink = memo((props: Props) => {
  const { label, href, onClick } = props;

  return (
    <RouterLink
      key={label}
      to={href}
      onClick={onClick}
      sx={{
        color: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.primary.contrastText
            : theme.palette.text.primary,
      }}
    >
      {label}
    </RouterLink>
  );
});
