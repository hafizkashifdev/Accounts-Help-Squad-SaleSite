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
        <Grid container spacing={{ xs: 1.5, md: 4 }}>
          {requestADemoFormFieldsData?.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                <form.component {...form.componentProps} size="small">
                  {form?.componentProps?.select
                    ? form?.componentProps?.options?.map((option: any) => (
                        <option key={option?.id} value={option?.value}>
                          {option?.label}
                        </option>
                      ))
                    : form?.heading
                    ? form?.heading
                    : null}
                </form.component>
              </Grid>
            );
          })}
          <LoadingButton
            fullWidth
            sx={{
              marginTop: 3,
              marginLeft: 2,
              padding: 1,
              borderRadius: "10px",
            }}
            type="submit"
            variant="contained"
          >
            Submit
          </LoadingButton>
        </Grid>
      </FormProvider>
    </Box>
  );
};
