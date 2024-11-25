'use client';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

interface ThemeProps {
  children: ReactNode;
}

declare module "@mui/material/styles" {
  interface Palette {
    customLight?: Palette["primary"];
  }
  interface PaletteOptions {
    customLight?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    negativeOutlined: true;
  }
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
    customLight: {
      main: "#ffffff",
      contrastText: "#7e053a",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "negativeOutlined" },
          style: {
            backgroundColor: "#ffffff",
            color: "#7e053a",
            border: "1px solid #7e053a",
            borderRadius: "50px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#fce4ec",
              borderColor: "#5a0328",
              color: "#5a0328",
            },
            "&:active": {
              backgroundColor: "#f8d0da",
              borderColor: "#5a0328",
            },
            "&:focus-visible": {
              outline: "2px solid #7e053a",
              outlineOffset: "2px",
            },
          },
        },
      ],
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
