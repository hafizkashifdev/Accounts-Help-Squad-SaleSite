import React, { useState } from "react";
import "./styles.scss";
import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";
import DocumentApprovalModel from "../DocumentApprovalModel/DocumentApprovalModel";
import Details from "../Details";
import Timelines from "../Timelines";
import DragDropFile from "../Uploader";

const MakeItPaid = () => {
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
    {
      value: 2,
      title: "Credit Note",
    },
  ];
  return (
    <Box className="parent-MakeitPaid-screen">
      <Box className="first-section">
        <Typography component="h4">East Repair Inc.</Typography>
        <Typography>£ 500.00</Typography>
      </Box>
      <Box className="second-section">
        <Button
          className="outline"
          onClick={() =>
            setOpenModel({ ...openModel, model: !openModel.model, type: 0 })
          }
        >
          Decline
        </Button>
        <Button className="fill">Mark As Paid</Button>
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
            <Details setOpenModel={setOpenModel} openModel={openModel} />
          ) : value === 1 ? (
            <Timelines />
          ) : value === 2 ? (
            <DragDropFile setOpenModel={setOpenModel} openModel={openModel} />
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

export default MakeItPaid;
