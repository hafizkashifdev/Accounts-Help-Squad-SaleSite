// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { DatePicker } from "@mui/x-date-pickers";
import { Typography } from "@mui/material";
import CustomLabel from "./Label";

// ----------------------------------------------------------------------

export default function RHFDatePicker({
  name,
  label,
  required,
  ...other
}: any) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {label && (
            <CustomLabel label={label} error={error} required={required} />
          )}
          <DatePicker
            {...field}
            {...other}
            slotProps={{
              textField: {
                helperText: (
                  <Typography
                    component={"span"}
                    sx={{ display: "block", mt: -1, ml: -1 }}
                  >
                    {error?.message}
                  </Typography>
                ),
                error: error,
                fullWidth: other.fullWidth,
                size: other.size,
                label: "",
                inputProps: { style: { height: 27 } },
              },
            }}
            label={label}
          />
        </>
      )}
    />
  );
}
