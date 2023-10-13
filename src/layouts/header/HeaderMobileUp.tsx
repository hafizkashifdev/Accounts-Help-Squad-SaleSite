"use client";

import Image from "next/image";
import Logo from "@root/assets/layout/images/logo.svg";
import { DropDownMenu } from "./dropdown-menu/DropDownMenu";
import { usePathname, useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { MenuItem } from "./menu-item/MenuItem";

export const HeaderMobileUp = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent={{ xs: "center", lg: "space-between" }}
        flexWrap={"wrap"}
        gap={2}
      >
        <Image src={Logo} alt="brand-logo" />
        <Box
          display={{ xs: "none", md: "flex" }}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"center"}
          gap={2.5}
        >
          {/* <Button
            onClick={() => router.push("/")}
            disableRipple
            sx={{
              color: pathname === "/" ? "red" : "#2B2B33",
              fontsize: "16px",
              fontWeight: "500",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {" "}
            Home{" "}
          </Button> */}
          <MenuItem
            menuOnClick={() => router.push("/")}
            isActive={pathname === "/"}
            menuItemName="Home"
          />
          <MenuItem
            menuOnClick={() => router.push("/about-us")}
            isActive={pathname.startsWith("/about-us")}
            menuItemName="About Us"
          />
          <DropDownMenu />
          <MenuItem
            menuOnClick={() => router.push("/pricing")}
            isActive={pathname.startsWith("/pricing")}
            menuItemName="Pricing"
          />
          <MenuItem
            menuOnClick={() => router.push("/contact-us")}
            isActive={pathname.startsWith("/contact-us")}
            menuItemName="Contact Us"
          />
          {/* <Button
            onClick={() => {
              router.push("/about-us");
            }}
            disableRipple
            sx={{
              color: pathname.startsWith("/about-us") ? "red" : "#2B2B33",
              fontsize: "16px",
              fontWeight: "500",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {" "}
            About Us{" "}
          </Button> */}
          {/* <DropDownMenu /> */}
          {/* <Button
            onClick={() => router.push("/pricing")}
            disableRipple
            sx={{
              color: pathname.startsWith("/pricing") ? "red" : "#2B2B33",
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
            onClick={() => router.push("/contact-us")}
            disableRipple
            sx={{
              color: pathname.startsWith("/contact-us") ? "red" : "#2B2B33",
              fontsize: "16px",
              fontWeight: "500",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {" "}
            Contact Us{" "}
          </Button> */}
        </Box>

        <Box
          display={{ xs: "none", md: "flex" }}
          alignItems={"center"}
          justifyContent={"space-around"}
          gap={2}
          flexWrap={"wrap"}
        >
          <Button
            variant="outlined"
            // sx={{
            //   color: "#2B2B33",
            //   fontsize: "16px",
            //   fontWeight: "500",
            //   border: "1px solid #2B2B33",
            //   backgroundColor: "transparent",
            //   "&:hover": {
            //     backgroundColor: "transparent",
            //     border: "1px solid #2B2B33",
            //   },
            // }}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            // sx={{
            //   color: "white",
            //   fontsize: "16px",
            //   fontWeight: "500",
            //   backgroundColor: "#2B2B33",
            //   "&:hover": { backgroundColor: "#2B2B33" },
            // }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
