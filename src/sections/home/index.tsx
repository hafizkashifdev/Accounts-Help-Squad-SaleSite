import Header from "./header";
import About from "./about";
import Team from "./team";
import AccountingService from "./accountingService";
import CustomerReviews from "./customerReviews";
import EngageWithService from "./engageWithService";
import FeaturedPost from "./featuredPost";
import { Box } from "@mui/material";

const HomeSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
        flexDirection: "column",
        gap: { xs: 3.5, xl: 15 },
      }}
    >
      <Header />
      <About />
      <Team />
      <AccountingService />
      <CustomerReviews />
      <EngageWithService />
      <FeaturedPost />
    </Box>
  );
};

export default HomeSection;
