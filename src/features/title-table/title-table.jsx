import React from 'react'
import CustomTable from '../../components/Table/CustomTable';
import { ForecastSettingsModal } from '../forecast-settings-modal/forecast-settings-modal';
const tableRowShowCase = (data) => <div className='flex justify-center'><div className='flex justify-center width-100' style={{ color: typeof data[0] === "number" && "#7987FF" }}>{typeof data[0] === "number" ? <ForecastSettingsModal value={data[0]} /> : data[0]}</div><div className='flex justify-center  width-100' style={{ color: typeof data[1] === "number" && "#FF7979" }}>{typeof data[1] === "number" ? <ForecastSettingsModal value={data[1]} /> : data[1]}</div></div>
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
        header: () => <span>Fixed Column</span>,
        isSticky: true
    },
    {
        accessorFn: (row) => row.id20,
        id: "id20",
        cell: (info) => (tableRowShowCase(info.getValue())),
        header: () => <div className='flex justify-center align-center width-100'>Nov 22</div>,
    },
    {
        accessorFn: (row) => row.id21,
        id: "id21",
        cell: (info) => (tableRowShowCase(info.getValue())),
        header: () => <div className='flex justify-center align-center width-100'>Nov 22</div>,
    },
    {
        accessorFn: (row) => row.id22,
        id: "id22",
        cell: (info) => (tableRowShowCase(info.getValue())),
        header: () => <div className='flex justify-center align-center width-100'>Nov 22</div>,
    },
    {
        accessorFn: (row) => row.id23,
        id: "id23",
        cell: (info) => (tableRowShowCase(info.getValue())),
        header: () => <div className='flex justify-center align-center width-100'>Nov 22</div>,
    },
    {
        accessorFn: (row) => row.id24,
        id: "id24",
        cell: (info) => (tableRowShowCase(info.getValue())),
        header: () => <div className='flex justify-center align-center width-100'>Nov 22</div>,
    },
];
const CashInflowOutflowTableData = [
    {
        sr: "",
        id20: ["Actual", "Forecast"],
        id21: ["Actual", "Forecast"],
        id22: ["Actual", "Forecast"],
        id23: ["Actual", "Forecast"],
        id24: ["Actual", "Forecast"],
    },
    {
        sr: "Cash Inflow",
        id20: [0, 0],
        id21: [0, 0],
        id22: [0, 0],
        id23: [0, 0],
        id24: [0, 0],
        sx: {
            backgroundColor: "#F0F0F2 !important"
        }
    },
    {
        sr: "Uncategorized",
        id20: [0, 0],
        id21: [0, 0],
        id22: [0, 0],
        id23: [0, 0],
        id24: [0, 0],
    },
    {
        sr: "Sales",
        expand: true,
        id20: [0, 0],
        id21: [0, 0],
        id22: [0, 0],
        id23: [0, 0],
        id24: [0, 0],
        renderExpandedRow: (data) => tableRowShowCase(data),
        expandData: [
            {
                clientName: 'Client 1',
                id20: tableRowShowCase([0, 0]),
                id21: tableRowShowCase([0, 0]),
                id22: tableRowShowCase([0, 0]),
                id23: tableRowShowCase([0, 0]),
                id24: tableRowShowCase([0, 0]),
            },
            {
                clientName: 'Client 2',
                id20: tableRowShowCase([0, 0]),
                id21: tableRowShowCase([0, 0]),
                id22: tableRowShowCase([0, 0]),
                id23: tableRowShowCase([0, 0]),
                id24: tableRowShowCase([0, 0]),
            },
        ]
    },
    {
        sr: "Bank Loan",
        id20: [0, 0],
        id21: [0, 0],
        id22: [0, 0],
        id23: [0, 0],
        id24: [0, 0],
    },
    {
        sr: "Cash Inflow",
        id20: [0, 0],
        id21: [0, 0],
        id22: [0, 0],
        id23: [0, 0],
        id24: [0, 0],
        sx: {
            backgroundColor: "#F0F0F2 !important"
        }
    },
    {
        sr: "Uncategorized",
        id20: [0, 0],
        id21: [0, 0],
        id22: [0, 0],
        id23: [0, 0],
        id24: [0, 0],
    },
    {
        sr: "HR / Compensation",
        expand: true,
        id20: [0, 0],
        id21: [0, 0],
        id22: [0, 0],
        id23: [0, 0],
        id24: [0, 0],
        renderExpandedRow: (data) => tableRowShowCase(data),
        expandData: [
            {
                clientName: 'Training',
                id20: tableRowShowCase([0, 0]),
                id21: tableRowShowCase([0, 0]),
                id22: tableRowShowCase([0, 0]),
                id23: tableRowShowCase([0, 0]),
                id24: tableRowShowCase([0, 0]),
            },
            {
                clientName: 'Recruitment Expenses',
                id20: tableRowShowCase([0, 0]),
                id21: tableRowShowCase([0, 0]),
                id22: tableRowShowCase([0, 0]),
                id23: tableRowShowCase([0, 0]),
                id24: tableRowShowCase([0, 0]),
            },
            {
                clientName: 'Wages',
                id20: tableRowShowCase([0, 0]),
                id21: tableRowShowCase([0, 0]),
                id22: tableRowShowCase([0, 0]),
                id23: tableRowShowCase([0, 0]),
                id24: tableRowShowCase([0, 0]),
            },
            {
                clientName: 'Withholding Tax',
                id20: tableRowShowCase([0, 0]),
                id21: tableRowShowCase([0, 0]),
                id22: tableRowShowCase([0, 0]),
                id23: tableRowShowCase([0, 0]),
                id24: tableRowShowCase([0, 0]),
            },
            {
                clientName: 'Social Security',
                id20: tableRowShowCase([0, 0]),
                id21: tableRowShowCase([0, 0]),
                id22: tableRowShowCase([0, 0]),
                id23: tableRowShowCase([0, 0]),
                id24: tableRowShowCase([0, 0]),
            },
        ]
    },
    {
        sr: "Outsourcing / Service Providers",
        id20: [0, 0],
        id21: [0, 0],
        id22: [0, 0],
        id23: [0, 0],
        id24: [0, 0],
    },
];
export const TitleTable = () => {
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
