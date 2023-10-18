import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const Mission = () => {
  const { palette }: any = useTheme();

  return (
    <Box
      sx={{
        background: "#F0F0F266",
        p: { xs: "20px 24px", md: "30px 48px", xl: "40px 60px" },
        borderRadius: "20px",
        maxWidth: 835,
      }}
    >
      <Typography
        variant="h6"
        textAlign="center"
        fontSize={20}
        mb={1.2}
        color={palette?.primary?.main}
      >
        Our Mission
      </Typography>
      <Typography
        textAlign="center"
        fontWeight={500}
        color={palette?.primary?.lighter}
      >
        “Empowering Your Financial Success”
      </Typography>
      <Typography
        textAlign="center"
        fontWeight={500}
        color={palette?.primary?.main}
      >
        At Accounts Help Squad, our mission is clear: to empower your financial
        success. We understand that navigating the complexities of accounting
        and financial management can be daunting, and that's where we come in.
      </Typography>
    </Box>
  );
};

export default Mission;
