import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

import CustomInput from "../../../components/CustomInput";

const DeclineModel = ({ handleClose }) => {
  return (
    <Box className="model-body">
      <Box className="documentApprovalModel-model">
        <Box className="top-section">
          <Typography variant="h2">Declining Bill</Typography>
          <Close
            onClick={handleClose}
            style={{ cursor: "pointer", zIndex: 200 }}
          />
        </Box>
        <Box className="documentApprovalModel-model-body">
          <CustomInput
            type="textarea"
            required={false}
            maxRows={4}
            minRows={4}
            placeholder={"Type Here"}
            label={"Please provide a reason for declining this bill"}
          />
          <Box className="documentApprovalModel-button-box">
            <Button onClick={handleClose} className="fill">
              Decline
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeclineModel;
