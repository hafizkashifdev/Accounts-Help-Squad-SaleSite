
import { Box, Button } from "@mui/material";
import React from "react";
// import { useRouter } from "next/router";

export default function FormSubmitButtons(props) {
  const { isSubmitting, isDirty } = props;
  // const router = useRouter();

  return (
    <Box sx={{ display: "flex", mb: "1rem", justifyContent: "flex-end" }}>
      <Button
        // onClick={() => router.back()}
        type="button"
        sx={{ marginRight: "1rem", textTransform:"capitalize", border:"1px solid #40404D", bgcolor: "#fff", color: "#40404D" }}
        variant="contained"
      >
        Clear
      </Button>
      <Button
        sx={{ marginRight: "1rem", textTransform:"capitalize", bgcolor: "#2B2B33", color: "#fff" }}
        type="submit"
        variant="contained"
        // loading={isSubmitting}
        disabled={!isDirty}
      >
        Add
      </Button>      
    </Box>
  );
}
