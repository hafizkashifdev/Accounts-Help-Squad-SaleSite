import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./styles.scss";

function CustomAlert({ message, heading, severity, ...props }) {
  const [show, isShow] = useState(true);
  return (
    <div
      style={{ zIndex: "999999999" }}
      className={`alert-box ${severity === "error" ? "error-box" : ""}`}
    >
      {show && (
        <Alert severity={severity} {...props}>
          <AlertTitle
            className={`alert-heading ${
              severity === "error" ? "error-heading" : ""
            }`}
          >
            {heading}
          </AlertTitle>
          <p
            className={`alert-text ${severity === "error" ? "error-text" : ""}`}
          >
            {" "}
            {message}
          </p>
        </Alert>
      )}
    </div>
  );
}

export default CustomAlert;
