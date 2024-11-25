'use client';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

interface ThemeProps {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#7e053a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7e053a",
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
        },
        contained: {
          backgroundColor: "#7e053a",
          "&:hover": {
            backgroundColor: "#5a032880",
          },
        },
        outlined: {
          borderColor: "#7e053a",
          color: "#7e053a",
          "&:hover": {
            borderColor: "#7e053a",
            backgroundColor: "#7e053a1a",
          },
        },
        text: {
          color: "#7e053a",
          "&:hover": {
            backgroundColor: "#7e053a1a",
          },
        },
      },
    },
  },
});

const CustomThemeProvider = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default CustomThemeProvider;
