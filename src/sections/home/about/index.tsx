"use client";
import React from "react";
import SectionHeading from "@root/components/sectionHeading";
import Mission from "./Mission";
import { Box } from "@mui/material";

const About = () => {
  return (
    <>
      <SectionHeading
        heading="About Accounts Help Squad"
        text="With a rich history of providing top-notch accounting solutions, we've been serving businesses of all sizes since 2021."
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2.4,
        }}
      >
        <Mission />
      </Box>
    </>
  );
};

export default About;
