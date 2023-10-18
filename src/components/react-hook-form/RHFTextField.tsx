import { useFormContext, Controller } from "react-hook-form";
import { TextField, Typography, useTheme } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import CustomLabel from "./Label";

export default function RHFTextField({ name, ...other }: any) {
  const { control } = useFormContext();
  const theme: any = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {other?.label && <CustomLabel label={other?.label} error={error} />}
          <TextField
            {...field}
            fullWidth
            variant="standard"
            placeholder={other?.placeholder}
            error={!!error}
            helperText={
              <Typography
                component={"span"}
                display={"flex"}
                alignItems={"center"}
                fontWeight={500}
              >
                {error?.message && (
                  <ErrorIcon sx={{ color: theme?.palette?.error?.main }} />
                )}
                {error?.message}
              </Typography>
            }
            {...other}
            label=""
          />
        </>
      )}
    />
  );
}
