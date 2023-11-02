import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#037971',
    },
    secondary: {
      main: '#037971',
    },
    error: {
      main: "#f96900",
    },
    background: {
      default: '#023436',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeightLight: 300, 
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default theme;