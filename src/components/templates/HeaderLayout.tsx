import { memo } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../organisms/Header';

/**
 * ヘッダーありレイアウト
 */
export const HeaderLayout = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});
