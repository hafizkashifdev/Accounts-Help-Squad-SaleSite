import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';

function Date_Range() {

    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(null);

  const handleDateChange = (date, label) => {
    if (label === "Start date") {
      setStartDate(date);
    } else if (label === "End Date") {
      setEndDate(date);
    }
  };

  const handleClearClick = () => {
    setStartDate(null);
    setEndDate(null);
    setError(null);
  };

  return (
    <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Typography style={{ flex: "1", marginLeft: "2px" }}>From</Typography>
          <Typography style={{ flex: "1" }}>To</Typography>
        </div>

        <div style={{ marginTop: "20px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                sx={{borderTop: '0px solid'}}
                label="Start date"
                variant="standared"
                value={startDate}
                onChange={(date) => handleDateChange(date, "Start date")}
              />
              <DatePicker
              
                label="End Date"
                value={endDate}
                onChange={(date) => handleDateChange(date, "End Date")}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <Typography style={{ color: "red", marginBottom: "8px" }}>
          {error}
        </Typography>
    </div>
  )
}

export default Date_Range