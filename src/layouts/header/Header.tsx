"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import { HeaderMobileUp } from "./HeaderMobileUp";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return <>{matches ? <HeaderMobile /> : <HeaderMobileUp />}</>;
};
