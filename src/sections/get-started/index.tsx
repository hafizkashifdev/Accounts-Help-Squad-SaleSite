"use client";
import { LoadingButton } from "@mui/lab";
import { Grid, Typography, Box } from "@mui/material";
import { FormProvider } from "@root/components/react-hook-form";
import { useGetStarted } from "./useGetStarted";
import { getStartedStyles } from "./GetStarted.styles";
const GetStarted = () => {
  const {
    methods,
    handleSubmit,
    getStartedFormFieldsData,
    submitGetStartedForm,
  } = useGetStarted();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={getStartedStyles.heroContainer}>
          <Typography variant="h1" color="common.main">
            Let’s Get Started
          </Typography>
          <Typography variant="h6" color="common.light" maxWidth="799px">
            Welcome to Accounts Help Squad, your gateway to seamless
            communication. Whether you have questions, feedback, or simply want
            to get in touch, this is the place to do it. We're eager to hear
            from you and provide the information and assistance you need. Feel
            free to reach out, and we'll respond promptly to assist you in any
            way we can.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={getStartedStyles.formContainer}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item lg={8} md={10} xs={11}>
              <Box sx={getStartedStyles.formBox}>
                <Grid container sx={{ justifyContent: "center" }}>
                  <Grid item xs={11} sx={getStartedStyles.formBoxInnerGrid}>
                    <Typography
                      variant="h2"
                      fontSize="40px"
                      color="common.main"
                      mb="30px"
                    >
                      Connect With Us
                    </Typography>
                    <FormProvider
                      methods={methods}
                      onSubmit={handleSubmit(submitGetStartedForm)}
                    >
                      <Grid container spacing={3}>
                        {getStartedFormFieldsData?.map((form: any) => {
                          return (
                            <Grid
                              item
                              xs={12}
                              md={form?.gridLength}
                              key={form?.id}
                            >
                              <form.component
                                {...form.componentProps}
                                size="small"
                              >
                                {form?.componentProps?.select
                                  ? form?.componentProps?.options?.map(
                                      (option: any) => (
                                        <option
                                          key={option?.id}
                                          value={option?.value}
                                        >
                                          {option?.label}
                                        </option>
                                      )
                                    )
                                  : form?.heading
                                  ? form?.heading
                                  : null}
                              </form.component>
                            </Grid>
                          );
                        })}
                        <LoadingButton
                          fullWidth
                          sx={getStartedStyles.submitButton}
                          type="submit"
                          variant="contained"
                        >
                          Book a Demo
                        </LoadingButton>
                      </Grid>
                    </FormProvider>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GetStarted;
