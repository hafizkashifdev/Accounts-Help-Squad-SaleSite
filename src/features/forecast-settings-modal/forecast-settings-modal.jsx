import React, { useState } from 'react'
import { SimpleDialog } from '../../components/modal/simple-dialog'
import { useMUIModal } from '../../hooks/use-mui-modal'
import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import { CustomField } from '../add-bill-feature/custom-field/custom-field';
import { PoundSign } from '../../assests/bills/pound-sign';
import { DashboardSelect } from '../dashboard-select/dashboard-select';
import { CustomBtn } from '../add-bill-modal/custom-btn/custom-btn';

export const ForecastSettingsModal = ({ value }) => {
    const { openDialog, handleCloseMUIModal, handleOpenMUIModal } = useMUIModal();
    const [selectAppDateRange, setSelectAppDateRange] = useState("");
    const [selectFrequency, setSelectFrequency] = useState("");
    return (
        <>
            <span onClick={handleOpenMUIModal} className='cursor-pointer'>{value}</span>
            <SimpleDialog paperSx={{ maxWidth: '588px', width: '588px' }} handleClose={handleCloseMUIModal} open={openDialog} title="Forecast Settings">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className="sub-heading primary-color font-weight-600 margin-bottom-1">Forecast Calculation</div>
                        <CustomField label="Fixed Amount" id="amount">
                            <TextField
                                id="amount"
                                className="font-family-Exo"
                                placeholder="Enter Fixed Amount"
                                type='number'
                                InputProps={{
                                    startAdornment: <InputAdornment  ><PoundSign /></InputAdornment>
                                }}
                            />
                        </CustomField>
                    </Grid>
                    <Grid item xs={12} className='margin-bottom-1'>
                        <div className="sub-heading primary-color font-weight-600 margin-bottom-1">Forecast Settings</div>
                        <CustomField label="Application Date Range" id="appDateRange">
                            <DashboardSelect id="appDateRange" placeholder="Select Application Date Range" fullWidth={true} MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} selectSx={{ ".MuiOutlinedInput-notchedOutline": { borderBottom: '1.6px solid #C4C4CC !important' }, '.MuiSelect-select': { p: '10.5px 14px', fontWeight: '400', color: '#40404D', fontSize: '15px' }, '.MuiSelect-icon': { top: '40%' }, }} selectVal={selectAppDateRange} setSelectVal={setSelectAppDateRange} data={["This Month", "Until the end of the year", "12 Months", "5 Years", "Custom Date Range"]} />
                        </CustomField>
                        <div className="margin-top-1">
                            <CustomField label="Frequency" id="frequency">
                                <DashboardSelect id="frequency" placeholder="Select Frequency" fullWidth={true} MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} selectSx={{ ".MuiOutlinedInput-notchedOutline": { borderBottom: '1.6px solid #C4C4CC !important' }, '.MuiSelect-select': { p: '10.5px 14px', fontWeight: '400', color: '#40404D', fontSize: '15px' }, '.MuiSelect-icon': { top: '40%' }, }} selectVal={selectFrequency} setSelectVal={setSelectFrequency} data={["Every Month", "Every 2 Months", "Every 3 Months", "Every 6 Months", "Every 12 Months"]} />
                            </CustomField>
                        </div>
                    </Grid>
                    <Grid item xs={12} className='flex justify-end margin-top-1'>
                        <Button variant='outlined' onClick={handleCloseMUIModal} className='tertiary-color primary-title font-weight-400 border-radius-8 margin-right-0' sx={{
                            border: '1px solid #40404D',
                            fontWeight: 400,
                            p:'8px 24px',
                            '&:hover': {
                                border: '1px solid #40404D',
                            },
                        }}>
                            Cancel
                        </Button>
                        <CustomBtn onClick={() => { }} otherSx={{fontWeight:400,fontSize:'16px'}}>Confirm</CustomBtn>
                    </Grid>
                </Grid>
            </SimpleDialog>
        </>
    )
}
