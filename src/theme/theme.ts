import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

/**
 * MUI のテーマをカスタマイズ
 * @see https://mui.com/material-ui/customization/theming/
 */
export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#5e81ac',
        },
        background: {
          default: grey[100],
        },
      },
    },
    dark: {
      palette: {
        text: {
          primary: grey[300],
        },
        background: {
          paper: grey[900],
        },
      },
    },
  },
});
