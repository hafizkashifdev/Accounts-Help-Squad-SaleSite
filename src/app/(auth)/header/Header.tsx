"use client";
import { HeaderMobileUp } from "./HeaderMobileUp";
import { HeaderMobile } from "./HeaderMobile";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
export const HeaderAuth = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return <>{matches ? <HeaderMobile /> : <HeaderMobileUp />}</>;
};
