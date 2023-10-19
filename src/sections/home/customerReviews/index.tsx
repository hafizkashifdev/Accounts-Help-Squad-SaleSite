import { Box } from "@mui/material";
import { SectionHeading, CustomStepper } from "@root/components/export";
import { customReviwesData } from "./cutomer-reviews.data";

const CustomerReviews = () => {
  return (
    <Box px={{ xs: 1, md: 5 }}>
      <SectionHeading
        heading="Customer reviews"
        text="Accounts Help Squad has been a game-changer for our business. Their expertise in accounting and the efficiency of their software modules have saved us both time and money. Highly recommended!"
      />
      <Box mt={4}>
        <CustomStepper data={customReviwesData} />
      </Box>
    </Box>
  );
};

export default CustomerReviews;
