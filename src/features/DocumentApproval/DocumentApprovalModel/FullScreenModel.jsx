import React from "react";
import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";
import Image from "../../../assests/bills/file.png";

import { Box, Typography } from "@mui/material";

const FullScreenModel = ({ handleClose }) => {
  return (
    <Box className="model-body model-body-fullscreen">
      <Box className="documentApprovalModel-model">
        <Box className="top-section">
          <Typography variant="h2">Bill Details</Typography>
          <Close
            onClick={handleClose}
            style={{ cursor: "pointer", zIndex: 200 }}
          />
        </Box>
        <Box className="documentApprovalModel-model-body">
          <img src={Image} />
        </Box>
      </Box>
    </Box>
  );
};

export default FullScreenModel;
