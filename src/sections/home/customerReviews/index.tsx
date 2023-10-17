import { Box } from "@mui/material";
import { customStepperData } from "@root/components/customStepper/customStepper.data";
import { SectionHeading, CustomStepper } from "@root/components/export";

const CustomerReviews = () => {
  return (
    <Box
      sx={{
        px: 11.6,
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
        flexDirection: "column",
        gap: 6.4,
      }}
    >
      <SectionHeading
        heading="Customer reviews"
        text="Accounts Help Squad has been a game-changer for our business. Their expertise in accounting and the efficiency of their software modules have saved us both time and money. Highly recommended!"
      />
      <CustomStepper data={customStepperData} />
    </Box>
  );
};

export default CustomerReviews;
