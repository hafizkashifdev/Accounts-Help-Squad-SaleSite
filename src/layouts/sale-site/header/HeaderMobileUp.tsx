"use client";
import Image from "next/image";
import Logo from "@root/assets/layout/images/logo.svg";
import { usePathname, useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { MenuItem } from "./menu-item/MenuItem";
import { DropDownMenu } from "./dropdown-menu/DropDownMenu";

export const HeaderMobileUp = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent={{ xs: "center", lg: "space-between" }}
      flexWrap={"wrap"}
      gap={2}
    >
      <Image
        src={Logo}
        alt="brand-logo"
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      />
      <Box
        display={{ xs: "none", md: "flex" }}
        flexDirection={{ xs: "column", md: "row" }}
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
      <Box
        display={{ xs: "none", md: "flex" }}
        alignItems={"center"}
        justifyContent={"space-around"}
        gap={2}
        flexWrap={"wrap"}
      >
        <Button
          onClick={() => router.push("/signin")}
          variant="outlined"
          sx={{
            fontFamily: "__Exo_2_b9bafb",
            bgcolor: "transparent",
            color: "primary.main",
            borderRadius: 2,
            ":hover": { border: "none", bgcolor: "#F0F0F2" },
          }}
        >
          Sign In
        </Button>
        <Button
          onClick={() => router.push("/signup")}
          variant="contained"
          sx={{
            fontFamily: "__Exo_2_b9bafb",
            bgcolor: "primary.main",
            color: "common.white",
            borderRadius: 2,
            ":hover": { bgcolor: "#565666" },
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};
