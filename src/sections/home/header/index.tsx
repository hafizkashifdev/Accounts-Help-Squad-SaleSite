import { Box } from "@mui/material";
import Searchbar from "@root/components/searchbar";
import HeaderColumns from "./headerColumns";

const Header = () => {
  return (
    <Box pl={{ xs: 1, md: 5 }}>
      <Box sx={{ textAlign: "center", my: 2 }}>
        <Searchbar />
      </Box>
      <HeaderColumns />
    </Box>
  );
};

export default Header;
