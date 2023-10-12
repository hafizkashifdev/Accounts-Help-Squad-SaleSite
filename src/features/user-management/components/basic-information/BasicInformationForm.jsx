// form
// @mui
import { Box, Grid, Typography, useTheme } from "@mui/material";
// utils
// components
import { FormProvider } from "../../../../components/hook-form";
//
import { formDataAreaPersonalInfo } from ".";
import FormSubmitButtons from "../../../../components/FormSubmitButtons";
import { useBasicInformationForm } from "./useBasicInformationForm";

//mui icons

// ----------------------------------------------------------------------

export default function BasicInformationForm(props) {
  const { disabled } = props;

  const { methods, handleSubmit, onSubmit, isSubmitting, isDirty, theme } =
    useBasicInformationForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={12} display={"flex"} justifyContent={"flex-start"}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ color: "#2B2B33" }}
          >
            Add New User
          </Typography>
        </Grid>
        {formDataAreaPersonalInfo.map((form, i) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                {...form.componentProps}
                // disabled={disabled}
                size="small"
              >
                {form.componentProps?.select
                  ? form.options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {" "}
                        {option.label}{" "}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          {disabled ? (
            ""
          ) : (
            <FormSubmitButtons isSubmitting={isSubmitting} isDirty={isDirty} />
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
}
