import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { SignUpForm } from "./sign-up-form/SignUpForm";

const formContainerStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "1px solid rgba(204, 204, 204, 0.50);",
  height: "668px",
  border: "1px solid rgba(204, 204, 204, 0.50);",
};

const SignUp = () => {
  return (
    <Container maxWidth="lg" style={formContainerStyle}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item>
          <Typography
            sx={{
              whiteSpace: {
                xs: "wrap",
                sm: "wrap",
                md: "nowrap",
                lg: "nowrap",
              },
              fontSize: "32px",
              fontWeight: 600,
              fontStyle: "normal",
              color: "#666",
            }}
          >
            Register Yourself
          </Typography>
        </Grid>
        <Grid item>
          <SignUpForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
