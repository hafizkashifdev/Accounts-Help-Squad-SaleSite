"use client";
import { Box, Typography } from "@mui/material";

export const RequestADemoHeader = () => {
  return (
    <>
      <Box textAlign={"center"} marginBottom={5}>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: "3rem",
            fontWeight: 600,
            marginBottom: 2,
          }}
        >
          Request a Demo
        </Typography>
        <Typography sx={{ color: "primary.lighter", fontSize: "1rem" }}>
          Welcome to Accounts Help Squad! Book a demo to learn more about our
          services and how we can assist your business
        </Typography>
      </Box>
    </>
  );
};
