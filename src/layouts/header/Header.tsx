import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "@root/assets/layout/logo.svg";
import { DropDownMenu } from "./dropdown-menu/DropDownMenu";

export const Header = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={2}
      >
        <Image src={Logo} alt="brand-logo" />
        <Box display={"flex"} alignItems={"center"} gap={2.5}>
          <Button
            disableRipple
            sx={{
              color: "#2B2B33",
              fontsize: "16px",
              fontWeight: "500",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {" "}
            Home{" "}
          </Button>
          <Button
            disableRipple
            sx={{
              color: "#2B2B33",
              fontsize: "16px",
              fontWeight: "500",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {" "}
            About Us{" "}
          </Button>
          <DropDownMenu />
          <Button
            disableRipple
            sx={{
              color: "#2B2B33",
              fontsize: "16px",
              fontWeight: "500",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {" "}
            Pricing{" "}
          </Button>
          <Button
            disableRipple
            sx={{
              color: "#2B2B33",
              fontsize: "16px",
              fontWeight: "500",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {" "}
            Contact Us{" "}
          </Button>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={2} flexWrap={"wrap"}>
          <Button
            variant="outlined"
            sx={{
              color: "#2B2B33",
              fontsize: "16px",
              fontWeight: "500",
              border: "1px solid #2B2B33",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                border: "1px solid #2B2B33",
              },
            }}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "white",
              fontsize: "16px",
              fontWeight: "500",
              backgroundColor: "#2B2B33",
              "&:hover": { backgroundColor: "#2B2B33" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
