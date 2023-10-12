import React from 'react'
import CustomTable from '../../components/Table/CustomTable'
const CashInflowOutflowTableCol = [
    {
        accessorFn: (row) => row.expand,
        id: "expand",
        cell: (info) => (info.getValue()),
        header: () => <span></span>,
    },
    {
        accessorFn: (row) => row.sr,
        id: "sr",
        cell: (info) => (info.getValue()),
        header: () => <span>Sr.#</span>,
        isSticky: true
    },
    {
        accessorFn: (row) => row.id20,
        id: "id20",
        cell: (info) => (info.getValue()),
        header: "Jan 20",
    },
    {
        accessorFn: (row) => row.id21,
        id: "id21",
        cell: (info) => info.getValue(),
        header: "Jan 21",
    },
    {
        accessorFn: (row) => row.id22,
        id: "id22",
        cell: (info) => info.getValue(),
        header: "Jan 22",
    },
    {
        accessorFn: (row) => row.id23,
        id: "id23",
        cell: (info) => info.getValue(),
        header: "Jan 23",
    },
    {
        accessorFn: (row) => row.id24,
        id: "id24",
        cell: (info) => info.getValue(),
        header: "Jan 24",
    },
];
export const CashInflowOutflowTableData = [
    {
        sr: "Sales (EUR)",
        expand: true,
        id20: "465.00",
        id21: "465.00",
        id22: "465.00",
        id23: "465.00",
        id24: "465.00",
        expandData: [
            {
                clientName: 'Name 1',
                id20: "465.00",
                id21: "465.00",
                id22: "465.00",
                id23: "465.00",
                id24: "465.00",
            },
            {
                clientName: 'Name 2',
                id20: "465.00",
                id21: "465.00",
                id22: "465.00",
                id23: "465.00",
                id24: "465.00",
            },
        ]
    },
    {
        sr: "Sales (USD)",
        expand: true,
        id20: "465.00",
        id21: "465.00",
        id22: "465.00",
        id23: "465.00",
        id24: "465.00",
        expandData: [
            {
                clientName: 'Name 1',
                id20: "465.00",
                id21: "465.00",
                id22: "465.00",
                id23: "465.00",
                id24: "465.00",
            },
            {
                clientName: 'Name 2',
                id20: "465.00",
                id21: "465.00",
                id22: "465.00",
                id23: "465.00",
                id24: "465.00",
            },
        ]
    },
    {
        sr: "Total Expenses (USD)",
        id20: "465.00",
        id21: "465.00",
        id22: "465.00",
        id23: "465.00",
        id24: "465.00",
        sx: {
            fontWeight: "600 !important"
        }
    },
];

export const CashInflowOutflowTable = () => {
    return (
        <>
            <div className="margin-top-1">
                <CustomTable
                    data={CashInflowOutflowTableData}
                    columns={CashInflowOutflowTableCol}
                    isSuccess={true}
                    showHeaderFilter={false}
                    isPagination={false}
                />
            </div>
        </>
    )
}
