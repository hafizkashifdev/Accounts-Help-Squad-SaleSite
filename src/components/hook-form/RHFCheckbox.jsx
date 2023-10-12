import React from 'react';
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

// ----------------------------------------------------------------------

export function RHFCheckbox({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              checked={field.value}
              disabled={other.disabled}
              sx={(theme) => ({
                stroke: theme.palette.background.default,
                strokeWidth: 1,
              })}
            />
          )}
        />
      }
      {...other}
    />
  );
}

// ----------------------------------------------------------------------

export function RHFMultiCheckbox({ name, options, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onSelected = (option) =>
          field.value.includes(option)
            ? field.value.filter((value) => value !== option)
            : [...field.value, option];

        return (
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={field.value.includes(option)}
                    onChange={() => field.onChange(onSelected(option))}
                  />
                }
                label={option}
                {...other}
              />
            ))}
          </FormGroup>
        );
      }}
    />
  );
}
