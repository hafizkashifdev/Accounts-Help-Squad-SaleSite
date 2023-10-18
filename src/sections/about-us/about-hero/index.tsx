import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Aboutmainimg from "@root/assets/about-us/about-us-hero.svg";
import Image from "next/image";

const AboutHero = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid container>
          <Grid item>
            <Typography
              variant="h1"
              sx={{
                color: "primary.main",
                textAlign: "center",
                fontSize: "64px",
                fontWeight: 600,
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                color: "primary.lighter",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 500,
                mt: "16px",
              }}
            >
              Welcome to Accounts Help Squad, your trusted partner for financial
              and business solutions. Our mission is to empower entrepreneurs
              and businesses of all sizes by providing expert guidance,
              innovative tools, and a dedicated support team. With years of
              experience in the industry, we are committed to your success. 
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl">
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", mt: "36px" }}
        >
          <Grid item sx={{}}>
            <Image
              src={Aboutmainimg.src}
              alt="About us img"
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutHero;
