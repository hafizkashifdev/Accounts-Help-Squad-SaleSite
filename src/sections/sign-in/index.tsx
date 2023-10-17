import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { SignInForm } from './sign-in-form/SignInForm';

const formContainerStyle = {
  background: "white",
  padding: '20px',
  borderRadius: '16px',
  boxShadow: '1px solid rgba(204, 204, 204, 0.50);',
  height: '465px',
  border: '1px solid rgba(204, 204, 204, 0.50);',
};

const SignIn = () => {
  return <>
    <Container maxWidth="sm" style={formContainerStyle}>
      <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Grid item>
          <Typography sx={{ whiteSpace: "nowrap", fontSize: "32px", fontWeight: 600, fontStyle: "normal", color: "#666" }}>Sign In to
            <span style={{ fontSize: "32px", fontWeight: 600, fontStyle: "normal", color: "#000" }}> AccountHelpSquad!</span></Typography>
          <Typography sx={{
            whiteSpace: "nowrap", fontSize: "14px", fontWeight: 400, fontStyle: "normal", display: "flex",
            justifyContent: "center", alignItems: "center", py: "13px", color: "#4C4C4C"
          }}>
            Welcome Back
          </Typography>
        </Grid>
        <Grid item>
          <SignInForm />

        </Grid>
      </Grid>

    </Container>

  </>;
};

export default SignIn;
