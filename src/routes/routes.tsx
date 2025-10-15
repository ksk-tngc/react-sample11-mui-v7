import type { RouteObject } from 'react-router';
import { HomePage } from '../components/pages/HomePage';
import { LoginPage } from '../components/pages/LoginPage';
import { NotFoundPage } from '../components/pages/NotFoundPage';
import { SettingsPage } from '../components/pages/SettingsPage';
import { UsersPage } from '../components/pages/UsersPage';
import { AuthGuard } from '../components/templates/AuthGuard';

/**
 * ルート定義
 */
export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <AuthGuard />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
