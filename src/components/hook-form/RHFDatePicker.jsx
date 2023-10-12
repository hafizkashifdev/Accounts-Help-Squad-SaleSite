import React from 'react';
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { DatePicker } from "@mui/x-date-pickers";

// ----------------------------------------------------------------------

export default function RHFDatePicker({ name, label, ...other }) {
  const { control } = useFormContext();
  console.log(other);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          {...field}
          {...other}
          slotProps={{
            textField: {
              helperText: error ? error.message : "",
              error: error,
              fullWidth: other.fullWidth,
              size: other.size,
            },
          }}
          label={label}
        />
      )}
    />
  );
}
