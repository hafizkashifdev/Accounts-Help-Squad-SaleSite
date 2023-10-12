import { MenuItem, Select } from '@mui/material';
import React from 'react'

export const DashboardSelect = ({ data, setSelectVal, selectVal, selectSx, MenuSx, fullWidth, id,placeholder }) => {
    return (
        <>
            <Select
                className='font-family-Exo tertiary-color secondary-title font-weight-700'
                sx={{ '.MuiSelect-select': { py: 0, minWidth: '69px' }, '.MuiOutlinedInput-notchedOutline': { border: '0px ' }, '.MuiSelect-icon': { top: '30%' }, ...selectSx }}
                value={selectVal}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            ...MenuSx
                        },
                    },
                }}
                displayEmpty
                renderValue={(value) => (value !== '' ? value : <span style={{color:'#A6A6B3'}}>{placeholder}</span>)}
                id={id}
                fullWidth={fullWidth}
                IconComponent={(props) => (
                    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
                        <path d="M9.00002 8.80062C8.30002 8.80062 7.60002 8.53063 7.07002 8.00063L0.55002 1.48062C0.26002 1.19062 0.26002 0.710625 0.55002 0.420625C0.84002 0.130625 1.32002 0.130625 1.61002 0.420625L8.13002 6.94062C8.61002 7.42062 9.39002 7.42062 9.87002 6.94062L16.39 0.420625C16.68 0.130625 17.16 0.130625 17.45 0.420625C17.74 0.710625 17.74 1.19062 17.45 1.48062L10.93 8.00063C10.4 8.53063 9.70002 8.80062 9.00002 8.80062Z" fill="#777777" />
                    </svg>)}
                onChange={(event) => setSelectVal(event.target.value)}
            >
                {
                    id === 'Status' ? (
                        data?.map(item => <MenuItem key={item} className='font-family-Exo' value={item} style={{
                            color:
                            item === "Paid"
                              ? "#48995D"
                              : item === "Due"
                              ? "#FFBF00"
                              : item === "Overdue"
                              ? "#FF3F3F"
                              : "#6B6B80",}}>{item}</MenuItem>)
                    
                    ) : (

                        data?.map(item => <MenuItem key={item} className='font-family-Exo' value={item}>{item}</MenuItem>)
                    )
                }
            </Select>
        </>
    )
}
