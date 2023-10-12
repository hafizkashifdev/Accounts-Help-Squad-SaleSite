import React, { useState } from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Typography from '@mui/material/Typography';
import { Box, TextField, Grid, Button } from '@mui/material';
import './decline.scss';
import { toast } from 'react-toastify';

const DeclineCard = (props) => {
  const { handleCloseFormModal } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isTextFieldHovered, setIsTextFieldHovered] = useState(false);
  const [reason, setReason] = useState('');

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsTextFieldHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsTextFieldHovered(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (reason.trim() !== '') {
      handleDecline();
      toast.success('Form submitted successfully. Please login.');
    } else {
      toast.error('Please provide a reason for declining the bill.');
    }
  };

  const handleDecline = () => {
    console.log('Decline');
    // Additional logic for handling decline
  };

  return (
    <Grid container p={{xs: 1}} className="height-100vh justify-center align-center">
      <Box
        sx={{
          width: '592px',
          borderRadius: '8px',
          p: 2.3,
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 15px;',
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: '600',
            fontFamily: 'Exo 2',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          gutterBottom
        >
          Declining Bill
          <CancelOutlinedIcon onClick={() => handleCloseFormModal(false)} />
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid item className="decline_card margin-top-3">
            <div style={{ marginBottom: '10px' }}>
              <label
                className={`label_decline ${
                  isTextFieldHovered ? 'label_hovered' : ''
                }`}
              >
                Please provide a reason for declining this bill
              </label>
            </div>
            <TextField
              className={`fields ${isHovered ? 'hoverableTextField' : ''}`}
              fullWidth
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              placeholder="Type Here"
              inputProps={{
                style: {
                  height: '100px',
                },
              }}
              InputProps={{
                disableUnderline: false,
                style: { textAlign: 'start' },
              }}
              multiline
            />
          </Grid>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 40,
              gap: 10,
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              type="submit"
              sx={{
                background: '#2B2B33',
                color: '#ffff',
                fontWeight: 400,
                fontSize: '16px',
                borderRadius: '8px',
                px: '20px',
                py: '10px',
                textTransform: 'capitalize',
                '&:hover': {
                  background: '#2B2B33',
                },
              }}
            >
              Decline
            </Button>
          </div>
        </form>
      </Box>
    </Grid>
  );
};

export default DeclineCard;





const styles = {
  field__color: () => ({
    '& label': {
      color: 'black',
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
        borderWidth: '0.15rem',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  })
}
