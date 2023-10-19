import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { SignInForm } from "./sign-in-form/SignInForm";

const SignIn = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "common.white",
        padding: 3,
        borderRadius: 4,
        boxShadow: 4,
      }}
    >
      <Typography
        variant="h3"
        color={"primary.lighter"}
        textAlign={"center"}
        sx={{
          whiteSpace: {
            xs: "wrap",
            md: "nowrap",
          },
        }}
      >
        Sign In to{" "}
        <Typography component={"span"} variant="h3" color={"primary.main"}>
          AccountHelpSquad!
        </Typography>
      </Typography>
      <Typography
        variant={"body1"}
        textAlign={"center"}
        my={2}
        color={"primary.lighter"}
      >
        Welcome Back
      </Typography>
      <SignInForm />
    </Container>
  );
};

export default SignIn;
