import { Box, Container, Grid, Typography } from "@mui/material";
import AboutUsImage from "../../../assests/home-page/home/about-us-image.png";
import React from "react";
import "./AboutUsHero.scss";

const AboutUsHero = () => {
  return (
    <Box className="about-us-parent">
      <Container>
        <Grid container spacing={2} rowSpacing={3}>
          <Grid item xs={12} md={12}>
            <Box className="about-us-box">
              <img src={AboutUsImage} alt="AboutUs" />
              <Typography variant="h2">About Us</Typography>
              <Typography>
                The Accountant pact is a unique supplier of technology-driven
                products and services designed to make the accounting journey
                quicker and easier for everyone involved. We have been serving
                the Accounting market for over a decade and have gained an
                invaluable understanding of the opportunities and challenges
                faced by the industry.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsHero;
