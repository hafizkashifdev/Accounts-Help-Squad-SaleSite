import { Box } from "@mui/material";
import SectionHeading from "@root/components/sectionHeading";
import ServiceCard from "@root/components/serviceCard";
import React from "react";
import { accountingServiceData } from "./accountingService.data";

const AccountingService = () => {
  return (
    <div>
      <SectionHeading
        heading="Our Comprehensive Accounting Services"
        text="At Accounts Help Squad, we offer a range of services designed to meet your business's financial needs. Whether you're just starting or looking to optimize your operations, we've got you covered"
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2.4,
          flexWrap: "wrap",
          mt: 6.8,
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
    </div>
  );
};

export default AccountingService;
