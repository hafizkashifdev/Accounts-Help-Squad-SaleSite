import React, { useState } from 'react'
import { Box, Checkbox, Grid } from '@mui/material'
import './filter.scss'

const FilteredBy = () => {
    const [filterState, setFilterState] = useState(false)
    const [quarterlyFilterState, setQuarterlyFilterState] = useState(false)
    return (
        <>
            <Box className='padding-1' sx={{ width: '640px', marginTop: '5rem' }}>
                <label htmlFor="filtered-by" className='font-family-Exo font-weight-400 secondary-color'>Filtered by</label>
                <Grid container xs={12}>
                    <Grid item xs={12} lg={6} className="attachment-checkbox flex cursor-pointer" sx={{ marginTop: '8px' }}>
                        <Checkbox
                            defaultChecked={false}
                            value={filterState}
                            icon={
                                <Box className="flex justify-center align-center border-radius-rounded non-checked-icon" sx={{ width: '25px', height: '25px', bgcolor: 'white', }}>
                                    <svg className='checkbox-export-popover' viewBox="0 0 16 14" height="30px"
                                        width="30px" fill="none">
                                        <path d="M9.875 7.5a2.375 2.375 0 11-4.75 0 2.375 2.375 0 014.75 0z" fill="#7F7F7F" />
                                        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#7F7F7F" />
                                    </svg>
                                </Box>
                            }
                            checkedIcon={
                                <Box className="flex justify-center align-center border-radius-rounded non-checked-icon" sx={{ width: '24px', height: '24px', color: '#40404D' }}>
                                    <svg
                                        viewBox="0 0 16 16">
                                        <path
                                            fill="currentColor"
                                            d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14A6 6 0 118 2a6 6 0 010 12zM5 8a3 3 0 116 0 3 3 0 01-6 0z"
                                        />
                                    </svg>
                                </Box>
                            }
                            onChange={() => setFilterState(!filterState)}
                            checked={filterState}
                            sx={{
                                marginRight: "-12px",
                                padding: "0px",
                                color: "black",
                            }}
                        />
                        <Box
                            className={`span tertiary-color flex padding-left-2 align-center  ${filterState ? "active" : "not-active"}`}
                            onClick={() => setFilterState(!filterState)}
                        >
                            <span className='font-family-Exo font-weight-400'>Monthly</span>
                        </Box>
                    </Grid>



                    <Grid item xs={12} lg={6} className="attachment-checkbox flex cursor-pointer" sx={{ marginTop: '8px' }}>
                        <Checkbox
                            defaultChecked={false}
                            value={quarterlyFilterState}
                            icon={
                                <Box className="flex justify-center align-center border-radius-rounded non-checked-icon" sx={{ width: '25px', height: '25px', bgcolor: 'white', }}>
                                    <svg className='checkbox-export-popover' viewBox="0 0 16 14" fill="none">
                                        <path d="M9.875 7.5a2.375 2.375 0 11-4.75 0 2.375 2.375 0 014.75 0z" fill="#7F7F7F" />
                                        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#7F7F7F" />
                                    </svg>
                                </Box>
                            }
                            checkedIcon={
                                <Box className="flex justify-center align-center border-radius-rounded non-checked-icon" sx={{ width: '24px', height: '24px', color: '#40404D' }}>
                                    <svg
                                        viewBox="0 0 16 16">
                                        <path
                                            fill="currentColor"
                                            d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14A6 6 0 118 2a6 6 0 010 12zM5 8a3 3 0 116 0 3 3 0 01-6 0z"
                                        />
                                    </svg>
                                </Box>
                            }
                            onChange={() => setQuarterlyFilterState(!quarterlyFilterState)}
                            checked={quarterlyFilterState}
                            sx={{
                                marginRight: "-12px",
                                padding: "0px",
                                color: "black",
                            }}
                        />
                        <Box
                            className={`span tertiary-color flex padding-left-2 align-center  ${quarterlyFilterState ? "active" : "not-active"}`}
                            onClick={() => setQuarterlyFilterState(!quarterlyFilterState)}
                        >
                            <span className='font-family-Exo font-weight-400'>Quarterly</span>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default FilteredBy