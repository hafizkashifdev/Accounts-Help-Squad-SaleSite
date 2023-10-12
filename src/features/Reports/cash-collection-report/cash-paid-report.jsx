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
import { CashCollectionReportData } from '../../../mock-data/ReportData'
import { CustomDatePicker } from '../../../components/custom-date-picker/custom-date-picker'
import { CashCollectionReportCol } from './cash-col-data'

export default function CashPaidReport() {
    
    const [selectBranch, setSelectBranch] = useState("");
    const [selectClient, setSelectClient] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [checkboxPdf, setCheckboxPdf] = useState(false);
    const [checkboxExcel, setCheckboxExcel] = useState(false);

  return (
    <>
    <div className="invoice-title">Cash Paid Report</div>
    <Grid container className='align-center cash-collection-report'>
        <Grid xl={5} xs={12}>
            <GlobalSearchBar />
        </Grid>
        <Grid xl={7} xs={12} >
            <Grid container className='align-end' spacing={2}>
                <Grid item lg={8} xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Grid container>
                            <Grid item xs={6}>
                                <CustomDatePicker dateValue={startDate} placeholder="From" setDateValue={setStartDate} />
                            </Grid>
                            <Grid item xs={6}>
                                <CustomDatePicker dateValue={endDate} placeholder="To" setDateValue={setEndDate} />
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} className='flex justify-end'>
                            <CustomPopover mainTitle="Filters" mainTitleClass="primary-color heading-20 font-weight-600 margin-bottom-1" popoverOpenerTitle="More Filters" popoverOpenerProps={{
                                variant: 'outlined', sx: {
                                    mr: 2, whiteSpace: 'nowrap', color: "#40404D", border: "1.5px solid #40404D !important", height: '32px', borderRadius: "8px", visibility: 'hidden',
                                    "&:hover": {
                                        border: '2px solid #40404D !important'
                                    },
                                }, endIcon: <img src={filterIcon} alt="More Filter" />, className: 'buttons-filters font-family-Exo font-weight-400 tertiary-title'
                            }}>
                                {(popupState) => (
                                    <>
                                        <Grid container spacing={2}>
                                            <Grid item sm={6} xs={12}>
                                                <label className='secondary-color' for="branch">Branch</label>
                                                <DashboardSelect id="branch" placeholder="Select" fullWidth={true} MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} selectSx={{ ".MuiOutlinedInput-notchedOutline": { borderBottom: '1.6px solid #C4C4CC !important' }, '.MuiSelect-select': { p: '10.5px 14px', fontWeight: '400', color: '#40404D', fontSize: '15px' }, '.MuiSelect-icon': { top: '40%' }, }} selectVal={selectBranch} setSelectVal={setSelectBranch} data={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]} />
                                            </Grid>
                                            <Grid item sm={6} xs={12}>
                                                <label className='secondary-color' for="Client">Client</label>
                                                <DashboardSelect id="Client" placeholder="Select" fullWidth={true} MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} selectSx={{ ".MuiOutlinedInput-notchedOutline": { borderBottom: '1.6px solid #C4C4CC !important' }, '.MuiSelect-select': { p: '10.5px 14px', fontWeight: '400', color: '#40404D', fontSize: '15px' }, '.MuiSelect-icon': { top: '40%' }, }} selectVal={selectClient} setSelectVal={setSelectClient} data={["Client 1", "Client 2", "Client 3", "Client 4"]} />
                                            </Grid>
                                        </Grid>
                                        <div className="filter-below-btn margin-top-2 flex justify-end" >
                                            <Button className="btn1" onClick={() => { setSelectBranch(""); setSelectClient("") }}>
                                                Clear
                                            </Button>
                                            &nbsp;
                                            <Button onClick={() => {
                                                if (selectBranch || selectClient) {
                                                    setSelectBranch(""); setSelectClient(""); popupState.close();
                                                } else {
                                                    toast.error("Please Select Any Type");
                                                }
                                            }} className="btn2 primary-bg-color">Apply</Button>
                                        </div>
                                    </>
                                )}
                            </CustomPopover>
                        </Grid>
                        <Grid item xs={6} className='flex justify-end'>
                            <CustomPopover mainTitle="Export" mainTitleClass="primary-color heading-20 font-weight-600 margin-bottom-1" popoverOpenerTitle="Export Text" popoverOpenerProps={{
                                variant: 'contained', sx: {
                                    background: "#2B2B33", borderRadius: '8px', height: '32px', whiteSpace: 'nowrap',
                                    "&:hover": {
                                        background: "#2B2B33",
                                        borderWidth: '2px'
                                    },
                                }, endIcon: <img src={exportIcon} alt="Export Text" />, className: 'buttons-filters font-family-Exo font-weight-400 tertiary-title'
                            }}>
                                {(popupState) => (
                                    <>
                                        <p className='secondary-color margin-bottom-0'>Export this report as</p>
                                        <Grid container spacing={2}>
                                            <Grid item sm={6} xs={12}>
                                                <Box className="attachment-box">
                                                    <ExportCardCheckbox checkboxState={checkboxPdf} setCheckboxState={setCheckboxPdf} title="PDF" />
                                                </Box>
                                            </Grid>
                                            <Grid item sm={6} xs={12}>
                                                <Box className="attachment-box">
                                                    <ExportCardCheckbox checkboxState={checkboxExcel} setCheckboxState={setCheckboxExcel} title="Excel" />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <div className="filter-below-btn margin-top-2 flex justify-end" >
                                            <Button className="btn1" onClick={() => { setCheckboxPdf(false); setCheckboxExcel(false) }}>
                                                Clear
                                            </Button>
                                            &nbsp;
                                            <Button onClick={() => {
                                                if (checkboxExcel || checkboxPdf) {
                                                    setCheckboxPdf(false); setCheckboxExcel(false); popupState.close();
                                                } else {
                                                    toast.error("Please Select Export Type");
                                                }
                                            }} className="btn2 primary-bg-color">Apply</Button>
                                        </div>
                                    </>
                                )}
                            </CustomPopover>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid >
    <br />
    {/* Table */}

    <CustomTable
        data={CashCollectionReportData}
        columns={CashCollectionReportCol}
        onSortByChange={() => { }}
        isSuccess={true}
        isPagination={true}
        showHeaderFilter={false}
    />
    <ToastContainer />
</>
  )
}
