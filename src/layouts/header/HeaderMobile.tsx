"use client";
import Image from "next/image";
import Logo from "@root/assets/layout/images/logo.svg";
import { DropDownMenu } from "./dropdown-menu/DropDownMenu";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { MenuItem } from "./menu-item/MenuItem";
import { IconButton } from "@mui/material";

export const HeaderMobile = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Box>
      <Box
        // sx={{
        //   ...(!isVisible && {
        //     backgroundColor: "white",
        //     position: "absolute",
        //     width: "98%",
        //     padding: 2,
        //     zIndex: 50,
        //   }),
        // }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={2}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={4}
        >
          <Image src={Logo} alt="brand-logo" />
          <Box sx={{ cursor: "pointer" }}>
            <IconButton
              onClick={() => setIsVisible((x) => !x)}
              sx={{
                backgroundColor: "primary.main",
                borderRadius: "10px",
                "&:hover": { backgroundColor: "primary.main" },
              }}
            >
              {isVisible ? (
                <MenuIcon sx={{ color: "white" }} />
              ) : (
                <CloseIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </Box>
        </Box>
        {!isVisible && (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={2.5}
          >
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
            </Button>
            <Button
              onClick={() => {
                router.push("/about-us");
                setIsVisible(false);
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
            </Button>
            <DropDownMenu />
            <Button
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
        )}
        {!isVisible && (
          <Box
            display={"flex"}
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
        )}
      </Box>
    </Box>
  );
};
