import React from 'react';
import SignInForm from './SignInForm';
import './signin.scss'
import { Box, Card } from '@mui/material';

const Signin = () => {
  return (
    <div className='height-100vh flex align-center justify-center'>
      <Box className='signin_container'>
      <h1 style={{color:"#666666"}}>Sign In to <span style={{color:"black"}}>Accountants Pack!</span></h1>
      <p style={{marginTop: "20px"}}>Welcome Back</p>
      <SignInForm />
      </Box>
    </div>
  );
};

export default Signin;
