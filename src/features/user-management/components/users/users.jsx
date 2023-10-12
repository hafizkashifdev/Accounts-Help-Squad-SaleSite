import React, { useState } from "react";
import dayjs from "dayjs";
import { Card, Box } from "@mui/material";
import CustomTable from "../../../../components/Table/CustomTable";
import TableHeader from "../../../../components/Table/TableHeader";
import { useTableParams } from "../../../../components/Table/useTableParams";
import TableAction from "../../../../components/Table/TableAction";
import DeleteModel from "../../../../components/modal/DeleteModel";
import EditUser from "./editusers-input-form/EditUser";
import { USERS_DATA } from ".";
import { useUsers } from "./use-user";
import { GlobalSearchBar } from "../../../../components/global-search-filter/global-search-filter";
import { CustomPopover } from "../../../../components/custom-popover/custom-popover";
import AddUser from "./addusers-input-form/AddUser";

export const UsersTable = () => {
  const {
    open,
    setOpen,
    handleOpen,
    handleClose,
    openForm,
    setOpenForm,
    handleFormDialog,
    handleCloseForm,
    openAddForm,
    setOpenAddForm,
    handleFormAddDialog,
    handleCloseAddForm,
    theme,
    tableHeaderRef,
  } = useUsers();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const columns = [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => info.getValue(),
      header: () => <span>Id</span>,
    },
    {
      accessorFn: (row) => row.userName,
      id: "userName",
      cell: (info) => info.getValue(),
      header: "User Name",
    },
    {
      accessorFn: (row) => row.role,
      id: "role",
      cell: (info) => info.getValue(),
      header: "Role",
    },
    {
      accessorFn: (row) => row.createdOn,
      id: "createdOn",
      cell: (info) => dayjs(info.getValue()).format("DD MMM, YYYY"),
      header: "Created On",
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="delete" onClicked={handleOpen} />
          <TableAction type="edit" onClicked={handleFormDialog} />
        </Box>
      ),
      header: () => <span className='flex justify-center width-100'>Actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <Box sx={{gap: 2}} className='flex justify-space-between margin-bottom-1'>
        <GlobalSearchBar />
        <AddUser/>
      </Box>
      <CustomTable
        data={USERS_DATA}
        columns={columns}
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
      <EditUser
        openForm={openForm}
        setOpenForm={setOpenForm}
        handleFormDialog={handleFormDialog}
        handleCloseForm={handleCloseForm}
      />
    </>
  );
};
