"use client";

import { Box } from "@mui/material";
import LogoWhite from "@root/assets/layout/images/logo-white.svg";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { socialMediaIcons } from "./Footer.data";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  const currentYear = new Date()?.getFullYear();
  return (
    <>
      <Box
        sx={{ backgroundColor: "primary.main" }}
        paddingX={{ xs: 1, md: 5 }}
        paddingY={{ xs: 1, md: 3 }}
      >
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
              cursor: "pointer",
            }}
            onClick={() => router?.push("/privacy-policy")}
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
              paddingX: { xs: 1, md: 3 },
              cursor: "pointer",
            }}
            onClick={() => router?.push("/faq")}
          >
            FAQs
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: 500,
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => router?.push("/terms-of-service")}
          >
            Terms of Service
          </Typography>
        </Box>
        <hr />
        <Box
          display={{ md: "flex" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          textAlign={"center"}
          paddingTop={2}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            © {currentYear} Accounts Help Squad. All rights reserved.
          </Typography>
          <Box>
            {socialMediaIcons?.map((singleIcon: any) => (
              <IconButton
                sx={{
                  backgroundColor: "primary.main",
                  margin: 0.5,
                }}
                key={singleIcon?.id}
              >
                {singleIcon?.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
