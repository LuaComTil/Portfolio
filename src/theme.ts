import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#181818",
    },
    secondary: {
      main: "#F2F2F2",
    },
  },
  typography: {
    fontFamily: "Red Hat Mono", 
  }
});

theme = responsiveFontSizes(theme);
export default theme;
