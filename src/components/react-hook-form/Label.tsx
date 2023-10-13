import React, { FC } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomLabel: FC<{ label: string; required?: boolean; error?: any }> = (
  props
) => {
  const { label, error } = props;
  const { palette }: any = useTheme();
  return (
    <Typography
      variant="body1"
      sx={{
        textTransform: "capitalize",
        fontWeight: 500,
        "&::after": error
          ? {
              content: '" *"',
              color: palette?.error?.main,
            }
          : "",
        color: !!error ? palette?.error?.main : "inherit",
      }}
    >
      {label}
    </Typography>
  );
};

export default CustomLabel;
