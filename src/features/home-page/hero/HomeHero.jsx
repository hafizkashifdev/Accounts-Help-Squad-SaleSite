import { Box, Button, Container, Grid, Typography } from "@mui/material";
import HeroImage from "../../../assests/home-page/home/hero-img.png";
import React from "react";
import "./HomeHero.scss";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();
  return (
    <Box className="hero-parent">
      <Container>
        <Grid container spacing={2} rowSpacing={3}>
          <Grid item xs={12} md={7}>
            <Box className="hero-box">
              <Typography variant="span">The Best Accountants Spot</Typography>
              <Typography variant="h1">
                Welcome to <span>Accountants Pact</span>{" "}
              </Typography>
              <Typography>
                Finally, an invoicing network for Your Company. The simple,
                secure way to Manage Cashflow, send and receive invoices, pay
                vendors Or get paid.
              </Typography>
              <Button className="hero-button" onClick={()=> navigate('/sign-up')}>Sign Up</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box className="hero-box">
              <img src={HeroImage} alt="Hero" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHero;
