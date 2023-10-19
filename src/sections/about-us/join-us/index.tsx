import { Button, Box, Grid, Typography } from "@mui/material";
import React from "react";

const JoinUs = () => {
  return (
    <Box
      mx={{ xs: 1, md: 5 }}
      py={4}
      borderRadius={2}
      bgcolor={"common.white"}
      boxShadow={"0px 31.00949px 62.01899px 0px rgba(0, 0, 0, 0.03)"}
      textAlign={"center"}
    >
      <Typography
        sx={{
          color: "primary.main",
          fontSize: "40px",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Join Us on Your Journey:
      </Typography>
      <Typography
        sx={{
          color: "#898999",
          fontSize: "24px",
          fontWeight: 400,
          textAlign: "center",
          mt: "24px",
        }}
      >
        At Accounts Help Squad, we're not just a service provider; we're your
        dedicated partner on your business journey. Whether you're starting a
        new venture, looking to optimize finances, or seeking expert guidance,
        we're here to help you every step of the way.
      </Typography>
      <Typography
        sx={{
          color: "#898999",
          fontSize: "24px",
          fontWeight: 400,
          textAlign: "center",
          mt: "24px",
        }}
      >
        Explore our services, meet our team, and discover how we can make a
        difference in your business. Banner Aesthetic: An image that showcases
        the diversity and reach of your client base. Join us in achieving
        financial success. Contact us today to start your journey with Accounts
        Help Squad.
      </Typography>
      <Button
        variant="contained"
        type="button"
        sx={{ padding: "16px 32px", marginTop: 2 }}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default JoinUs;
