import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

const EmailForm = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let intervalId = null;

    // Start the timer countdown
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    // Clear the interval and reset the timer when it reaches 0
    if (timer === 0) {
      clearInterval(intervalId);
      setTimer(60);
    }

    // Adjust the timer to complete in 5 seconds
    if (timer === 55) {
      clearInterval(intervalId);
      setTimer(5);
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  return (
    <Grid>
      <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography className="heading-18 tertiary-color font-family-exo2" sx={{ fontWeight: 400,display:'flex' ,justifyContent:'center' }}>
          Request Sent!
        </Typography>
        <Typography className="secondary-color primary-title font-family-exo2" sx={{ fontWeight: 400 ,display:'flex' ,justifyContent:'center'}}>
        If the email address you've entered is  Mortgage Basket account, 
          <br/> 
         we've sent you an email to
          help you reset your password.
        </Typography>
        <Typography className="tertiary-color heading-48 font-family-exo2" sx={{ fontWeight: 600, }}>
         <span style={{fontSize:'48px',display:'flex' ,justifyContent:'center'}}> {timer < 10 ? `00:0${timer}` : `00:${timer}`}</span>
        </Typography>
        <Typography className="tertiary-color primary-title font-family-exo2" sx={{ fontWeight: 400,display:'flex' ,justifyContent:'center' }}>
          If you didn’t get the verification email click on&nbsp;
          <span className="blue-color primary-title font-family-exo2">resend link</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EmailForm;
