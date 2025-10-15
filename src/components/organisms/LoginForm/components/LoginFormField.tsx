import { TextField, type TextFieldProps } from '@mui/material';
import { memo } from 'react';

type Props = TextFieldProps;

/**
 * ログインフォーム（フィールド）
 */
export const LoginFormField = memo(({ sx, ...props }: Props) => {
  return (
    <TextField
      size="small"
      fullWidth
      sx={{
        '& .MuiInputLabel-root': {
          color: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[600] : theme.palette.grey[500],
        },
        ...sx,
      }}
      {...props}
    />
  );
});
