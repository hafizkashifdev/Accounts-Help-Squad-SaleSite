"use client";
import { Box, Typography } from "@mui/material";

export const Descriptors = ({
  mainHeading,
  heading,
  description,
  listItem,
}: any) => {
  return (
    <Box>
      {!!mainHeading?.length && (
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "2rem",
            color: "#2B2B33",
            marginY: 1,
          }}
        >
          {mainHeading}
        </Typography>
      )}
      {!!heading?.length && (
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "primary.main",
            marginY: 1,
          }}
        >
          {heading}
        </Typography>
      )}
      {!!listItem?.length && (
        <Box
          marginLeft={2}
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "primary.main",
            marginY: 1,
          }}
        >
          <ul>
            <li>{listItem}</li>
          </ul>
        </Box>
      )}
      <Typography
        sx={{ fontSize: ".8rem", fontWeight: 500, color: "primary.main" }}
      >
        {description}
      </Typography>
    </Box>
  );
};
