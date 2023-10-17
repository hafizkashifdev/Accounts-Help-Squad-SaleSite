"use client";
import { Box } from "@mui/material";
import Searchbar from "@root/components/searchbar";
import React from "react";
import styles from "./styles";
import HeaderColumns from "./headerColumns";

const Header = () => {
  const { flexCenter } = styles();

  return (
    <Box sx={{ pl: 11.6 }}>
      <Box sx={{ ...flexCenter, mt: 2, mb: 8 }}>
        <Searchbar />
      </Box>
      <HeaderColumns />
    </Box>
  );
};

export default Header;
