import React, { useState } from "react";
import "./style.scss";
import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";
import DocumentApprovalModel from "../DocumentApprovalModel/DocumentApprovalModel";

// drag drop file component
const DragDropFile = ({ openModel, setOpenModel }) => {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  const [file, setFile] = useState(null);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setOpenModel({ ...openModel, model: !openModel.model, type: 2 });
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log("files", e.target.files[0]);
      // handleFiles(e.target.files);
      setOpenModel({ ...openModel, model: !openModel.model, type: 2 });
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <Box className="uploader-reuse">
      <form
        id="form-file-upload"
        className={dragActive ? "drag-active" : ""}
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        {file ? (
          <>
            <label
              id="label-file-upload"
              htmlFor="input-file-upload"
              className={dragActive ? "drag-active" : ""}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <p style={{ margin: 0 }}>{file?.name}</p>
                <Close
                  style={{ cursor: "pointer" }}
                  onClick={() => setFile(null)}
                />
              </Box>
            </label>
          </>
        ) : (
          <>
            <input
              ref={inputRef}
              type="file"
              id="input-file-upload"
              multiple={true}
              onChange={handleChange}
            />
            <label
              id="label-file-upload"
              htmlFor="input-file-upload"
              className={dragActive ? "drag-active" : ""}
            >
              {" "}
              <Box>
                <p>Drag & Drop Here </p>
                <p className="or">or</p>
                <Button className="fill" onClick={onButtonClick}>
                  Browse Files
                </Button>
              </Box>
            </label>
          </>
        )}

        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
    </Box>
  );
};

export default DragDropFile;
