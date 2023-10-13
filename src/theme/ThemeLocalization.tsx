"use client";

import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { ReactNode } from "react";

const ThemeLocalization = ({ children }: { children: ReactNode }) => {
  const defaultTheme = useTheme();

  const theme = createTheme(defaultTheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ThemeLocalization;
