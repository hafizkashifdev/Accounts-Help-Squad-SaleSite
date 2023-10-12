import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

import CustomInput from "../../../components/CustomInput";
import CustomTable from "../../../components/Table/CustomTable";

const UploadTableModel = ({ handleClose }) => {
  const data = [
    {
      creditNote: "Carl Lebowitz",
      date: "2021-01-01",
      amount: "543",
      available: 0.0,
      used: 283.06,
    },
  ];
  const columns = [
    {
      accessorFn: (row) => row.creditNote,
      id: "Credit Note",
      cell: (info) => info.getValue(),
      header: () => <span>Credit Note</span>,
    },
    {
      accessorFn: (row) => row.date,
      id: "Date",
      cell: (info) => info.getValue(),
      header: "Date",
    },
    {
      accessorFn: (row) => row.amount,
      id: "Amount",
      cell: (info) => info.getValue(),
      header: "Amount",
    },
    {
      accessorFn: (row) => row.available,
      id: "Available",
      cell: (info) => info.getValue(),
      header: "Available",
    },
    {
      accessorFn: (row) => row.used,
      id: "Used",
      cell: (info) => info.getValue(),
      header: "Used",
    },
  ];
  return (
    <Box className="model-body model-body-fullscreen">
      <Box className="documentApprovalModel-model">
        <Box className="top-section">
          <Typography variant="h2">Credit Note</Typography>
          <Close
            onClick={handleClose}
            style={{ cursor: "pointer", zIndex: 200 }}
          />
        </Box>
        <Box className="documentApprovalModel-model-body">
          <CustomTable
            data={data}
            columns={columns}
            isSuccess={true}
            isPagination={false}
            filterBox={false}
            // showSerialNo
          />
          <Box className="documentApprovalPriceSection">
            <Typography>The Payment amount will change to:</Typography>
            <Typography variant="h5">£ 500.00</Typography>
          </Box>
          <Box className="documentApprovalModel-button-box">
            <Button onClick={handleClose} className="fill">
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadTableModel;
