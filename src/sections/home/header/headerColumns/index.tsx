import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Buttons from "./Buttons";
import { HeaderColumnImage } from "@root/assets/export";
import Image from "next/image";
import styles from "./styles";

const HeaderColumns = () => {
  const { flexCenter, headerText, imageWrapper, image }: any = styles();
  return (
    <div>
      <Grid
        container
        sx={{
          ...flexCenter,
          justifyContent: "space-between",
          spacing: 6,
          gap: { xs: 2, md: 3, lg: 0 },
        }}
      >
        <Grid item xs={12} lg={6}>
          <Typography
            sx={{
              lineHeight: { xs: "36px", md: "76.8px" },
              fontSize: { xs: "2rem", md: "4rem" },
              pb: { xs: 1.6 },
            }}
            variant="h1"
          >
            Welcome to
            <br /> Accounts Help Squad
          </Typography>
          <Typography variant="h3" fontWeight={500} pb={2.1}>
            -Your Trusted Accounting Solutions Partner
          </Typography>
          <Typography sx={{ ...headerText }}>
            At Accounts Help Squad, we're dedicated to simplifying your
            financial journey.
          </Typography>
          <Buttons />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            ...flexCenter,
            justifyContent: { xs: "center", lg: "flex-end" },
          }}
        >
          <Box sx={{ ...imageWrapper, position: "relative" }}>
            <Image
              style={{ ...image }}
              src={HeaderColumnImage.src}
              alt="header image"
              width={783}
              height={286}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderColumns;
