import React from "react";
import { typography } from "../utils/typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Router from "../pages/Router";
import { Navbar } from "../components/Navbar";
typography.injectStyles();

const theme = createTheme({
  typography: {
    fontFamily: ["Kanit"].join(""),
  },
});
export function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router />
    </ThemeProvider>
  );
}

export default Layout;
