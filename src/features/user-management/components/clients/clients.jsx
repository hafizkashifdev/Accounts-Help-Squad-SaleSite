import React, { useState } from 'react';
import { Card, Box, Grid, MenuItem, Fade, Modal, Backdrop, Select } from "@mui/material";
import CustomTable from "../../../../components/Table/CustomTable";
import TableHeader from "../../../../components/Table/TableHeader";
import { useTableParams } from "../../../../components/Table/useTableParams";
import TableAction from "../../../../components/Table/TableAction";

import { CLIENT_MANAGEMENT_DATA } from ".";
import { useClients } from "./use-clients";
import DeleteModel from "../../../../components/modal/DeleteModel";
import { GlobalSearchBar } from '../../../../components/global-search-filter/global-search-filter';
import FormDialog from '../../../../components/modal/ModalPractice';
import { CustomModel } from '../../../../components/custom-model/custom-model';
import { ClientsModal } from './client-modal/client-modal';
import ClientView from './ClientView';
import { ReactComponent as Down } from "../../../../assests/svg/chev-bottom.svg";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 980,
  height: 600,
  overflow: 'auto',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  background: '#FFFFFF',
boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.16)',
borderRadius: '8px',
};

export const ClientsTable = () => {
  const {
    open,
    setOpen,
    handleOpen,
    handleClose,
    userData,
    tableData,
    openForm,
    setOpenForm,
    handleFormDialog,
    handleCloseForm,
    theme,
    // router,
    tableHeaderRef,
  } = useClients();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = tableData.filter((data) =>
    Object.values(data).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [openModel, setOpenModel] = useState(false);
  const handleCustomModel = ()=>{
    setOpenModel(true);
  }

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2= () => setOpen2(false);

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
    
  const columns = [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => info.getValue(),
      header: () => <span>Id</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.clientName,
      id: "clientName",
      cell: (info) => info.getValue(),
      header: "Client Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.totalInvoices,
      id: "totalInvoices",
      cell: (info) => info.getValue(),
      header: "Total Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.paidInvoices,
      id: "paidInvoices",
      cell: (info) => info.getValue(),
      header: "Paid Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.unpaidInvoices,
      id: "unpaidInvoices",
      cell: (info) => info.getValue(),
      header: "Unpaid Invoices",
      // isSortable: true,
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="view" onClicked={handleOpen2} />
        </Box>
      ),
      header: () => <span className='flex justify-center width-100'>Actions</span>,
      // isSortable: false,
    },
  ];
  const isFocused = false;
  return (
    <>
      <Grid container sx={{ justifyContent: 'space-between', mb: '15px' }}>
          <Grid item xs={5} lg={6} >
            <GlobalSearchBar
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid item xs={5} lg={2.5}>
          <Select
          sx={{
            height:'100%',
            '&:before': {
              borderColor: '#C4C4CC',
          },
              '&:after': {
                borderColor: '#C4C4CC',
              },
              '& .MuiSelect-select':{
                padding:'10px'
              }
          }}
            defaultValue="Role"
            placeholder='Role'
            fullWidth
            variant="standard"
            IconComponent={Down}
          >
              <MenuItem disabled value='Role'>
                Role
              </MenuItem>
              <MenuItem value='Assigned'>
                Assigned
              </MenuItem>
              <MenuItem value='Unassigned'>
                Unassigned
              </MenuItem>
          </Select>
          </Grid>
          </Grid>
        <CustomTable
          data={userData}
          columns={columns}
          // showSerialNo
          showHeaderFilter={false}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
          isPagination={true}
        />
      <DeleteModel
        open={open}
        handleClose={handleClose}
        onDeleteClick={handleClose}
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open2}>
          <Box sx={style}>
              <ClientView 
                handleClose2 = {handleClose2}
               />
          </Box>
        </Fade>
      </Modal>
         
    </>
  );
};
