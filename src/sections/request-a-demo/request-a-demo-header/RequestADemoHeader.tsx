"use client";
import { Box, Typography } from "@mui/material";

export const RequestADemoHeader = () => {
  return (
    <>
      <Box textAlign={"center"} marginBottom={5}>
        <Typography
          sx={{
            color: "primary.main",
            marginBottom: 2,
          }}
          variant="h1"
        >
          Request a Demo
        </Typography>
        <Typography
          sx={{
            color: "primary.lighter",
            fontSize: "1rem",
            width: { xs: "95%", md: "50%" },
            margin: "auto",
            textAlign: "center",
          }}
        >
          Welcome to Accounts Help Squad! Book a demo to learn more about our
          services and how we can assist your business
        </Typography>
      </Box>
    </>
  );
};
