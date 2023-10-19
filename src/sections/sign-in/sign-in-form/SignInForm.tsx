"use client";

import { Box, Grid } from "@mui/material";
import { FormProvider } from "@root/components/react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  requestADemoDefaultFormValuesFunction,
  requestADemoFormFieldsDataFunction,
  requestADemoFormSchema,
} from "./SignInForm.data";
import { enqueueSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { useSigninApiMutation } from "@root/services/auth/signin/SignInApi";
import { useRouter } from "next/navigation";

export const SignInForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const handleToggleVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const methods: any = useForm({
    resolver: yupResolver(requestADemoFormSchema),
    defaultValues: requestADemoDefaultFormValuesFunction(),
  });

  const { handleSubmit } = methods;
  const requestADemoFormFieldsData = requestADemoFormFieldsDataFunction(
    showPassword,
    handleToggleVisibility
  );

  const [postSigin] = useSigninApiMutation();

  const onSubmit: any = async (data: any) => {
    // const updatedData: any = {
    //   email: data?.email,
    //   password: data?.password,
    //   business_name: "Accountant Help Squad",
    // };
    // try {
    //   const res: any = await postSigin(updatedData).unwrap();
    //   const authToken = res?.data?.token;
    //   localStorage.setItem("authToken", authToken);
    //   enqueueSnackbar("Login Successfull!", {
    //     variant: "success",
    //   });
    //   router.push("/under-construction");
    // } catch (e: any) {
    //   enqueueSnackbar("Something Went Wrong!", { variant: "error" });
    // }
  };

  return (
    <Box sx={{ py: "30px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {requestADemoFormFieldsData?.map((form: any) => (
            <Grid item xs={12} key={form?.id}>
              <form.component {...form.componentProps} size="small" />
            </Grid>
          ))}
        </Grid>
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
          Sign In
        </LoadingButton>
      </FormProvider>
    </Box>
  );
};
