import React from 'react';
import { Box, Checkbox } from "@mui/material";
import TableAction from "../../../../components/Table/TableAction";
import DeleteModel from "../../../../components/modal/DeleteModel";
import dayjs from "dayjs";

export const columns = [
  // {
  //   id: "select",
  //   header: ({ table, row }) => {
  //     console.log(table.getSelectedRowModel().flatRows);
  //     return (
  //       <Box>
  //         <Checkbox
  //           checked={table.getIsAllRowsSelected()}
  //           onChange={table.getToggleAllRowsSelectedHandler()}
  //         />
  //       </Box>
  //     );
  //   },
  //   cell: ({ row, table }) => (
  //     <Box>
  //       <Checkbox
  //         disabled={row?.original?.Assigned}
  //         checked={row?.original?.Assigned ? false : row.getIsSelected()}
  //         onChange={row.getToggleSelectedHandler()}
  //       />
  //     </Box>
  //   ),
  // },
  {
    accessorFn: (row) => row.Id,
    id: "Id",
    cell: (info) => info.getValue(),
    header: () => <span>Id</span>,
    // isSortable: true,
  },
  // {
  //   accessorFn: (row) => row.createdOn,
  //   id: "createdOn",
  //   cell: (info) => dayjs(info.getValue()).format("MM/DD/YYYY"),
  //   header: "Inspection Date",
  //   isSortable: true,
  // },
  // {
  //   accessorFn: (row) => row.nextInspectionDate,
  //   id: "nextInspectionDate",
  //   cell: (info) => dayjs(info.getValue()).format("MM/DD/YYYY"),
  //   header: "Next Inspection Date",
  //   isSortable: true,
  // },
  {
    accessorFn: (row) => row.roleName,
    id: "roleName",
    cell: (info) => info.getValue(),
    header: "Role Name",
    // isSortable: true,
  },
    {
    accessorFn: (row) => row.createdOn,
    id: "createdOn",
    cell: (info) => dayjs(info.getValue()).format("DD MMM, YYYY"),
    header: "Created On",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.description,
    id: "description",
    cell: (info) => info.getValue(),
    header: "Description",
    // isSortable: true,
  },
  {
    id: "Actions",
    cell: (info) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction type="delete" onClicked={() => alert("Delete")} />
         <TableAction type="edit" onClicked={() => alert("Edit")} />
        {/* <DeleteModel onDeleteClick={() => {}} /> */}
        <TableAction type="view" onClicked={() => alert("View")} />
        {/* <TableAction type="download" onClicked={() => alert("Download")} /> */}
      </Box>
    ),
    header: () => <span>Actions</span>,
    isSortable: false,
  },
];

export const ROLE_RIGHTS_DATA = [
  {
    id: 1,
    Id: "01",
    roleName: "Manager",
    description: "Lorem ipsum dolor sit amet consectetur.",
    createdOn: 30 / 4 / 2011,
  },
  {
    id: 2,
    Id: "02",
    roleName: "Admin",
    description: "Lorem ipsum dolor sit amet consectetur.",
    createdOn: 30 / 4 / 2011,
  },
];
