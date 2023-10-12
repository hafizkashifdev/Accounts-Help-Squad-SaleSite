import { Box, Radio } from '@mui/material'
import React from 'react'
import "./ap-radio-button.scss"
export const ApRadioButton = ({ radioState, setRadioState, title }) => {
    return (
        <Box className="ap-radio-button flex cursor-pointer">
            <Radio
                value={radioState}
                icon={
                    <Box className="flex justify-center align-center border-radius-rounded non-checked-icon" sx={{ width: '25px', height: '25px', bgcolor: 'white', }}>
                        <svg className='radio-export-popover' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="6" fill="#7F7F7F" />
                        </svg>
                    </Box>
                }
                checkedIcon={
                    <Box className="flex justify-center align-center border-radius-rounded non-checked-icon" sx={{ width: '25px', height: '25px', bgcolor: '#FFFF', }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g id=".Radio Button Fill" clip-path="url(#clip0_8450_6285)">
                                <circle id="Ellipse" cx="12" cy="12" r="9.5" stroke="#40404D" strokeWidth="5" />
                                <circle id="Ellipse_2" cx="12" cy="12" r="3" fill="#40404D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_8450_6285">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Box>
                }
                onChange={() => setRadioState(title)}
                checked={radioState}
                sx={{
                    marginRight: "-12px",
                    padding: "0px",
                    color: "black",
                }}
            />
            <Box
                className={`span tertiary-color flex padding-left-2 align-center  ${radioState ? "active" : "not-active"}`}
                onClick={() => setRadioState(title)}
            >
                {title}
            </Box>
        </Box>
    )
}
