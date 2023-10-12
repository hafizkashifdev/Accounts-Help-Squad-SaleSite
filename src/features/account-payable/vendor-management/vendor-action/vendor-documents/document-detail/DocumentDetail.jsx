import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import DocumentApprovalModel from "../../../../../DocumentApproval/DocumentApprovalModel/DocumentApprovalModel";
import Details from "./Details/index";
import Timelines from "./Timelines/index";
import "./styles.scss";

const DocumentDetail = () => {
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
    {
      value: 1,
      title: "Timeline",
    },
  ];
  return (
    <Box className="parent-pending-screen">
      <Box className="first-section">
        <Typography className="font-weight-600 font-family-Exo heading-20">AA Traders</Typography>
        <Typography>£ 500.00</Typography>
      </Box>
      <Box className="second-section">
        
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
          ) : value === 1 ? (
            <Timelines />
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

export default DocumentDetail;
