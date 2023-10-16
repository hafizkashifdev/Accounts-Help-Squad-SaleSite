import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

const ProfileCard: FC<{ image: any; name: string; desgination: string }> = (
  props
) => {
  const { image, name, desgination } = props;
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
          pb: 2.4,
        }}
      >
        <Image src={image?.src} width={323} height={260} alt={name} />
      </Box>
      <Typography variant="h5" fontSize={20} color={"primary.main"} pb={0.4}>
        {name}
      </Typography>
      <Typography fontSize={14} color={"primary.lighter"}>
        {desgination}
      </Typography>
    </Box>
  );
};

export default ProfileCard;
