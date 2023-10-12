import React, { useState } from 'react';
import {
  Popper,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Modal,
  Backdrop,
  Grid,
  Box
} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './DatePicker.scss';





const DateRangePicker = ({
  isOpenDatePicker,
  onCloseDatePicker,
  onApplyDate,
  anchorEl,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDateChange = (date, label) => {
    if (label === 'Start date') {
      setStartDate(date);
    } else if (label === 'End Date') {
      setEndDate(date);
    }
  };

  const handleApplyClick = () => {
    if (startDate && endDate && startDate.isAfter(endDate)) {
      setError('Please select a valid date range.');
      return;
    }

    onApplyDate({ startDate, endDate });
    onCloseDatePicker();
  };

  const handleClearClick = () => {
    setStartDate(null);
    setEndDate(null);
    setError(null);
  };

  return (
    <Modal
          open={isOpenDatePicker}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={Styles.root}>
          <Grid container>
           <Grid item xs={12}>
           <div
         style={{
          height: '316px',
          width: isMobile ? '100%' : '542px',
          maxWidth: '100%',
          borderRadius: '8px',
          zIndex:999,
          background: '#FFFFFF',
          boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.16)',
          padding: '16px',
          position: 'relative',
          margin: '0 auto', // Added margin to center the modal
          top: isMobile ? '50%' : 'initial',
          transform: isMobile ? 'translateY(-50%)' : 'initial',
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <h3 style={{ color: "#000000", margin: 0 }}>Filters</h3>
          <CancelOutlinedIcon
            onClick={onCloseDatePicker}
            style={{ cursor: "pointer", color: "#000000" }}
          />
        </div>
<div style={{ marginTop: '20px' }}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker', 'DatePicker']}>
      <div style={{ display: 'flex',gap:'10px' }}>
        <div style={{ flex: '1' }}>
          <Typography>From</Typography>
          <DatePicker
            label="Start date"
            variant="standared"
            value={startDate}
            onChange={(date) => handleDateChange(date, 'Start date')}
            sx={{mt:2}}
            
          />
        </div>
        <div style={{ flex: '1' }}>
          <Typography>To</Typography>
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(date) => handleDateChange(date, 'End Date')}
            sx={{mt:2}}
          />
        </div>
      </div>
    </DemoContainer>
  </LocalizationProvider>
</div>
        <Typography style={{ color: 'red', marginBottom: '8px' }}>
          {error}
        </Typography>
      
        <Typography style={{ color: "red", marginBottom: "8px" }}>
          {error}
        </Typography>
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClearClick}
            sx={{
              color: "#000000",
              borderColor: "#000000",
              marginRight: "8px",
              "&:hover": {
                borderColor: "#000000",
                color: "#000000",
              },
            }}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleApplyClick}
            disabled={!startDate || !endDate}
            sx={{
              color: "#FFFFFF",
              background: "#000000",
              "&:hover": {
                background: "#000000",
                color: "#FFFFFF",
              },
            }}
          >
            Apply
          </Button>
        </div>
      </div>
           </Grid>
          </Grid>
        </Box>
      </Modal>
  );
};

export default DateRangePicker;







//-----------------------------------------------------------------------
// styles
const Styles = {
  root: (theme) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: 500 },
    borderRadius: "8px",
    boxShadow: 24,
    backgroundColor: "#2B2B33", // Top half color
  }),
  innerBox: (theme) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // pt: "10px"
  }),
  buttonWrapper: (theme) => ({
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    mt: 6,
    mb: 3.5,
  }),
  buttonError: (theme) => ({
    bgcolor: "#2B2B33",
    color: "#fff",
    "&:hover": { bgcolor: "#2B2B33" },
    px: 2,
    py: 1,
    fontSize: "16px !important",
    textTransform: "capitalize",
    fontWeight: "400",
  }),
  buttonSuccess: (theme) => ({
    bgcolor: "#fff",
    color: "#2B2B33",
    minWidth: "100px",
    "&:hover": { bgcolor: "#fff" },
    fontSize: "16px !important",
    border: "1px solid #2B2B33",
    fontWeight: "400",
    textTransform: "capitalize",
  }),
  heading: { fontSize: "20px", fontWeight: "600", color: "#2B2B33", pt: 3 },
};
