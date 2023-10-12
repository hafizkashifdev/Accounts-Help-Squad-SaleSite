import { Box, Checkbox } from '@mui/material'
import React from 'react'
import "./export-card-checkbox.scss";
export const ExportCardCheckbox = ({ checkboxState, setCheckboxState, title }) => {
    return (
        <>
            <Box className="attachment-checkbox flex cursor-pointer">
                <Checkbox
                    defaultChecked={false}
                    value={checkboxState}
                    icon={
                        <Box className="flex justify-center align-center border-radius-rounded non-checked-icon" sx={{ width: '25px', height: '25px', bgcolor: 'white', }}>
                            <svg className='checkbox-export-popover' xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                <path d="M0.411858 6.26741C-0.137286 5.67388 -0.137286 4.71158 0.411857 4.11805C0.961001 3.52452 1.85134 3.52452 2.40048 4.11805L7.29251 9.40549C7.84165 9.99902 7.84165 10.9613 7.29251 11.5549C6.74337 12.1484 5.85303 12.1484 5.30389 11.5549L0.411858 6.26741Z" fill="#7F7F7F" />
                                <path d="M13.5995 0.445147C14.1487 -0.148382 15.039 -0.148383 15.5881 0.445147C16.1373 1.03868 16.1373 2.00098 15.5881 2.59451L7.38936 11.456C6.84022 12.0495 5.94988 12.0495 5.40074 11.456C4.85159 10.8625 4.85159 9.90015 5.40074 9.30662L13.5995 0.445147Z" fill="#7F7F7F" />
                            </svg>
                        </Box>
                    }
                    checkedIcon={
                        <Box className="flex justify-center align-center border-radius-rounded non-checked-icon" sx={{ width: '25px', height: '25px', bgcolor: '#2B2B33', }}>
                            <svg className='checkbox-export-popover checked' xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                <path d="M0.411858 6.26741C-0.137286 5.67388 -0.137286 4.71158 0.411857 4.11805C0.961001 3.52452 1.85134 3.52452 2.40048 4.11805L7.29251 9.40549C7.84165 9.99902 7.84165 10.9613 7.29251 11.5549C6.74337 12.1484 5.85303 12.1484 5.30389 11.5549L0.411858 6.26741Z" fill="#FFFF" />
                                <path d="M13.5995 0.445147C14.1487 -0.148382 15.039 -0.148383 15.5881 0.445147C16.1373 1.03868 16.1373 2.00098 15.5881 2.59451L7.38936 11.456C6.84022 12.0495 5.94988 12.0495 5.40074 11.456C4.85159 10.8625 4.85159 9.90015 5.40074 9.30662L13.5995 0.445147Z" fill="#FFFF" />
                            </svg>
                        </Box>
                    }
                    onChange={() => setCheckboxState(!checkboxState)}
                    checked={checkboxState}
                    sx={{
                        marginRight: "-12px",
                        padding: "0px",
                        color: "black",
                    }}
                />
                <Box
                    className={`span tertiary-color flex padding-left-2 align-center  ${checkboxState ? "active" : "not-active"}`}
                    onClick={() => setCheckboxState(!checkboxState)}
                >
                    {title}
                </Box>
            </Box>
        </>
    )
}
