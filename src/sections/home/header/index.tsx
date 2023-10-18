import { Box } from "@mui/material";
import Searchbar from "@root/components/searchbar";
import React from "react";
import HeaderColumns from "./headerColumns";

const Header = () => {
  return (
    <Box pl={{ xs: 1, md: 5 }}>
      <Box sx={{ textAlign: "center", mt: 2, mb: { xs: 3, md: 6, xl: 8 } }}>
        <Searchbar />
      </Box>
      <HeaderColumns />
    </Box>
  );
};

export default Header;
