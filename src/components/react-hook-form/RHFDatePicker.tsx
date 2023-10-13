import { useFormContext, Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import { Typography, useTheme } from "@mui/material";
import CustomLabel from "./Label";
import ErrorIcon from "@mui/icons-material/Error";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

export default function RHFDatePicker({
  name,
  label,
  required,
  ...other
}: any) {
  const theme: any = useTheme();

  const { control } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            {label && <CustomLabel label={label} error={error} />}
            <DatePicker
              {...field}
              {...other}
              sx={{ width: "100%" }}
              slotProps={{
                textField: {
                  helperText: (
                    <Typography
                      component={"span"}
                      display={"flex"}
                      alignItems={"center"}
                      fontWeight={500}
                    >
                      {error?.message && (
                        <ErrorIcon
                          sx={{ color: theme?.palette?.error?.main }}
                        />
                      )}
                      {error?.message}
                    </Typography>
                  ),
                  error: error,
                },
              }}
            />
          </>
        )}
      />
    </LocalizationProvider>
  );
}
