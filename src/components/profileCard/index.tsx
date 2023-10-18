import { Box, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

const ProfileCard: FC<{
  image: any;
  name: string;
  desgination: string;
  textAlign?: string;
}> = (props) => {
  const { image, name, desgination, textAlign = "center" }: any = props;
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow: "0 17px 30px 0 rgba(0, 0, 0, 0.05)",
        p: { xs: 1.6, md: 2.4, xl: 3.2 },
        borderRadius: "12px",
        width: { xs: "100%", md: "40%", xl: "30%" },
      }}
    >
      <CardMedia
        sx={{
          background: "rgba(240, 240, 242, 0.4)",
          mb: 2.4,
        }}
        component="img"
        height="100%"
        width={"100%"}
        image={image?.src}
        alt={name}
      />
      <Typography
        variant="h5"
        fontSize={20}
        color={"primary.main"}
        pb={0.4}
        width={"100%"}
        textAlign={textAlign}
      >
        {name}
      </Typography>
      <Typography
        fontSize={14}
        color={"primary.lighter"}
        width={"100%"}
        textAlign={textAlign}
      >
        {desgination}
      </Typography>
    </Box>
  );
};

export default ProfileCard;
