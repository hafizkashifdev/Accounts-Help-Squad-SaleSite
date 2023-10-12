import React from "react";
import { Button } from "@mui/material";

const Rejectedbtns = () => {
  return (
    <div
      style={{ gap: "1rem", marginTop: "5rem" }}
      className="flex justify-end"
    >
      <Button
        variant="contained"
        className="font-family-Exo  border-radius-8"
        color="primary"
        sx={{
          px: "25px",
          minWidth: "95px",
          py: "10px",
          background: "#FF3F3F",
          "&:hover": {
            background: "#2B2B33",
          },
        }}
      >
        Delete
      </Button>

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
        Resend
      </Button>
    </div>
  );
};

export default Rejectedbtns;
