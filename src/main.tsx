import { CssBaseline, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { appTheme } from './theme/appTheme';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
