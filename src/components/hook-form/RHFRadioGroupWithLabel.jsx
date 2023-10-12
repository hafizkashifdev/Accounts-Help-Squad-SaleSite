import React from 'react';
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import {
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  Stack,
  FormLabel,
} from "@mui/material";

// ----------------------------------------------------------------------

export default function RHFRadioGroupWithLabel({
  name,
  options,
  label,
  linebreak,
  getOptionLabel,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Stack
            direction={linebreak ? "column" : "row"}
            alignItems={linebreak ? "left" : "center"}
            spacing={3}
          >
            <FormLabel>{label} </FormLabel>
            <RadioGroup {...field} row {...other}>
              {options.map((option, index) => (
                <FormControlLabel
                  disabled={other?.disabled}
                  key={option}
                  style={{ display: "flex" }}
                  value={option}
                  control={<Radio />}
                  label={
                    getOptionLabel?.length ? getOptionLabel[index] : option
                  }
                />
              ))}
            </RadioGroup>
          </Stack>

          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}
