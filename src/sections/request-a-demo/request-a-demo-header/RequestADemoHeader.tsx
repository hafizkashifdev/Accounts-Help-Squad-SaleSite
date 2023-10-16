"use client";
import { Box, Typography } from "@mui/material";

export const RequestADemoHeader = () => {
  return (
    <>
      <Box textAlign={"center"}>
        <Typography
          sx={{ color: "primary.main", fontSize: "1.3rem", fontWeight: 600 }}
        >
          Request a Demo
        </Typography>
        <Typography sx={{ color: "primary.main", fontSize: "1rem" }}>
          Welcome to Accounts Help Squad! Book a demo to learn more about our
          services and how we can assist your business
        </Typography>
      </Box>
    </>
  );
};
