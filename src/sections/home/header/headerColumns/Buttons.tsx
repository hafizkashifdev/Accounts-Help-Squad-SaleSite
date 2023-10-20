"use client";

import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Buttons = () => {
  const router = useRouter();

  return (
    <Box sx={{ display: "inline-flex", gap: 1.8 }}>
      <Button
        variant="outlined"
        sx={{
          fontFamily: "__Exo_2_b9bafb",
          bgcolor: "transparent",
          color: "primary.main",
          borderRadius: 2,
          ":hover": { border: "none", bgcolor: "#F0F0F2" },
        }}
      >
        Book a Demo
      </Button>
      <Button
        variant="contained"
        sx={{
          fontFamily: "__Exo_2_b9bafb",
          bgcolor: "primary.main",
          color: "common.white",
          borderRadius: 2,
          ":hover": { bgcolor: "#565666" },
        }}
        onClick={() => router.push("/get-started")}
      >
        Get started
      </Button>
    </Box>
  );
};

export default Buttons;
