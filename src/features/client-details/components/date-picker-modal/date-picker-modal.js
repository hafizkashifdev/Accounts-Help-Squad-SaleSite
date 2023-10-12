import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography,Box} from '@mui/material';
  import "./date-picker-modal.scss"

const DatePickerModal=( )=> {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  

  const handleDateChange = (date, label) => {
    if (label === 'Start date') {
      setStartDate(date);
    } else if (label === 'End Date') {
      setEndDate(date);
    }
  };

  return (
    <div>
       <div style={{ marginTop: '20px'}} className='date-picker-modal'>     
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker', 'DatePicker']}>
      <Box sx={{ display: 'flex',gap:'10px',
        '@media (max-width: 600px)': {
                  width: 'auto',
                  flexDirection:'column',
                },}}>
        <div style={{ flex: '1' }}>
          <Typography className='font-family-exo2 secondary-color primary-title'>From</Typography>
          <DatePicker
            label="Start date"
            variant="standared"
            value={startDate}
            onChange={(date) => handleDateChange(date, 'Start date')}
            sx={{mt:2}}
            
          />
        </div>
        <div style={{ flex: '1' }}>
          <Typography className='font-family-exo2 secondary-color primary-title'>To</Typography>
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(date) => handleDateChange(date, 'End Date')}
            sx={{mt:2}}
          />
        </div>
      </Box>
    </DemoContainer>
  </LocalizationProvider>
</div>

    </div>
  )
}

export default DatePickerModal