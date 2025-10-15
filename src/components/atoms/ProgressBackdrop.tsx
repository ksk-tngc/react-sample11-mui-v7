import { Backdrop, CircularProgress } from '@mui/material';
import { memo } from 'react';

type Props = {
  open: boolean;
};

/**
 * ローディングスピナーのバックドロップ
 */
export const ProgressBackdrop = memo(({ open }: Props) => {
  if (!open) return null;

  return (
    <Backdrop
      open={open}
      sx={(theme) => ({
        zIndex: theme.zIndex.drawer + 1,
      })}
    >
      <CircularProgress sx={{ color: (theme) => theme.palette.grey[400] }} size="3rem" />
    </Backdrop>
  );
});
