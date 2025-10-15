import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router';
import { routes } from './routes/routes';
import { theme } from './theme/theme';

export const App = () => {
  const Content = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{Content}</CssBaseline>
    </ThemeProvider>
  );
};
