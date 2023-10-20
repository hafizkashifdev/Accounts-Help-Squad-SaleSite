"use client";

import { Box, Grid } from "@mui/material";
import { FormProvider } from "@root/components/react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  defaultValues,
  dataArrayFunction,
  validationSchema,
} from "./SignUpForm.data";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useSignupApiMutation } from "@root/services/auth/signup/SignupApi";
import { enqueueSnackbar } from "notistack";

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPassword = () => {
    setConfirmShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const dataArray = dataArrayFunction({
    showPassword,
    togglePassword,
    showConfirmPassword,
    toggleConfirmPassword,
  });

  const [postSignup] = useSignupApiMutation();

  const onSubmit = async (data: any) => {
    try {
      await postSignup(data).unwrap();
      reset(defaultValues);
      enqueueSnackbar("Successfull! Check Email for Verification", {
        variant: "success",
      });
    } catch (e: any) {
      enqueueSnackbar("Something Went Wrong!", { variant: "error" });
    }
  };

  return (
    <Box sx={{ py: "30px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {dataArray?.map((item: any) => (
            <Grid item xs={12} key={item?.id}>
              <item.component {...item.componentProps} />
            </Grid>
          ))}
        </Grid>
        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          sx={{
            padding: "16px 32px",
            fontFamily: "__Exo_2_b9bafb",
            bgcolor: "primary.main",
            color: "common.white",
            borderRadius: 2,
            mt: 2,
            ":hover": { bgcolor: "#565666" },
          }}
        >
          Register Yourself
        </LoadingButton>
      </FormProvider>
    </Box>
  );
};
