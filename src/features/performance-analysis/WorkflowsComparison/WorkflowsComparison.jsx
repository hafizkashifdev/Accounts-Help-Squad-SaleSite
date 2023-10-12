import React from "react";
import PerformanceTable from "../PerformanceTable/PerformanceTable";
import { Link } from "react-router-dom";

const WorkflowsComparison = () => {
  const INVOICE_DATA_ViEW_ALL = [
    {
      id: 1,
      Id: "01",
      name: "Test",
      totalInvoice: 300,
      paidOnDueDate: 22,
      percentagePaidOnDueDate: 40,
      amountPaidDueDate: 1234,
      overDueInvoices: 50,
      overDueAmount: 123123,
    },
    {
      id: 2,
      Id: "02",
      name: "Uk Workflow",
      totalInvoice: 300,
      paidOnDueDate: 22,
      percentagePaidOnDueDate: 40,
      amountPaidDueDate: 1234,
      overDueInvoices: 50,
      overDueAmount: 123123,
    },
    {
      id: 3,
      Id: "03",
      name: "New Workflow",
      totalInvoice: 300,
      paidOnDueDate: 22,
      percentagePaidOnDueDate: 40,
      amountPaidDueDate: 1234,
      overDueInvoices: 50,
      overDueAmount: 123123,
    },
  ];
  const columns_VIEW_ALL = [
    {
      accessorFn: (row) => row.Id,
      id: "ID",
      cell: (info) => (
        <Link
          style={{ color: "#166088" }}
          to={`/performance-analysis/client/${info.getValue()}`}
        >
          <span> {info.getValue()}</span>{" "}
        </Link>
      ),

      header: () => <span>ID</span>,
    },
    {
      accessorFn: (row, i) => <span>{row.name}</span>,
      id: "name",
      cell: (info) => info.getValue(),
      header: "Workflow Name",
    },
    {
      accessorFn: (row) => row.totalInvoice,
      id: "Total Invoices",
      cell: (info) => info.getValue(),
      header: "Total Invoices",
    },
    {
      accessorFn: (row) => row.paidOnDueDate,
      id: "# Invoices Paid on Due Date ",
      cell: (info) => <span>{info.getValue()}</span>,
      header: "# Invoices Paid on Due Date ",
    },
    {
      accessorFn: (row) => row.percentagePaidOnDueDate,
      id: "% Invoices Paid on Due Date ",
      cell: (info) => <span>{info.getValue()}%</span>,
      header: "% Invoices Paid on Due Date ",
    },
    {
      accessorFn: (row) => row.amountPaidDueDate,
      id: "Amount Paid on Due Date",
      cell: (info) => <>£{info.getValue()}</>,
      header: "Amount Paid on Due Date",
    },
    {
      accessorFn: (row) => row.overDueInvoices,
      id: "# Over Due Invoices ",
      cell: (info) => <span>{info.getValue()}</span>,
      header: "# Over Due Invoices ",
    },
    {
      accessorFn: (row) => row.overDueInvoices,
      id: "% Over Due Invoices",
      cell: (info) => <span>{info.getValue()}%</span>,
      header: "% Over Due Invoices",
    },
    {
      accessorFn: (row) => row.overDueAmount,
      id: "Overdue Amount",
      cell: (info) => <span>£{info.getValue()}</span>,
      header: "Overdue Amount",
    },
  ];
  return (
    <>
      <PerformanceTable
        paginationClass={"workflow-pagination"}
        INVOICE_DATA={INVOICE_DATA_ViEW_ALL}
        columns={columns_VIEW_ALL}
      />
    </>
  );
};

export default WorkflowsComparison;
