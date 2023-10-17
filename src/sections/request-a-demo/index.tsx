"use client";
import { Box } from "@mui/material";
import { RequestADemoForm } from "./request-a-demo-form/RequestADemoForm";
import { RequestADemoHeader } from "./request-a-demo-header/RequestADemoHeader";
import BgImage from "../../assets/sections/request-a-demo/images/bg.svg";
const RequestDemo = () => {
  return (
    <Box
    // sx={{
    //   marginX: { xs: 1, md: 5 },
    // }}
    >
      <RequestADemoHeader />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${BgImage?.src})`,
          backgroundPositionY: "bottom",
          backgroundSize: "50% 80%",
          backgroundRepeat: "repeat-x",
        }}
      >
        <RequestADemoForm />
      </Box>
    </Box>
  );
  // return <>Request a demo</>;
};

export default RequestDemo;
