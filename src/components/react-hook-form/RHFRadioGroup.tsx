import { useFormContext, Controller } from "react-hook-form";
import {
  Box,
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  Typography,
  useTheme,
} from "@mui/material";
import CustomLabel from "./Label";
import ErrorIcon from "@mui/icons-material/Error";

export default function RHFRadioGroup({ name, options, ...other }: any) {
  const { control } = useFormContext();
  const theme: any = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box position="relative">
          {other?.label && <CustomLabel label={other?.label} error={error} />}
          <RadioGroup {...field} row {...other}>
            {options?.map((option: any) => (
              <FormControlLabel
                key={option?.value}
                value={option?.value}
                control={<Radio />}
                label={option?.label}
              />
            ))}
          </RadioGroup>

          {!!error && (
            <FormHelperText error>
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
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
}
