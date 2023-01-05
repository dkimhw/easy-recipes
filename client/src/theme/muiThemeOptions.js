

// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

// export const themeOptions: ThemeOptions = {
  // palette: {
  //   type: 'light',
  //   primary: {
  //     main: '#3f51b5',
  //   },
  //   secondary: {
  //     main: '#f50057',
  //   },
  // },
// };

import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});
