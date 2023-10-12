import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import DocumentApprovalModel from "../DocumentApprovalModel/DocumentApprovalModel";
import "./styles.scss";
import Details from "../Details";

const Rejected = () => {
  const [value, setValue] = useState(0);
  const [openModel, setOpenModel] = useState({
    model: false,
    type: 0,
  });

  const tabbingList = [
    {
      value: 0,
      title: "Details",
    },
  ];
  return (
    <Box className="parent-paid-screen">
      <Box className="first-section">
        <Typography component="h4">East Repair Inc.</Typography>
        <Typography>£ 500.00</Typography>
      </Box>
      <Box className="second-section">
        <Button className="fill">Close</Button>
      </Box>
      <Box className="third-section">
        <Box className="tabbing-list">
          {tabbingList?.map((e, i) => (
            <Typography
              key={i}
              onClick={() => setValue(e?.value)}
              className={`tabbing-item ${value === e?.value ? "active" : ""}`}
            >
              {e?.title}
            </Typography>
          ))}
        </Box>
        <Box className="tabbing-children">
          {value === 0 ? (
            <Details openModel={openModel} setOpenModel={setOpenModel} />
          ) : (
            ""
          )}
        </Box>
      </Box>
      {openModel && (
        <DocumentApprovalModel
          open={openModel?.model}
          type={openModel?.type}
          handleClose={() =>
            setOpenModel({ ...openModel, model: !openModel.model, type: 0 })
          }
        />
      )}
    </Box>
  );
};

export default Rejected;
