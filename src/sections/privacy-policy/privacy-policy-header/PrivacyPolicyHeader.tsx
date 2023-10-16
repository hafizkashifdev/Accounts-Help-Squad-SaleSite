"use client";
import { Box, Typography } from "@mui/material";
export const PrivacyPolicyHeader = () => {
  return (
    <>
      <Box textAlign={"center"}>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: "3rem",
            fontWeight: 600,
          }}
        >
          Privacy Policy
        </Typography>
        <Typography sx={{ color: "#6B7280", fontSize: "1.2rem" }}>
          This Privacy Policy explains how Accounts Help Squad ("we," "our," or
          "us") collects, uses, discloses, and safeguards your personal
          information in compliance with the applicable data protection laws in
          the United Kingdom, including the General Data Protection Regulation
          (GDPR). We treat all personal information covered by this Privacy
          Policy, including information about any visitors to our website, as
          pertaining to individuals acting as business representatives, rather
          than in their personal capacity.
        </Typography>
        <Typography sx={{ color: "#6B7280", fontSize: "1.2rem" }}>
          As part of our Services, we process consumer personal information on
          behalf of our business customers as a service provider, pursuant to
          our agreements with those businesses. This Privacy Policy does not
          apply to our handling of consumer personal information.
        </Typography>
      </Box>
    </>
  );
};
