import React from "react";
import { Box, Button } from "@mui/material";
import styles from "./styles";
const Buttons = () => {
  const { flexCenter } = styles();

  return (
    <Box sx={{ ...flexCenter, display: "inline-flex", gap: 1.8 }}>
      <Button variant="outlined">Book a Demo</Button>
      <Button color="primary" variant="contained">
        Get started
      </Button>
    </Box>
  );
};

export default Buttons;
