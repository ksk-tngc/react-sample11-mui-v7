import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'sonner';
import { App } from './App.tsx';
import { LoginUserProvider } from './providers/LoginUserProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LoginUserProvider>
        <Toaster theme="system" />
        <App />
      </LoginUserProvider>
    </BrowserRouter>
  </StrictMode>
);
