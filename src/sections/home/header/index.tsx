"use client";
import { Box } from "@mui/material";
import Searchbar from "@root/components/searchbar";
import React from "react";
import styles from "./styles";
import HeaderColumns from "./headerColumns";

const Header = () => {
  const { flexCenter } = styles();

  return (
    <Box sx={{ pl: { xs: 1.6, md: 4.6, xl: 11.6 } }}>
      <Box sx={{ ...flexCenter, mt: 2, mb: { xs: 3, md: 6, xl: 8 } }}>
        <Searchbar />
      </Box>
      <HeaderColumns />
    </Box>
  );
};

export default Header;
