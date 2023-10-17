import { Box } from "@mui/material";
import CustomStepper from "@root/components/customStepper";
import { customStepperData } from "@root/components/customStepper/customStepper.data";
import SectionHeading from "@root/components/sectionHeading";
import React from "react";

const EngageWithService = () => {
  return (
    <Box
      sx={{
        px: { xs: 1.6, md: 3.6, xl: 11.6 },
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
        flexDirection: "column",
        gap: 6.4,
      }}
    >
      <SectionHeading
        heading="Engage with Our Services Like Never Before"
        text="Are you ready to experience accounting and financial services in a whole new way? At Accounts Help Squad, we believe in making your journey with us interactive and informative. Explore our interactive features, including quizzes, calculators, and financial tools that allow you to engage directly with our services. Test your financial knowledge, calculate potential savings, and gain valuable insights into your business's financial health."
      />
      <CustomStepper data={customStepperData} isRowRevers={true} />
    </Box>
  );
};

export default EngageWithService;
