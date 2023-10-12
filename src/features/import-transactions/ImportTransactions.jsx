import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ImportModal } from "./ImportModal";

const ImportTransactions = () => {

  const [openImport, setOpenImport] = useState(false);
  const handleOpenImport = () => {
    setOpenImport(true)
  }
  const handleCloseImport = () => {
    setOpenImport(false)
  }

  return (
    <>
      <Typography className="font-weight-600 heading-20 font-family-Exo">
        Import Transactions
      </Typography>
      <Grid className="flex flex-column align-center justify-center height-100vh"
        sx={{ gap: '4rem' }}
      >
        <Box
          className="flex flex-column align-center justify-center"
          sx={{ maxWidth: "758px", width: "100%", height: "400px", borderRadius: "16px", border: "2px dashed #E5E5E5", gap: "2rem" }}>
          <Typography className="font-weight-400 sub-heading tertiary-color font-family-Exo">Drag & Drop Here</Typography>
          <Typography className="font-weight-400 secondary-title secondary-color font-family-Exo">OR</Typography>
          <Typography className="font-weight-400 sub-heading tertiary-color font-family-Exo">Browse Files to</Typography>
          <Button
            className="bg-primary-color white-color font-weight-400 primary-title"
            sx={{ px: "18px", py: "8px", borderRadius: "8px" }}
            onClick={handleOpenImport}
          >
            Import Transactions
          </Button>
        </Box>
        <Typography className="font-weight-400 sub-heading tertiary-color font-family-Exo">Download Template File</Typography>
      </Grid>
      <ImportModal open={openImport} handleClose={handleCloseImport} />
    </>
  );
};

export default ImportTransactions;
