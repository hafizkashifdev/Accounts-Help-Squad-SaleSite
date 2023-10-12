import React, { useState } from 'react';
import { Card, Box, Button } from "@mui/material";
import CustomTable from "../../../../../components/Table/CustomTable";
import { useTableParams } from "../../../../../components/Table/useTableParams";
import TableAction from "../../../../../components/Table/TableAction";
import { INVOICE_DETAIL_DATA } from ".";
import { useClients } from "./use-resent-email";
import EmailIcon from '../../../../../assests/svg/email.png'
import DeleteModel from '../../../../../components/modal/DeleteModel';
import Compose_email from '../../Compose_email/Compose_email';
import AddNoteModel from '../add-note/AddNoteModel';

const RecentEmailTable = () => {
  const {
    open,
    setOpen,
    handleOpen,
    handleClose,
    openForm,
    setOpenForm,
    handleFormDialog,
    handleCloseForm,
    theme,
    // router,
    tableHeaderRef,
  } = useClients();
  const [openModel, setOpenModel] = useState(false);
  const handleCustomModel = () => {
    setOpenModel(true);
  }

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  }
  const handleClose2 = () => {
    setOpen2(false);
  }
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const columns = [
    {
      accessorFn: (row) => row.workflowName,
      id: "workflowName",
      cell: (info) => info.getValue(),
      header: "Workflow Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.initiatorRole,
      id: "initiatorRole",
      cell: (info) => info.getValue(),
      header: "Initiator Role",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.initiatorName,
      id: "initiatorName",
      cell: (info) => info.getValue(),
      header: "Initiator Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.sentDate,
      id: "sentDate",
      cell: (info) => info.getValue(),
      header: "Sent Date",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.sentTime,
      id: "sentTime",
      cell: (info) => info.getValue(),
      header: "Sent Time",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.emailType,
      id: "emailType",
      cell: (info) => info.getValue(),
      header: "Email Type",
      // isSortable: true,
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="view" onClicked={handleOpen2} />
        </Box>
      ),
      header: () => <span>Actions</span>,
      // isSortable: false,
    },
  ];
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: "3rem"
      }}>
        <h2>Recent Emails</h2>
        <Button
          variant="contained"
          className='text-transform font-family-Exo border-radius-8'
          color="primary"
          sx={{
            background: "#2B2B33",
            "&:hover": {
              background: "#2B2B33",
            },
          }}
          endIcon={<img src={EmailIcon} alt="Compose Email"/>}
          onClick={handleOpen}
        >
          Compose Email
        </Button>
        
      </div>
      <br />
      <CustomTable
        data={INVOICE_DETAIL_DATA}
        columns={columns}
        showSerialNo
        showHeaderFilter={false}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
        isSuccess={true}
        isPagination={true}
      />
      <Compose_email
        open={open}
        handleClose={handleClose}
        setOpenModel={setOpenModel}
      />
      <AddNoteModel
        emailNote = "email"
        open={open2}
        handleClose={handleClose2}
        onDeleteClick={handleClose2}
      />
      {/* <CustomModel open={openModel}
        setOpen={setOpenModel}
        styleModal={{ width: { xs: '90%', sm: '80%', md: '70%', xl: '60%' } }}>
          <ClientsModal/>
        
      </CustomModel> */}
    </>
  );
};

export default RecentEmailTable;