"use client";
import { Box, Grid } from "@mui/material";
import { FormProvider } from "@root/components/react-hook-form";
import { useSignInForm } from "./useSignInForm";
import { LoadingButton } from "@mui/lab";

export const SignInForm = () => {
    const {
        methods,
        handleSubmit,
        submitRequestADemoForm,
        requestADemoFormFieldsData,
    } = useSignInForm();
    return (
        <Box sx={{ py: "30px" }}>
            <FormProvider
                methods={methods}
                onSubmit={handleSubmit(submitRequestADemoForm())}
            >
                <Grid container spacing={3}>
                    {requestADemoFormFieldsData?.map((form: any) => {
                        return (
                            <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                                <form.component {...form.componentProps} size="small" onSubmit={handleSubmit(submitRequestADemoForm())}
                                >
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
                        sx={{ marginTop: 4, marginLeft: 2, padding: '16px 32px', borderRadius: "8px",background:"#A6A6B3",color:"#FFF"}}
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit(submitRequestADemoForm())}

                    >
                        Sign In
                    </LoadingButton>
                </Grid>
            </FormProvider>
        </Box>
    );
};
