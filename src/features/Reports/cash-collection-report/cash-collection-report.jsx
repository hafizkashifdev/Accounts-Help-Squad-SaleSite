import { Box, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { GlobalSearchBar } from '../../../components/global-search-filter/global-search-filter'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import CustomTable from '../../../components/Table/CustomTable'
import { DashboardSelect } from '../../dashboard-select/dashboard-select'
import { CustomPopover } from '../../../components/custom-popover/custom-popover';
import { ExportCardCheckbox } from '../../../components/export-card-checkbox/export-card-checkbox'
import { toast, ToastContainer } from 'react-toastify';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateIcon } from "../../../components/date-icon/date-icon";
import { CashCollectionReportData } from '../../../mock-data/ReportData'
import { CashCollectionReportInvoiceModal } from '../../cash-collection-report-invoice-modal/cash-collection-report-invoice-modal'
import { CustomDatePicker } from '../../../components/custom-date-picker/custom-date-picker'

const CashCollectionReportCol = [
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

export const CashCollectionReport = () => {
    const [selectBranch, setSelectBranch] = useState("");
    const [selectClient, setSelectClient] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [checkboxPdf, setCheckboxPdf] = useState(false);
    const [checkboxExcel, setCheckboxExcel] = useState(false);

    return (
        <>
            <div className="invoice-title">Cash Collection Report</div>
            <Grid container className="align-center cash-collection-report">
                <Grid xl={6} xs={12}>
                    <GlobalSearchBar />
                </Grid>
                <Grid xl={6} xs={12}>
                    <div
                        className="align-end"
                        style={{ marginLeft: "auto", display: "flex", justifyContent: 'flex-end' }}
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={{
                                    paddingRight: "20px",
                                    ".MuiInputBase-input ": {
                                        p: "13px",
                                        fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                                        color: startDate ? "#40404D" : "#A6A6B3",
                                    },
                                }}
                                slots={{
                                    openPickerIcon: DateIcon,
                                }}
                                slotProps={{ textField: { placeholder: "From" } }}
                                variant="standared"
                                value={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            <DatePicker
                                sx={{
                                    paddingRight: "20px",
                                    ".MuiInputBase-input ": {
                                        p: "13px",
                                        fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                                        color: "#A6A6B3",
                                    },
                                }}
                                slotProps={{ textField: { placeholder: "To" } }}
                                slots={{
                                    openPickerIcon: DateIcon,
                                }}
                                value={endDate}
                                onChange={(date) => setEndDate(date)}
                            />
                        </LocalizationProvider>
                        <CustomPopover
                            mainTitle="Export"
                            mainTitleClass="primary-color heading-20 font-weight-600 margin-bottom-1"
                            popoverOpenerTitle="Export"
                            popoverOpenerProps={{
                                variant: "contained",
                                sx: {
                                    background: "#2B2B33",
                                    borderRadius: "8px",
                                    height: "32px",
                                    whiteSpace: "nowrap",
                                    "&:hover": {
                                        background: "#2B2B33",
                                        borderWidth: "2px",
                                    },
                                },
                                endIcon: <img src={exportIcon} alt="Export Text" />,
                                className:
                                    "buttons-filters font-family-Exo font-weight-400 tertiary-title",
                            }}
                        >
                            {(popupState) => (
                                <>
                                    <p className="secondary-color margin-bottom-0">
                                        Export this report as
                                    </p>
                                    <Grid container spacing={2}>
                                        <Grid item sm={6} xs={12}>
                                            <Box className="attachment-box">
                                                <ExportCardCheckbox
                                                    checkboxState={checkboxPdf}
                                                    setCheckboxState={setCheckboxPdf}
                                                    title="PDF"
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <Box className="attachment-box">
                                                <ExportCardCheckbox
                                                    checkboxState={checkboxExcel}
                                                    setCheckboxState={setCheckboxExcel}
                                                    title="Excel"
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <div className="filter-below-btn margin-top-2 flex justify-end">
                                        <Button
                                            className="btn1"
                                            onClick={() => {
                                                setCheckboxPdf(false);
                                                setCheckboxExcel(false);
                                            }}
                                        >
                                            Clear
                                        </Button>
                                        &nbsp;
                                        <Button
                                            onClick={() => {
                                                if (checkboxExcel || checkboxPdf) {
                                                    setCheckboxPdf(false);
                                                    setCheckboxExcel(false);
                                                    popupState.close();
                                                } else {
                                                    toast.error("Please Select Export Type");
                                                }
                                            }}
                                            className="btn2 primary-bg-color"
                                        >
                                            Apply
                                        </Button>
                                    </div>
                                </>
                            )}
                        </CustomPopover>
                    </div>
                </Grid>
            </Grid>
            <br />
            {/* Table */}

            <CustomTable
                data={CashCollectionReportData}
                columns={CashCollectionReportCol}
                showHeaderFilter={false}
                onSortByChange={() => { }}
                isSuccess={true}
                isPagination={true}
            />
            <ToastContainer />
        </>
    )
}
