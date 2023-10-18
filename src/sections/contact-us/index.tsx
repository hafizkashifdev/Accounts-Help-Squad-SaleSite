import { Box } from "@mui/material";
import BgImage from "../../assets/sections/request-a-demo/images/bg.svg";
import { ContactUsHeader } from "./contact-us-header";
import { ContactUsForm } from "./contact-us-form";
const ContactUs = () => {
  return (
    <Box>
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
