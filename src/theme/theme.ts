import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#3568D4",
      light: "#8EAEFF",
      dark: "#254FA8",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#8B5CF6",
    },

    background: {
      default: "#080B14",
      paper: "#101625",
    },

    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },

    divider: "rgba(148, 163, 184, 0.15)",
  },

  typography: {
    fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),

    h1: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },

    h2: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },

    h3: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          minWidth: "320px",
          backgroundColor: "#080B14",
          scrollbarColor: "#334155 #080B14",
        },

        "*": {
          boxSizing: "border-box",
        },

        "::selection": {
          backgroundColor: "#5B8CFF",
          color: "#FFFFFF",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 22px",
          boxShadow: "none",
        },

        contained: {
          color: "#FFFFFF",

          "&.MuiButton-colorPrimary": {
            backgroundColor: "#3568D4",
          },

          "&.MuiButton-colorPrimary:hover": {
            backgroundColor: "#254FA8",
            boxShadow: "0 0 24px rgba(53, 104, 212, 0.25)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(148, 163, 184, 0.12)",
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
