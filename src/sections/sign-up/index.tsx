import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { SignUpForm } from "./sign-up-form/SignUpForm";

const SignUp = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "common.white",
        padding: 3,
        borderRadius: 4,
        boxShadow: 4,
      }}
    >
      <Typography variant="h3" textAlign={"center"} color={"primary.lighter"}>
        Register Yourself
      </Typography>
      <SignUpForm />
    </Container>
  );
};

export default SignUp;
