import { Box } from "@mui/material";
import BgImage from "../../assets/sections/request-a-demo/images/bg.svg";
import { ContactUsHeader } from "./contact-us-header/ContactUsHeader";
import { ContactUsForm } from "./contact-us-form/ContactUsForm";
const ContactUs = () => {
  return (
    <Box
    // sx={{
    //   marginX: { xs: 1, md: 5 },
    // }}
    >
      <ContactUsHeader />
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
    </Box>
  );
};

export default ContactUs;
