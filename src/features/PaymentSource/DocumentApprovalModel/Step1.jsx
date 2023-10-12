import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

import CustomInput from "../../../components/CustomInput";

const Step1 = ({ handleClose, stepIncrease }) => {
  return (
    <Box className="model-body">
      <Box className="documentApprovalModel-model">
        <Box className="top-section">
          <Typography variant="h2">Ownership Verification</Typography>
          <Close
            onClick={handleClose}
            style={{ cursor: "pointer", zIndex: 200 }}
          />
        </Box>
        <Box className="documentApprovalModel-model-body">
          <Box className="description">
            Please enter the bank account’s authorized signer name to allow
            Payable to electronically debit and credit the account
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <CustomInput
              className="width-100"
              placeholder="Name"
              inputProps={{
                className: "font-family-Exo padding-left-2 ",
              }}
              required={false}
              label={"Name"}
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <CustomInput
              className="width-100"
              placeholder="Name"
              inputProps={{
                className: "font-family-Exo padding-left-2 ",
              }}
              required={false}
              label={"Email"}
            />
          </Box>

          <Box className="documentApprovalModel-button-box">
            <Button onClick={stepIncrease} className="fill">
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Step1;
