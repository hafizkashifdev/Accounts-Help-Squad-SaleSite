"use client";
import { Box, Typography } from "@mui/material";

export const ContactUsHeader = () => {
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
          Reach Out to Us
        </Typography>
        <Typography
          sx={{
            color: "primary.lighter",
            fontSize: "1rem",
            width: { xs: "98%", md: "50%" },
            margin: "auto",
            textAlign: "center",
          }}
        >
          Thank you for your interest in Accounts Help Squad! We value your
          feedback, questions, and inquiries. Our dedicated team is here to
          assist you in any way we can. Please feel free to reach out to us
          using the information below, and we'll get back to you as soon as
          possible.
        </Typography>
      </Box>
    </>
  );
};
