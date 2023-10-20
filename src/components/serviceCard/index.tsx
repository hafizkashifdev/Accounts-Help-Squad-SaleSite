import React, { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const ServiceCard: FC<{ icon: any; heading: string; text: string }> = (
  props
) => {
  const { icon: Icon, heading, text } = props;
  return (
    <Grid item xs={12} md={4}>
      <Box
        boxShadow={"0 17px 30px 0 rgba(0, 0, 0, 0.05)"}
        bgcolor={"common.white"}
        height={"100%"}
        p={2}
        borderRadius={3}
      >
        <Image src={Icon?.src} alt={"logo"} width={80} height={80} />
        <Typography variant="h5" color={"primary.main"} py={2}>
          {heading}
        </Typography>
        <Typography
          textAlign="center"
          variant="body1"
          color={"primary.lighter"}
        >
          {text}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ServiceCard;
