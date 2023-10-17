"use client";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
export const FooterAuth = () => {
  const currentYear = new Date()?.getFullYear();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingTop={2}
    >
      <Typography
        variant="body1"
        textAlign={"center"}
        fontWeight={500}
        color={"primary.lighter"}
      >
        Copyright © {currentYear} Accounts Help Squad. All rights reserved.
      </Typography>
    </Box>
  );
};
