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
          <Image src={Logo} alt="brand-logo" onClick={() => router.push("/")} />
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

            <Button variant="outlined" onClick={() => router.push(pathname === "/signin" ? "/signup" : "/signin")}>
              {pathname === "/signin" ? "Sign Up" : "Sign In"}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
