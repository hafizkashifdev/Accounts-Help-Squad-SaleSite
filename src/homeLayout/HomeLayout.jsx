import React from "react";

import "./HomeLayout.scss";

import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderHome";
import FooterHome from "./FooterHome";
import FormFooter from "./FormFooter";
import { Box } from "@mui/material";

const HomeLayout = () => {
  return (
    <Box className="main-layout-home">
      <HeaderLayout />
      <Outlet />
      <FormFooter />
      <FooterHome />
    </Box>
  );
};

export default HomeLayout;
