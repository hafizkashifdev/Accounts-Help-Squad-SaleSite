import React from 'react';
import { Card } from "@mui/material";
import CustomTable from "../../../../../components/Table/CustomTable";
import TableHeader from "../../../../../components/Table/TableHeader";
import { useTableParams } from "../../../../../components/Table/useTableParams";

import { CLIENT_MODAL_DATA } from ".";
import { useClientModel } from "./use-client-model";

export const ClientsModal = () => {
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
  } = useClientModel();

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
      accessorFn: (row) => row.userName,
      id: "userName",
      cell: (info) => info.getValue(),
      header: "User Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.assignedClients,
      id: "assignedClients",
      cell: (info) => info.getValue(),
      header: "Assigned Clients",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.role,
      id: "role",
      cell: (info) => info.getValue(),
      header: "Role",
      // isSortable: true,
    },
  ];
  return (
    <>
      <Card sx={{ p: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Health & Safety"
          searchKey="search"
          // showAddBtn
          // onAdd={handleOpen}
          onChanged={headerChangeHandler}
        // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={CLIENT_MODAL_DATA}
          columns={columns}
          // showSerialNo
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
          isPagination={true}
        />
      </Card>
    </>
  );
};
