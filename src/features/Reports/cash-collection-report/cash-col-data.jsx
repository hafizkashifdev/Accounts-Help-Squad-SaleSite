import { CashCollectionReportInvoiceModal } from "../../cash-collection-report-invoice-modal/cash-collection-report-invoice-modal";

export const CashCollectionReportCol = [
    {
        accessorFn: (row) => row.invoiceId,
        id: "invoiceId",
        cell: (info) => (<CashCollectionReportInvoiceModal id={info?.row?.original?.invoiceId} />),
        header: () => <span>Invoice Id</span>,
        isSortable: true,
    },
    {
        accessorFn: (row) => row.client,
        id: "client",
        cell: (info) => (info.getValue()),
        header: "Client",
    },
    {
        accessorFn: (row) => row.amount,
        id: "amount",
        cell: (info) => info.getValue(),
        header: "Amount",
    },
    {
        accessorFn: (row) => row.issueDate,
        id: "issueDate",
        cell: (info) => info.getValue(),
        header: "Issue Date",
    },
    {
        accessorFn: (row) => row.dueDate,
        id: "dueDate",
        cell: (info) => info.getValue(),
        header: "Due Date",
    },
    {
        accessorFn: (row) => row.paidOn,
        id: "paidOn",
        cell: (info) => info.getValue(),
        header: () => <span>Paid On</span>,
    },
];