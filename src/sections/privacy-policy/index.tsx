"use client";

import { PrivacyPolicyDocument } from "./privacy-policy-document";
import { PrivacyPolicyHeader } from "./privacy-policy-header";
import { Box } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        marginX: { xs: 1, md: 5 },
      }}
    >
      <PrivacyPolicyHeader />
      <PrivacyPolicyDocument />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      ></Box>
    </Box>
  );
};

export default PrivacyPolicy;
