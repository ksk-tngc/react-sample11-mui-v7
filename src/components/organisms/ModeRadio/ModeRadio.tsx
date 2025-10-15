import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  useColorScheme,
  type SxProps,
} from '@mui/material';
import { memo } from 'react';

type Props = {
  sx?: SxProps;
};

/**
 * ライトモード、ダークモード切り替えラジオ
 */
export const ModeRadio = memo(({ sx }: Props) => {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        bgcolor: 'background.paper',
        borderRadius: 1,
        pt: 3,
        pb: 2.5,
        px: 3.5,
        ...sx,
      }}
    >
      <FormControl>
        <FormLabel sx={{ mb: 0.5 }}>テーマ</FormLabel>
        <RadioGroup
          row
          value={mode}
          onChange={(event) => setMode(event.target.value as 'system' | 'light' | 'dark')}
          sx={{
            '& .MuiTypography-root': {
              fontSize: (theme) => theme.typography.body2,
            },
          }}
        >
          <FormControlLabel value="system" control={<Radio size="small" />} label="システム" />
          <FormControlLabel value="light" control={<Radio size="small" />} label="ライトモード" />
          <FormControlLabel value="dark" control={<Radio size="small" />} label="ダークモード" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
});
