import Header from "./header";
import About from "./about";
import Team from "./team";
import AccountingService from "./accountingService";
import CustomerReviews from "./customerReviews";
import EngageWithService from "./engageWithService";
import FeaturedPost from "./featuredPost";
import { Box, Stack } from "@mui/material";
import BgImage from "@root/assets/sections/request-a-demo/images/bg.svg";
import { ContactUsForm } from "../contact-us/contact-us-form";

const HomeSection = () => {
  return (
    <Stack rowGap={10}>
      <Header />
      <About />
      <Team />
      <AccountingService />
      <CustomerReviews />
      <EngageWithService />
      <FeaturedPost />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${BgImage?.src})`,
          backgroundPositionY: "bottom",
          backgroundSize: "50% 75%",
          backgroundRepeat: "repeat-x",
          paddingBottom: { xs: "1rem", md: "10rem" },
        }}
      >
        <ContactUsForm />
      </Box>
    </Stack>
  );
};

export default HomeSection;
