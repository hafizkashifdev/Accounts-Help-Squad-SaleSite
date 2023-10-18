"use client";

import { Box, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/react-hook-form";
import { useContactUsForm } from "./use-contact-us-form";
import { LoadingButton } from "@mui/lab";
import { dataArray } from "./contact-us-form.data";

export const ContactUsForm = () => {
  const { methods, handleSubmit, submitContactUsForm } = useContactUsForm();
  return (
    <Box
      boxShadow={3}
      maxWidth={"lg"}
      sx={{
        backgroundColor: "common.white",
        borderRadius: "1rem",
      }}
      paddingX={{ xs: 2, md: 6 }}
      paddingY={{ xs: 3, md: 6 }}
      marginX={{ xs: 1, md: 5 }}
    >
      <Typography
        sx={{
          color: "primary.main",
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
          {dataArray?.map((form: any) => (
            <Grid item xs={12} md={form?.gridLength} key={form?.id}>
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
          Submit
        </LoadingButton>
      </FormProvider>
    </Box>
  );
};
