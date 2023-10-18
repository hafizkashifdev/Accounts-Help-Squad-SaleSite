"use client";
import Image from "next/image";
import Logo from "@root/assets/layout/images/logo.svg";
import { usePathname, useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const HeaderAuth = () => {
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
        <Image
          src={Logo}
          alt="brand-logo"
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        />
        <Button
          variant={pathname === "/signin" ? "contained" : "outlined"}
          onClick={() =>
            router.push(pathname === "/signin" ? "/signup" : "/signin")
          }
        >
          {pathname === "/signin" ? "Sign Up" : "Sign In"}
        </Button>
      </Box>
    </Box>
  );
};
