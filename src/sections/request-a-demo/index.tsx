"use client";

import { Box } from "@mui/material";
import { RequestADemoForm } from "./request-a-demo-form/RequestADemoForm";
import { RequestADemoHeader } from "./request-a-demo-header/RequestADemoHeader";
import BgImage from "@root/assets/sections/request-a-demo/images/bg.svg";

const RequestDemo = () => {
  return (
    <Box>
      <RequestADemoHeader />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${BgImage?.src})`,
          backgroundPositionY: "bottom",
          backgroundSize: "50% 75%",
          backgroundRepeat: "repeat-x",
          paddingBottom: { xs: "1rem", md: "8rem" },
        }}
      >
        <RequestADemoForm />
      </Box>
    </Box>
  );
};

export default RequestDemo;
