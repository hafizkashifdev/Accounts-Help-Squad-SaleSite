import { useFormContext, Controller } from "react-hook-form";
import { Checkbox, FormControlLabel, useTheme } from "@mui/material";
import CustomLabel from "./Label";

export default function RHFCheckbox({ name, ...other }: any) {
  const { control } = useFormContext();
  const theme: any = useTheme();

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
                sx={{
                  stroke: theme?.palette?.background?.default,
                  strokeWidth: 1,
                }}
              />

              {other?.label && (
                <CustomLabel label={other?.label} error={error} />
              )}
            </>
          )}
        />
      }
      label={""}
    />
  );
}
