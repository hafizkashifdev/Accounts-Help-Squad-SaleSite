import SrIcon from '../../../assests/images/client/sricon.png'

export const WORKFLOW_DETAIL_DATA = [
  {
    id: 1,
    client_Id: "01",
    client_name: "John Doe",
    no_invoices: "3",
    paid_invoices: "60%",
    invoices_paid_duedate: "60%",
  },
  {
    id: 2,
    client_Id: "02",
    client_name: "John Doe",
    no_invoices: "3",
    paid_invoices: "60%",
    invoices_paid_duedate: "60%",
  },
  {
    id: 3,
    client_Id: "03",
    client_name: "John Doe",
    no_invoices: "5",
    paid_invoices: "60%",
    invoices_paid_duedate: "60%",
  },
];

export const WORKFLOW_DETAIL_COL = [
    {
      accessorFn: (row) => row.client_Id,
      id: "client_Id",
      cell: (info) => info.getValue(),
      header: () => <span>Client Id <img src={SrIcon} alt="Workflow Id" /></span>
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.client_name,
      id: "client_name",
      cell: (info) => info.getValue(),
      header: "Client Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.no_invoices,
      id: "no_invoices",
      cell: (info) => info.getValue(),
      header: "No. of Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.paid_invoices,
      id: "paid_invoices",
      cell: (info) => info.getValue(),
      header: "% of Paid Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.invoices_paid_duedate,
      id: "invoices_paid_duedate",
      cell: (info) => info.getValue(),
      header: "% of Invoices Paid on Due Date",
      // isSortable: true,
    },
  ];