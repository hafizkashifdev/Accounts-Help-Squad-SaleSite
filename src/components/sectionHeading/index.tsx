"use client";
import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SectionHeading: FC<{ heading: string; text?: string }> = (props) => {
  const { heading, text } = props;
  const { palette }: any = useTheme();

  return (
    <Box>
      <Typography
        variant="h2"
        textAlign="center"
        fontSize={40}
        mb={1.6}
        color={palette?.primary?.main}
      >
        {heading}
      </Typography>
      {text && (
        <Typography
          textAlign="center"
          fontWeight={500}
          color={palette?.primary?.lighter}
        >
          <Typography
            component={"span"}
            display={"inline-block"}
            maxWidth={"867px"}
          >
            {text}
          </Typography>
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeading;
