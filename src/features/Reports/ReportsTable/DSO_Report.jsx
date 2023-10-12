export const DSO_Col = [
    {
      accessorFn: (row) => row.month,
      id: "month",
      cell: (info) => info.getValue(),
      header: () => <span>Month</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.year,
      id: "year",
      cell: (info) => (info.getValue()),
      header: "Year",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.total_invoices,
      id: "total_invoices",
      cell: (info) => info.getValue(),
      header: "Total Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.dso,
      id: "dso",
      cell: (info) => info.getValue(),
      header: "DSO",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.avg_delay,
      id: "avg_delay",
      cell: (info) => info.getValue(),
      header: "Avg Delay",
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

  export const DSO_Data =  [
    {
      month: 'Jan',
      year: '2023',
      total_invoices: 3,
      dso: 46,
      avg_delay: 5,
    },
    {
      month: 'Feb',
      year: '2022',
      total_invoices: 3,
      dso: 50,
      avg_delay: 6,
    },
    {
      month: 'Jan',
      year: '2023',
      total_invoices: 5,
      dso: 66,
      avg_delay: 7,
    },
  ];
  
  export const DSO_Data2 =  [
    {
      id: 1,
      Id: "01",
      client_name: 'John Doe',
      total_invoices: 33,
      dso: 20,
      avg_delay: 2,
    },
    {
      id: 2,
      Id: "02",
      client_name: 'John Doe',
      total_invoices: 33,
      dso: 33,
      avg_delay: 3,
    },
    {
      id: 3,
      Id: "03",
      client_name: 'John Doe',
      total_invoices: 33,
      dso: 43,
      avg_delay: 4,
    },
  ];