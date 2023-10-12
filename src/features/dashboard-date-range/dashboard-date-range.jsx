import React, { useState } from 'react'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import { Grid } from '@mui/material';
import { DateIcon } from '../../components/date-icon/date-icon';
export const DashboardDateRange = ({minWidth}) => {
    const [value, setValue] = useState(dayjs('2022-04-17'));
    return (
        <>
            <div style={{ marginTop: '1px' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid container sx={{ p: 0, flexDirection: 'row !important' }} components={['DatePicker', 'DatePicker']} spacing={3}>
                        <Grid item sm={6} xs={12} className='flex align-center justify-center'>
                            <div style={{ marginBottom: '1px' }} className="secondary-title secondary-color">
                                From:
                            </div>
                            <DatePicker
                                variant='standared'
                                className='margin-left-0'
                                value={value}
                                sx={{
                                    minWidth: minWidth, '.MuiOutlinedInput-notchedOutline': { display: 'none' }, '.MuiButtonBase-root': { p: 0 },
                                    '.MuiInputBase-input ': { p: '0px', fontFamily: `'Exo 2', "Roboto", "sans-serif"`, fontSize: '14px', fontWeight: 600, color: '#40404D', width: '82px' },
                                    'svg': { color: '#40404D', width: '22px', height: '22px' },
                                    '.MuiInputBase-root': { p: 0 }
                                }}
                                onChange={(date) => { }}
                                slots={{
                                    openPickerIcon: DateIcon
                                }}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12} className='flex align-center justify-center'>
                            <div style={{ marginBottom: '1px' }} className="secondary-title secondary-color">
                                To:
                            </div>
                            <DatePicker
                                value={value}
                                className='margin-left-0'
                                sx={{
                                    minWidth: '112px !important', '.MuiOutlinedInput-notchedOutline': { display: 'none' }, '.MuiButtonBase-root': { p: 0 },
                                    '.MuiInputBase-input ': { p: '0px', fontFamily: `'Exo 2', "Roboto", "sans-serif"`, fontSize: '14px', fontWeight: 600, color: '#40404D', width: '82px' },
                                    'svg': { color: '#40404D', width: '22px', height: '22px' },
                                    '.MuiInputBase-root': { p: 0 }
                                }}
                                onChange={(date) => { }}
                                slots={{
                                    openPickerIcon: DateIcon
                                }}
                            />
                        </Grid>
                    </Grid>
                </LocalizationProvider>
            </div>
        </>
    )
}
