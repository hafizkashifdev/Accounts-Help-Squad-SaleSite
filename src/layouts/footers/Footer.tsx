"use client";

import { Box } from "@mui/material";
import LogoWhite from "@root/assets/layout/images/logo-white.svg";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#2B2B33", padding: 2 }}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginBottom={1}
          padding={{ md: 3 }}
        >
          <Image src={LogoWhite} alt="brand-logo" />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
          marginBottom={1}
          paddingBottom={{ md: 3 }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: 500,
              fontSize: "16px",
              borderRight: "1px solid white",
              borderLeft: "1px solid white",
              paddingX: 3,
            }}
          >
            FAQs
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: 500, fontSize: "16px" }}
          >
            Terms of Service
          </Typography>
        </Box>
        <hr />
        <Box
          display={{ md: "flex" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            © 2023 Accounts Help Squad. All rights reserved.
          </Typography>
          <Box>
            {socialMediaIcons?.map((singleIcon: any) => (
              <IconButton>{singleIcon?.icon}</IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
