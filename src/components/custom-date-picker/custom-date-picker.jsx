import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'
import { DateIcon } from '../date-icon/date-icon'

export const CustomDatePicker = ({dateValue,setDateValue,placeholder,paddingRight= "20px", width}) => {
    return (
        <>
            <DatePicker
                sx={{
                    paddingRight: paddingRight, '.MuiInputBase-input ': { p: '13px', fontFamily: `'Exo 2', "Roboto", "sans-serif"`, color: dateValue ? '#40404D' : '#A6A6B3' }, width: {width}
                }}
                slots={{
                    openPickerIcon: DateIcon
                }}

                slotProps={{ textField: { placeholder: placeholder } }}
                variant="standared"
                value={dateValue}
                onChange={(date) => setDateValue(date)}
            />
        </>
    )
}
