import { Box, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../../../components/CustomInput";
import GlobalButton from "../../../components/global-button/global-button";
import { SimpleDialog } from "../../../components/modal/simple-dialog";

const PaymentEditModel = ({ openEdit, handleCloseEdit }) => {
  return (
    <SimpleDialog
      paperSx={{ maxWidth: "737px", width: "100%" }}
      open={openEdit}
      handleClose={handleCloseEdit}
      title="Edit Data"
      titleClass="edituser_header primary-color font-weight-600 heading-20"
    >
      <Box sx={{px: "25px"}}>
      <Typography
        sx={{ my: 6 }}
        className="primary-title font-weight-400 font-family-Exo primary-color"
      >
        You can only Edit the name of your bank
      </Typography>
        <CustomInput
          className="width-100"
          placeholder="Name"
          inputProps={{
             className: "font-family-Exo padding-left-2" 
            }}
          required={false}
          label={"Name"}
          />
          </Box>
          <Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
            mt: "6rem",
          }}
        >
          <GlobalButton btnType btnText="Cancel" onClick={handleCloseEdit} />
          <GlobalButton
            btnText="Save"
            btnName="accent"
            onClick={handleCloseEdit}
          />
        </Box>
      </Box>
    </SimpleDialog>
  );
};

export default PaymentEditModel;
