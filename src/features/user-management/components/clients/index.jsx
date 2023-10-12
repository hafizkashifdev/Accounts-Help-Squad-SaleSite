import React from 'react';
import { Box, Checkbox } from "@mui/material";
import TableAction from "../../../../components/Table/TableAction";
import DeleteModel from "../../../../components/modal/DeleteModel";
import dayjs from "dayjs";

// export const columns = [
//   // {
//   //   id: "select",
//   //   header: ({ table, row }) => {
//   //     console.log(table.getSelectedRowModel().flatRows);
//   //     return (
//   //       <Box>
//   //         <Checkbox
//   //           checked={table.getIsAllRowsSelected()}
//   //           onChange={table.getToggleAllRowsSelectedHandler()}
//   //         />
//   //       </Box>
//   //     );
//   //   },
//   //   cell: ({ row, table }) => (
//   //     <Box>
//   //       <Checkbox
//   //         disabled={row?.original?.Assigned}
//   //         checked={row?.original?.Assigned ? false : row.getIsSelected()}
//   //         onChange={row.getToggleSelectedHandler()}
//   //       />
//   //     </Box>
//   //   ),
//   // },
//   {
//     accessorFn: (row) => row.Id,
//     id: "Id",
//     cell: (info) => info.getValue(),
//     header: () => <span>Id</span>,
//     // isSortable: true,
//   },
//   {
//     accessorFn: (row) => row.clientName,
//     id: "clientName",
//     cell: (info) => info.getValue(),
//     header: "Client Name",
//     // isSortable: true,
//   },
//   {
//     accessorFn: (row) => row.totalInvoices,
//     id: "totalInvoices",
//     cell: (info) => info.getValue(),
//     header: "Total Invoices",
//     // isSortable: true,
//   },
//   {
//     accessorFn: (row) => row.paidInvoices,
//     id: "paidInvoices",
//     cell: (info) => info.getValue(),
//     header: "Paid Invoices",
//     // isSortable: true,
//   },
//   {
//     accessorFn: (row) => row.unpaidInvoices,
//     id: "unpaidInvoices",
//     cell: (info) => info.getValue(),
//     header: "Unpaid Invoices",
//     // isSortable: true,
//   },
//   {
//     id: "Actions",
//     cell: (info) => (
//       <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
//         {/* <TableAction type="edit" onClicked={() => alert("Edit")} />
//         <TableAction type="delete" onClicked={() => alert("Delete")} /> */}
//         <TableAction type="view" onClicked={() => alert("View")} />
//         {/* <TableAction type="download" onClicked={() => alert("Download")} /> */}
//       </Box>
//     ),
//     header: () => <span>Actions</span>,
//     isSortable: false,
//   },
// ];

export const CLIENT_MANAGEMENT_DATA = (status)=> [
  {
    id: 1,
    Id: "123",
    clientName: "John Doe",
    totalInvoices: 40,
    paidInvoices: 20,
    unpaidInvoices: 20,
    // social_worker: "Palwasha",
    // createdAt: 30 / 4 / 2011,
    // nextInspectionDate: 30 / 4 / 2011,
    // status: "John Doe",
  },
  {
    id: 2,
    Id: "1234",
    clientName: "John Doe",
    totalInvoices: 50,
    paidInvoices: 25,
    unpaidInvoices: 25,
    // social_worker: "John",
    // createdAt: 30 / 4 / 2011,
    // nextInspectionDate: 30 / 4 / 2011,
    // status: "John Doe",
  },
];
