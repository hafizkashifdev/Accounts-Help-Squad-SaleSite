"use client";

import { Fragment } from "react";
import { Grid, Typography, useTheme, Box } from "@mui/material";
import Image from "next/image";
import FormationBookHero from "@root/assets/services/images/FormatioBookHero.png";

const FormationBook = () => {
  const theme: any = useTheme();

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} md={6} margin={"auto"} paddingX={{ md: 5 }}>
          <Typography variant="h1" color={theme?.palatte?.primary?.main}>
            Formation Book
          </Typography>
          <Typography variant="h5" color={theme?.palatte?.primary?.main}>
            Your Gateway to Seamless Business Establishment
          </Typography>
          <Typography
            variant="body1"
            mt={1}
            width={"90%"}
            color={theme?.palatte?.primary?.lighter}
          >
            Welcome to Formation Book, your all-in-one solution for starting and
            managing your business journey. We understand that starting a
            company can be daunting, and that's why we've crafted a service that
            simplifies the process, saving you time and effort.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} textAlign={"end"}>
          <Image
            src={FormationBookHero}
            alt={"Formation Book"}
            width={0}
            height={0}
            style={{ width: "90%", height: "90%" }}
          />
        </Grid>
      </Grid>
      <Box paddingX={{ md: 5 }} textAlign={"center"}>
        <Typography variant="h2" color={theme?.palatte?.primary?.main}>
          Our Comprehensive Services Include
        </Typography>
        <Grid container spacing={4} textAlign={"unset"}>
          <Grid item xs={12} md={6}>
            1
          </Grid>
          <Grid item xs={12} md={6}>
            2
          </Grid>
          <Grid item xs={12} md={6}>
            3
          </Grid>
          <Grid item xs={12} md={6}>
            4
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default FormationBook;
