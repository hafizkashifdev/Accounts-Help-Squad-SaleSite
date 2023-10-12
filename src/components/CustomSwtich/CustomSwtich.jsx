import styled from "@emotion/styled";
import { Switch } from "@mui/material";
import React from "react";

const CustomSwitch = ({ ...props }) => {
  const Android12Switch = styled(Switch)(() => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      border: "1px solid #E1E1E6",
      opacity: 1,
      backgroundColor: "black" ? "white" : "#E1E1E6",
      boxSizing: "border-box",
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      backgroundColor: "#40404D",
      border: "3px solid #40404D",
      width: 16,
      height: 16,
      margin: 2,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      backgroundColor: "transparent",
      color: '#40404D'
    },

    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: "#E1E1E6",
    },
  }));
  return (
    <div>
      <Android12Switch {...props} />
    </div>
  );
};

export default CustomSwitch;
