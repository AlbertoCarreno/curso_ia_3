import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f7fb',
      paper: '#ffffff',
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#2e7d32',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid #d6dce8',
          boxShadow: 'none',
        },
      },
    },
  },
});
