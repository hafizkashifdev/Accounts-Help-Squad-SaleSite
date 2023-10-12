import React from 'react';
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TimePicker } from "@mui/x-date-pickers";

// ----------------------------------------------------------------------

export default function RHFTimePicker({ name, label, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TimePicker
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
