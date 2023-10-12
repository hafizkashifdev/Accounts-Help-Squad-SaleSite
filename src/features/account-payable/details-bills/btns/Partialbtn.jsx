import React from "react";
import { Button } from "@mui/material";

const Partialbtn = () => {
  return (
    <div style={{ marginTop: "5rem" }} className="flex justify-end">
      <Button
        variant="contained"
        className="font-family-Exo  border-radius-8"
        color="primary"
        sx={{
          px: "25px",
          py: "10px",
          minWidth: "95px",
          background: "#2B2B33",
          "&:hover": {
            background: "#2B2B33",
          },
        }}
      >
        Send
      </Button>
    </div>
  );
};

export default Partialbtn;
