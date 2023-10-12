export const CASHFLOW_Col = [
    {
      accessorFn: (row) => row.invoice_id,
      id: "invoice_id",
      cell: (info) => info.getValue(),
      header: () => <span>Invoice Id</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.client,
      id: "client",
      cell: (info) => (info.getValue()),
      header: "Client",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.amount,
      id: "amount",
      cell: (info) => `£${info.getValue()}`,
      header: "Amount",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.issue,
      id: "issue",
      cell: (info) => info.getValue(),
      header: "Issue Date",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.due,
      id: "due",
      cell: (info) => info.getValue(),
      header: "Due Date",
      // isSortable: true,
    },
    // {
    //   id: "Actions",
    //   cell: (info) => (
    //     <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
    //       <TableAction type="view" />
    //     </Box>
    //   ),
    //   header: () => <span>Actions</span>,
    //   isSortable: false,
    // },
  ];


  export const CashFlow_Data = [
    {
        id: 1,
        invoice_id: '01',
        client: 'Jacob',
        amount: '1234',
        issue: '19 Oct, 1999',
        due: '12/11/2022',
    },
    {
        id: 2,
        invoice_id: '02',
        client: 'Jacob',
        amount: '1234',
        issue: '19 Oct, 1999',
        due: '12/11/2022',
    },
    {
        id: 3,
        invoice_id: '03',
        client: 'Jacob',
        amount: '1234',
        issue: '19 Oct, 1999',
        due: '12/11/2022',
    },
  ]