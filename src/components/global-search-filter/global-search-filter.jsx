import * as React from "react";
import { TextField, InputAdornment } from "@mui/material";
import "./global-search-filter.scss";

export const GlobalSearchBar = ({
  value,
  onChange,
  className,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextField
      id="standard-search"
      type="search"
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      fullWidth
      className={`font-family-Exo ${className ? className : ""}`}
      sx={{
        width: 333,
        ".MuiInputBase-root": { alignItems: "baseline" },
        ".MuiInputBase-input": { p: "4px 10px 12px", color: "#40404D" },
        ".Mui-focused:after": {
          borderBottom: "2px solid #C4C4CC !important",
        },
        ".MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error):before": {
          borderBottom: "2px solid #C4C4CC !important",
        },
        ".MuiInputBase-root:before": {
          borderBottom: "1.6px solid #C4C4CC !important",
        },
        ".MuiInput-underline:after": {
          borderBottomColor: "#C4C4CC",
        },
        "@media (max-width: 600px)": {
          width: "100%",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z"
                fill="#777777"
              />
              <path
                d="M20.16 22.79C20.08 22.79 20 22.78 19.93 22.77C19.46 22.71 18.61 22.39 18.13 20.96C17.88 20.21 17.97 19.46 18.38 18.89C18.79 18.32 19.48 18 20.27 18C21.29 18 22.09 18.39 22.45 19.08C22.81 19.77 22.71 20.65 22.14 21.5C21.43 22.57 20.66 22.79 20.16 22.79ZM19.56 20.49C19.73 21.01 19.97 21.27 20.13 21.29C20.29 21.31 20.59 21.12 20.9 20.67C21.19 20.24 21.21 19.93 21.14 19.79C21.07 19.65 20.79 19.5 20.27 19.5C19.96 19.5 19.73 19.6 19.6 19.77C19.48 19.94 19.46 20.2 19.56 20.49Z"
                fill="#777777"
              />
            </svg>
          </InputAdornment>
        ),
        className: "font-family-Exo",
        classes: {
          clearIndicator: "custom-clear-icon", // Add a custom class name for the clear icon
        },
      }}
      variant="standard"
      placeholder={placeholder || "Search"}
    />
  );
};
