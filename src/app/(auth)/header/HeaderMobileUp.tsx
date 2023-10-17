"use client";
import Image from "next/image";
import Logo from "@root/assets/layout/images/logo.svg";
import { usePathname, useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
        <Image src={Logo} alt="brand-logo" onClick={() => router.push("/")} />
        {/* <Box
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
        </Box> */}
        <Box
          display={{ xs: "none", md: "flex" }}
          alignItems={"center"}
          justifyContent={"space-around"}
          gap={2}
          flexWrap={"wrap"}
        >
          <Button variant={pathname === "/signin" ? "contained" : "outlined"} onClick={() => router.push(pathname === "/signin" ? "/signup" : "/signin")}>
            {pathname === "/signin" ? "Sign Up" : "Sign In"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
