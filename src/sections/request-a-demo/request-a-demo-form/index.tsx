"use client";

import { Box, Grid } from "@mui/material";
import { FormProvider } from "@root/components/react-hook-form";
import { useRequestADemoForm } from "./use-request-a-demo-form";
import { LoadingButton } from "@mui/lab";

export const RequestADemoForm = () => {
  const {
    methods,
    handleSubmit,
    submitRequestADemoForm,
    requestADemoFormFieldsData,
  } = useRequestADemoForm();
  return (
    <Box
      boxShadow={3}
      sx={{
        backgroundColor: "white",
        borderRadius: "1rem",
      }}
      marginX={{ xs: 1, md: 5 }}
      paddingX={{ xs: 2, md: 6 }}
      paddingY={{ xs: 3, md: 6 }}
    >
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(submitRequestADemoForm)}
      >
        <Grid container spacing={4}>
          {requestADemoFormFieldsData?.map((form: any) => (
            <Grid item xs={12} md={form?.gridLength} key={form?.id}>
              <form.component {...form.componentProps} size="small" />
            </Grid>
          ))}
        </Grid>
        <LoadingButton
          fullWidth
          sx={{
            fontFamily: "__Exo_2_b9bafb",
            bgcolor: "primary.main",
            color: "common.white",
            borderRadius: 2,
            padding: "16px 32px",
            mt: 2,
            ":hover": { bgcolor: "#565666" },
          }}
          type="submit"
          variant="contained"
        >
          Submit
        </LoadingButton>
      </FormProvider>
    </Box>
  );
};
