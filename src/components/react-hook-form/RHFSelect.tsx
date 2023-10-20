"use client";
import { Fragment, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  TextField,
  Autocomplete,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";
import CustomLabel from "./Label";
import ErrorIcon from "@mui/icons-material/Error";

export default function RHFSelect({
  name,
  options,
  noOptionsText = "Nothing in the List",
  multiple = false,
  ...other
}: any) {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);

  const theme: any = useTheme();

  const label = other?.label;

  const onChanged = (e: any, newValue: any, onChange: any) => {
    if (multiple) {
      onChange(newValue.map((item: any) => item));
    } else {
      onChange(newValue);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <Autocomplete
            id={name}
            open={open}
            multiple={multiple}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            options={options}
            onChange={(e: any, newValue: any) => {
              onChanged(e, newValue, onChange);
            }}
            autoComplete
            noOptionsText={noOptionsText}
            value={value}
            PaperComponent={(props) =>
              multiple ? (
                <Paper
                  {...props}
                  style={{ backgroundColor: theme.palette.grey[100] }}
                >
                  {props.children}
                </Paper>
              ) : (
                <Paper
                  {...props}
                  style={{ backgroundColor: theme.palette.grey[100] }}
                >
                  {props.children}
                </Paper>
              )
            }
            {...other}
            renderInput={(params) => (
              <>
                {other?.label && <CustomLabel label={label} error={error} />}
                <TextField
                  {...params}
                  label=""
                  placeholder={!multiple ? other?.placeholder : ""}
                  sx={{
                    "& .MuiInput-root": {
                      ":hover": { backgroundColor: "#F0F0F2" },
                    },
                  }}
                  variant="standard"
                  error={!!error}
                  helperText={
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
                  }
                  InputProps={{
                    ...params?.InputProps,
                    endAdornment: (
                      <Fragment>{params?.InputProps?.endAdornment}</Fragment>
                    ),
                  }}
                />
              </>
            )}
          />
        );
      }}
    />
  );
}
