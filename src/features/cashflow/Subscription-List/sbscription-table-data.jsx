import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const sub_columns=(handleOpen) => [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => info.getValue(),
      header: () => <span>Invoice #</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.title,
      id: "title",
      cell: (info) => info.getValue(),
      header: "Invoice Title",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.issue_date,
      id: "issue_date",
      cell: (info) => info.getValue(),
      header: "Issue Date",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.amount,
      id: "amount",
      cell: (info) => info.getValue(),
      header: "Invoice Amount",
      // isSortable: true,
    },
    {
        id: "Actions",
        cell: (info) => (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                <button onClick={()=> handleOpen()} style={{background: 'white', borderRadius: 8, border: '0.75px #40404D solid', padding: 7, cursor: 'pointer'}}>Pay Now</button>
          </Box>
        ),
        header: () => <div className="flex justify-center width-100">Actions</div>,
        isSortable: false,
      },
  ];

 export const SUB_INVOICE_DATA = [
   {
    Id: '01',
    title: 'John Doe',
    issue_date: '14/07/2023',
    amount: '123456'
   },
   {
    Id: '02',
    title: 'John Doe',
    issue_date: '14/07/2023',
    amount: '123456'
   },
   {
    Id: '03',
    title: 'John Doe',
    issue_date: '14/07/2023',
    amount: '123456'
   },
  ];