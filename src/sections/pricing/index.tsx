import { Box, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BgImage from "@root/assets/under-construction/bg-under-construction.svg";

const Pricing = () => {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      paddingX={{ xs: 1, md: 5 }}
      sx={{
        backgroundImage: `url(${BgImage?.src})`,
        backgroundPositionY: "bottom",
      }}
    >
      <Typography variant="h2" color={"primary.main"} textAlign={"center"}>
        Exciting News - Our Website is Getting a Makeover!
      </Typography>
      <Typography
        variant="h6"
        color={"primary.main"}
        width={{ xs: "100%", md: "70%" }}
        textAlign={"center"}
        my={4}
      >
        Thanks a bunch! for reaching out to us. We have got your info and we are
        thrilled to connect with you soon! Our friendly representative will be
        in touch with all the awesome details and information you need.
      </Typography>
      <Typography
        variant="body1"
        color={"primary.main"}
        display={"flex"}
        alignItems={"center"}
      >
        Hang tight and talk to you real soon!{"  "}
        <RocketLaunchIcon sx={{ color: "primary.lighter" }} />
      </Typography>
    </Box>
  );
};

export default Pricing;
