// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import CustomLabel from "./Label";

// ----------------------------------------------------------------------

export default function RHFCheckbox({ name, required, ...other }: any) {
  const { control } = useFormContext();
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Checkbox
                {...field}
                checked={field.value}
                disabled={other.disabled}
                sx={(theme) => ({
                  stroke: theme.palette.background.default,
                  strokeWidth: 1,
                })}
              />
              {other?.label && (
                <CustomLabel
                  label={other?.label}
                  error={error}
                  required={required}
                />
              )}
            </>
          )}
        />
      }
      label=""
    />
  );
}

// ----------------------------------------------------------------------

export function RHFMultiCheckbox({ name, options, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onSelected = (option: any) =>
          field.value.includes(option)
            ? field.value.filter((value: any) => value !== option)
            : [...field.value, option];

        return (
          <FormGroup>
            {options.map((option: any) => (
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
