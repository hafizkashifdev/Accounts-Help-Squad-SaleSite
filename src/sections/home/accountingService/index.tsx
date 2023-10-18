import { Box } from "@mui/material";
import SectionHeading from "@root/components/sectionHeading";
import ServiceCard from "@root/components/serviceCard";
import React from "react";
import { accountingServiceData } from "./accountingService.data";

const AccountingService = () => {
  return (
    <Box px={{ xs: 1, md: 5 }}>
      <SectionHeading
        heading="Our Comprehensive Accounting Services"
        text="At Accounts Help Squad, we offer a range of services designed to meet your business's financial needs. Whether you're just starting or looking to optimize your operations, we've got you covered"
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          mt: 7,
        }}
      >
        {accountingServiceData?.map(({ icon, heading, text }) => (
          <ServiceCard
            key={heading + text}
            icon={icon}
            heading={heading}
            text={text}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AccountingService;
