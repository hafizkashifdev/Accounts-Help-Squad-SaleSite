"use client";
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormProvider } from "@root/components/react-hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  validationSchema,
  defaultValues,
  dataArray,
} from "./WelcomeScreen.data";
import { LoadingButton } from "@mui/lab";

const WelcomeScreen = () => {
  const router = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async () => {
    await router.push("/signup/register");
  };

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
        textAlign={"center"}
        color={"primary.lighter"}
        sx={{
          whiteSpace: {
            xs: "wrap",
            md: "nowrap",
          },
        }}
      >
        Welcome to{" "}
        <Typography variant="h3" component={"span"} color={"common.black"}>
          AccountHelpSquad!
        </Typography>
      </Typography>
      <Typography textAlign={"center"} color={"primary.main"} py={2}>
        Let’s Get Started
      </Typography>
      <Typography variant="body1" py={2}>
        Select the products you want to utilize.
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          {dataArray?.map((item: any) => (
            <Grid item xs={12} key={item?.id}>
              <item.component {...item.componentProps} />
            </Grid>
          ))}
          <LoadingButton
            fullWidth
            sx={{
              padding: "16px 32px",
              borderRadius: "8px",
              marginTop: 2,
              backgroundColor: "primary.lighter",
            }}
            type="submit"
            variant="contained"
          >
            Next
          </LoadingButton>
        </Grid>
      </FormProvider>
    </Container>
  );
};

export default WelcomeScreen;
