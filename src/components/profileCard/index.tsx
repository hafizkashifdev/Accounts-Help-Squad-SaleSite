import { Box, Grid, Typography } from "@mui/material";
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
    <Grid item xs={12} md={4}>
      <Box
        boxShadow={"0 17px 30px 0 rgba(0, 0, 0, 0.05)"}
        p={2}
        borderRadius={3}
      >
        <Image
          src={image?.src}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          alt={name}
        />
        <Typography
          variant="h5"
          fontSize={20}
          color={"primary.main"}
          py={1}
          width={"100%"}
          textAlign={textAlign}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          color={"primary.lighter"}
          width={"100%"}
          textAlign={textAlign}
        >
          {desgination}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ProfileCard;
