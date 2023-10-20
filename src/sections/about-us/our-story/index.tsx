import React from "react";
import { Typography, Box } from "@mui/material";
import BgImage from "@root/assets/about-us/our-story.svg";

const OurStory = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        textAlign={"center"}
        color={"primary.main"}
        mb={2}
      >
        Our Story
      </Typography>

      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{
          backgroundImage: `url(${BgImage?.src})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          bgcolor={"common.white"}
          boxShadow={"0px 25px 50px 0px rgba(0, 0, 0, 0.06)"}
          padding={4}
          width={"50%"}
          borderRadius={2}
        >
          <Typography
            variant="h6"
            color={"primary.lighter"}
            textAlign={"center"}
          >
            At Accounts Help Squad, our journey began with a vision - a vision
            of simplifying complex financial processes and helping businesses
            thrive. Founded in [Year], we started as a small team of financial
            experts who shared a passion for assisting entrepreneurs in
            achieving their goals.
          </Typography>
          <Typography
            variant="h6"
            color={"primary.lighter"}
            textAlign={"center"}
            mt={2}
          >
            Over the years, our dedication to excellence and client-centric
            approach has driven our growth. Today, we proudly serve a diverse
            clientele, from startups and SMEs to established corporations, with
            a wide range of financial and business services.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OurStory;
