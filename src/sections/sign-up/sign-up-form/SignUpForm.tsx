"use client";

import { Box, Grid } from "@mui/material";
import { FormProvider } from "@root/components/react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { defaultValues, dataArray, validationSchema } from "./SignUpForm.data";
import { LoadingButton } from "@mui/lab";

export const SignUpForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Box sx={{ py: "30px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {dataArray?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component {...item.componentProps} />
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
          Register Yourself
        </LoadingButton>
      </FormProvider>
    </Box>
  );
};
