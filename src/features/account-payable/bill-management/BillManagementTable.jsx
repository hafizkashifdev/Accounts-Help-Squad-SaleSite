import React, { Fragment, useState } from "react";
import CustomTable from "../../../components/Table/CustomTable";
import Box from "@mui/material/Box";
import { Bills_Data } from "./BillsData";
import TableAction from "../../../components/Table/TableAction";
import { useNavigate } from "react-router-dom";
import './billmanagement.scss'
import GlobalModal from "../../../components/global-modal/global-modal";
import BillDetailModel from "../details-bills/BillDetailModel";
import DetailsPage from "../details-bills/DetailsPage";

export default function BillManagementTable() {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [status, setStatus] = useState()


  const handleViewDetails = () => {
    setDetailsModalOpen(true);
  };

  const handleCloseDetails = () => {
    console.log(';asd')
    setDetailsModalOpen(false);
  };

  const navigate = useNavigate();

  const handleView = (billData) => {
    console.log(billData);
    // const { id } = info.row;

    setDetailsModalOpen(true);

    setStatus(billData.Status);
  };

  const Bills_Col = [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => info.getValue(),
      header: () => <span>Doc ID</span>,
    },
    {
      accessorFn: (row) => row.bill_received_via,
      id: "bill_received_via",
      cell: (info) => info.getValue(),
      header: "Bill Received Via",
    },
    {
      accessorFn: (row) => row.vendor,
      id: "vendor",
      cell: (info) => info.getValue(),
      header: "Vendor",
    },
    {
      accessorFn: (row) => row.created_by,
      id: "created_by",
      cell: (info) => info.getValue(),
      header: "Created By",
    },
    {
      accessorFn: (row) => row.created_on,
      id: "created_on",
      cell: (info) => info.getValue(),
      header: "Created On",
    },
    {
      accessorFn: (row) => row.bill_status,
      id: "Status",
      cell: (info) => (
        <span
          className={
            info.getValue() === "Pending"
              ? "Pending"
              : info.getValue() === "Approved"
                ? "Approved"
                : info.getValue() === "Rejected"
                  ? "Rejected"
                  : "Partial"
          }
        >
          {info.getValue()}
        </span>
      )
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="view" onClick={() => handleView(info.row._valuesCache)} />
        </Box>
      ),
      header: () => <div className="flex justify-center width-100">Actions</div>,
      isSortable: false,
    },
  ];
  const shameem = Bills_Data?.map((ele) => ele?.bill_status)
  console.log(shameem);
  return (
    <Fragment>
      <DetailsPage open={detailsModalOpen} onClose={handleCloseDetails} status={status}/>
      <div>
        <CustomTable
          data={Bills_Data}
          columns={Bills_Col}
          showHeaderFilter={false}
          isSuccess={true}
          isPagination={false}
        />
      </div>


    </Fragment>
  );
}
