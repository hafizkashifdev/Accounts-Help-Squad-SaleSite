import { Box } from "@mui/material";
import React from "react";
import CustomInput from "../../../components/CustomInput";
import GlobalButton from "../../../components/global-button/global-button";
import { useNavigate } from "react-router-dom";
import "./AddWorkflow.scss";

const AddWorkflowComponent = () => {
  const navigate = useNavigate();
  return (
    <Box className="add-workflow-parent">
      <Box className="invoice-title">Add Workflow</Box>
      <Box className="add-workflow-box">
        <CustomInput
          label="Workflow Name"
          placeholder="Placeholder"
          sx={{
            marginBottom: "52px",
            maxWidth: "100%",
            width: "50% !important",
            "@media (max-width:992px)": {
              width: "100% !important",
            },
          }}
        />
        <CustomInput
          label="Workflow Description"
          type="textarea"
          maxRows={4}
          minRows={4}
          placeholder="Placeholder"
        />
      </Box>
      <Box className="workflow-button">
        <Box
          sx={{
            marginTop: "120px",
            justifyContent: "space-between",
            display: "flex",
            flex: "1 1 auto",
            flexWrap: "wrap",
            rowGap: "10px",
          }}
        >
          <GlobalButton
            variant="outlined"
            btnName="outlined"
            className="outlined"
            btnText="Back"
            onClick={() => navigate("/workflows")}
          />
          <GlobalButton
            variant="accent"
            btnName="accent"
            btnText="Next"
            onClick={() => navigate("/workflows/form?step=1&id=1")}
            // className="button"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AddWorkflowComponent;
