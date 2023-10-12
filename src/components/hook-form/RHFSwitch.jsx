import React from 'react';
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Switch, FormControlLabel } from "@mui/material";

// ----------------------------------------------------------------------

export default function RHFSwitch({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Switch {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}
