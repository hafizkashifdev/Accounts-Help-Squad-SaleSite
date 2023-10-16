"use client";
import { Box, Grid } from "@mui/material";
import { RequestADemoForm } from "./request-a-demo-form/RequestADemoForm";
import { RequestADemoHeader } from "./request-a-demo-header/RequestADemoHeader";
import Logo from "@root/assets/layout/images/logo.svg";
const RequestDemo = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("@root/assets/layout/images/logo.svg")`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        marginX: { xs: 1.5, md: 5 },
      }}
    >
      <RequestADemoHeader />
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <RequestADemoForm />
      </Box>
    </Box>
  );
  // return <>Request a demo</>;
};

export default RequestDemo;
