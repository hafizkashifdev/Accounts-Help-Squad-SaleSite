import { Link } from "react-router-dom";

export const Aging_Buckets_Col = [
  {
    accessorFn: (row) => row.Client_Id,
    id: "Client_Id",
    cell: (info) => info.getValue(),
    header: () => <span>Client Id</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.Client_Name,
    id: "Client_Name",
    cell: (info) => (info.getValue()),
    header: "Client Name",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.Overdue_Invoices,
    id: "Overdue_Invoices",
    cell: (info) => info.getValue(),
    header: "No. of Overdue Invoices",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.Total_verdue_Amount,
    id: "Total_verdue_Amount",
    cell: (info) => info.getValue(),
    header: "Total Overdue Amount",
    // isSortable: true,
  },

  {
    accessorFn: (row) => <Link to="/overdue-invoices">{row.Aging_BucketsLT30}</Link>,
    id: "Aging_BucketsLT30",
    cell: (info) => <span style={{ color: "#0084AD", textDecoration: "underline" }}>
      {info.getValue()}
    </span>,
    header: "Aging Buckets(<30d)",
    // isSortable: true,
  },
  {
    accessorFn: (row) => <Link to="/overdue-invoices">{row.Aging_Buckets30To60}</Link>,
    id: "Aging_Buckets30To60",
    cell: (info) => <span style={{ color: "#0084AD", textDecoration: "underline" }}>
      {info.getValue()}
    </span>,
    header: "Aging Buckets(31-60d)",
    // isSortable: true,
  },
  {
    accessorFn: (row) => <Link to="/overdue-invoices">{row.Aging_Buckets60To90}</Link>,
    id: "Aging_Buckets60To90",
    cell: (info) => <span style={{ color: "#0084AD", textDecoration: "underline" }}>
      {info.getValue()}
    </span>,
    header: "Aging Buckets(61-90d)",
    // isSortable: true,
  },
  {
    accessorFn: (row) => <Link to="/overdue-invoices">{row.Aging_BucketsLT90}</Link>,
    id: "Aging_BucketsLT90",
    cell: (info) => <span style={{ color: "#0084AD", textDecoration: "underline" }}>
      {info.getValue()}
    </span>,
    header: "Aging Buckets(>90d)",
    // isSortable: true,
  },
];

export const Aging_Payable_Col = [
  {
    accessorFn: (row) => row.Client_Id,
    id: "Client_Id",
    cell: (info) => info.getValue(),
    header: () => <span>Id</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.Client_Name,
    id: "Client_Name",
    cell: (info) => (info.getValue()),
    header: "Vendor Name",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.Overdue_Invoices,
    id: "Overdue_Invoices",
    cell: (info) => info.getValue(),
    header: "No. of Overdue Invoices",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.Total_verdue_Amount,
    id: "Total_verdue_Amount",
    cell: (info) => info.getValue(),
    header: "Total Overdue Amount",
    // isSortable: true,
  },

  {
    accessorFn: (row) => <Link to="/overdue-invoices/payable">{row.Aging_BucketsLT30}</Link>,
    id: "Aging_BucketsLT30",
    cell: (info) => <span style={{ color: "#0084AD", textDecoration: "underline" }}>
      {info.getValue()}
    </span>,
    header: "Aging Buckets(<30d)",
    // isSortable: true,
  },
  {
    accessorFn: (row) => <Link to="/overdue-invoices/payable">{row.Aging_Buckets30To60}</Link>,
    id: "Aging_Buckets30To60",
    cell: (info) => <span style={{ color: "#0084AD", textDecoration: "underline" }}>
      {info.getValue()}
    </span>,
    header: "Aging Buckets(31-60d)",
    // isSortable: true,
  },
  {
    accessorFn: (row) => <Link to="/overdue-invoices/payable">{row.Aging_Buckets60To90}</Link>,
    id: "Aging_Buckets60To90",
    cell: (info) => <span style={{ color: "#0084AD", textDecoration: "underline" }}>
      {info.getValue()}
    </span>,
    header: "Aging Buckets(61-90d)",
    // isSortable: true,
  },
  {
    accessorFn: (row) => <Link to="/overdue-invoices/payable">{row.Aging_BucketsLT90}</Link>,
    id: "Aging_BucketsLT90",
    cell: (info) => <span style={{ color: "#0084AD", textDecoration: "underline" }}>
      {info.getValue()}
    </span>,
    header: "Aging Buckets(>90d)",
    // isSortable: true,
  },
];

export const Aging_Buckets_Data = [
  {
    id: 1,
    Client_Id: '01',
    Client_Name: 'Jacob',
    Overdue_Invoices: '1234',
    Total_verdue_Amount: '£345',
    Aging_BucketsLT30: '20%',
    Aging_Buckets30To60: '57%',
    Aging_Buckets60To90: '86%',
    Aging_BucketsLT90: '91%'
  },
  {
    id: 2,
    Client_Id: '02',
    Client_Name: 'Jacob',
    Overdue_Invoices: '1234',
    Total_verdue_Amount: '£345',
    Aging_BucketsLT30: '23%',
    Aging_Buckets30To60: '60%',
    Aging_Buckets60To90: '72%',
    Aging_BucketsLT90: '92%'
  },
  {
    id: 3,
    Client_Id: '03',
    Client_Name: 'Jacob',
    Overdue_Invoices: '1234',
    Total_verdue_Amount: '£345',
    Aging_BucketsLT30: '22%',
    Aging_Buckets30To60: '65%',
    Aging_Buckets60To90: '90%',
    Aging_BucketsLT90: '98%'
  },
]