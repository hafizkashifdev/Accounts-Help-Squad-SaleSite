"use client";
import { Box, Button, useTheme } from "@mui/material";
import Image from "next/image";
import Logo from "@root/assets/layout/logo.svg";
import { DropDownMenu } from "./dropdown-menu/DropDownMenu";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const HeaderMobile = () => {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  // console.log(pathname.startsWith("/services"));
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Box>
      <Box
        display={"flex"}
        // alignItems={{ xs: "normal", md: "center" }}
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
            {isVisible ? (
              <MenuIcon onClick={() => setIsVisible((x) => !x)} />
            ) : (
              <CloseIcon onClick={() => setIsVisible((x) => !x)} />
            )}
            {/* {matches ? (
              isVisible === "none" ? (
                <MenuIcon onClick={() => setIsVisible("flex")} />
              ) : (
                <CloseIcon onClick={() => setIsVisible("none")} />
              )
            ) : null} */}
            {/* // {matches ? (
            //   <MenuIcon onClick={() => setIsVisible("flex")} />
            // ) : (
            //   <CloseIcon onClick={() => setIsVisible("none")} />
            // )} */}
          </Box>
        </Box>
        {!isVisible && (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={2.5}
          >
            <Button
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
            </Button>
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
        )}
      </Box>
    </Box>
  );
};
