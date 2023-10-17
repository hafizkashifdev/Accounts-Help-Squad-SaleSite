"use client";
import { Box, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/react-hook-form";
import { useContactUsForm } from "./useContactUsForm";
import { LoadingButton } from "@mui/lab";
// import logo from "../../../assets/sections/request-a-demo/images/bg.svg";
export const ContactUsForm = () => {
  const {
    methods,
    handleSubmit,
    submitContactUsForm,
    contactUsFormFieldsData,
  } = useContactUsForm();
  return (
    <Box
      boxShadow={3}
      sx={{
        backgroundColor: "white",
        borderRadius: "1rem",
      }}
      paddingX={{ xs: 2, md: 6 }}
      paddingY={{ xs: 3, md: 6 }}
      marginX={{ xs: 1, md: 5 }}
    >
      <Typography
        sx={{
          color: "primary.main",
          // fontSize: "2.5rem",
          // fontWeight: 600,
          marginBottom: { xs: 2, md: 4 },
          textAlign: "center",
        }}
        variant="h3"
      >
        Contact Us
      </Typography>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(submitContactUsForm)}
      >
        <Grid container spacing={{ xs: 1, md: 4 }}>
          {contactUsFormFieldsData?.map((form: any) => {
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
