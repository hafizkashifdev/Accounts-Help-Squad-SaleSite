import { Box, Typography } from "@mui/material";
export const PrivacyPolicyHeader = () => {
  return (
    <>
      <Box textAlign={"center"}>
        <Typography
          sx={{
            color: "primary.main",
            // fontSize: "3rem",
            // fontWeight: 600,
            marginX: 1,
            marginBottom: { xs: 1, md: 2 },
          }}
          variant="h1"
        >
          Privacy Policy
        </Typography>
        <Typography
          sx={{
            color: "primary.lighter",
            fontSize: "1.2rem",
            width: { xs: "98%", md: "90%" },
            margin: "auto",
            textAlign: "center",
          }}
        >
          This Privacy Policy explains how Accounts Help Squad ("we," "our," or
          "us") collects, uses, discloses, and safeguards your personal
          information in compliance with the applicable data protection laws in
          the United Kingdom, including the General Data Protection Regulation
          (GDPR). We treat all personal information covered by this Privacy
          Policy, including information about any visitors to our website, as
          pertaining to individuals acting as business representatives, rather
          than in their personal capacity.
        </Typography>
        <Typography
          sx={{
            color: "primary.lighter",
            fontSize: "1.2rem",
            width: { xs: "98%", md: "90%" },
            margin: "auto",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          As part of our Services, we process consumer personal information on
          behalf of our business customers as a service provider, pursuant to
          our agreements with those businesses. This Privacy Policy does not
          apply to our handling of consumer personal information.
        </Typography>
      </Box>
    </>
  );
};
