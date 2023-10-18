"use client";

import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Buttons = () => {
  const router = useRouter();

  return (
    <Box sx={{ display: "inline-flex", gap: 1.8 }}>
      <Button variant="outlined">Book a Demo</Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => router.push("/get-started")}
      >
        Get started
      </Button>
    </Box>
  );
};

export default Buttons;
