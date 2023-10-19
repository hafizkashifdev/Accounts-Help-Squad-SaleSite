import { Container, Grid, Typography, Box } from "@mui/material";
import Aboutmainimg from "@root/assets/about-us/about-us-hero.svg";
import Image from "next/image";

const AboutHero = () => {
  return (
    <Box px={{ xs: 1, md: 5 }}>
      <Grid container>
        <Grid item px={{ xs: 5, md: 20 }}>
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
            and business solutions. Our mission is to empower entrepreneurs and
            businesses of all sizes by providing expert guidance, innovative
            tools, and a dedicated support team. With years of experience in the
            industry, we are committed to your success.
          </Typography>
        </Grid>
      </Grid>

      <Grid container mt={2}>
        <Grid item margin={"auto"}>
          <Image
            src={Aboutmainimg?.src}
            alt="About us img"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutHero;
