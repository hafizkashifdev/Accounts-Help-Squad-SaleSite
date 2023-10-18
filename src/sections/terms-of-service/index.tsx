"use client";
import { Box } from "@mui/material";
import { TermsOfServiceHeader } from "./terms-of-service-header";
import { TermsOfServiceDocument } from "./terms-of-service-document";
const TermsOfService = () => {
  return (
    <Box
      sx={{
        marginX: { xs: 1, md: 5 },
      }}
    >
      <TermsOfServiceHeader />
      <TermsOfServiceDocument />
    </Box>
  );
};

export default TermsOfService;
