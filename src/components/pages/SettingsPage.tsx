import { Box } from '@mui/material';
import { memo } from 'react';
import { ModeRadio } from '../organisms/ModeRadio';

/**
 * 設定ページ
 */
export const SettingsPage = memo(() => {
  return (
    <Box sx={{ p: 4 }}>
      <ModeRadio />
    </Box>
  );
});
