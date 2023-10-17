import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

const ServiceCard: FC<{ icon: any; heading: string; text: string }> = (
  props
) => {
  const { icon: Icon, heading, text } = props;
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow: "0 17px 30px 0 rgba(0, 0, 0, 0.2)",
        p: 3.2,
        borderRadius: "12px",
        width: { xs: "100%", xl: "30%" },
      }}
    >
      <Box
        sx={{
          background: "rgba(240, 240, 242, 0.4)",
          borderRadius: "12px, 12px, 0px, 0px",
        }}
      >
        <Avatar
          variant="square"
          sx={{
            width: 80,
            height: 80,
            background: "#F0F0F2",
            opacity: 0.7,
            borderRadius: 2,
          }}
        >
          <Icon />
        </Avatar>
      </Box>
      <Typography
        variant="h5"
        fontSize={20}
        color={"primary.main"}
        pb={0.4}
        pt={2.4}
      >
        {heading}
      </Typography>
      <Typography textAlign="center" fontSize={14} color={"primary.lighter"}>
        {text}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
