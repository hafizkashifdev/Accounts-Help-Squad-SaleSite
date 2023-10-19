"use client";

import { Box, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useRouter } from "next/navigation";
import BgImage from "@root/assets/under-construction/bg-under-construction.svg";

function UnderConstruction() {
  const router = useRouter();

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
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        my={4}
      >
        <Button
          variant="contained"
          sx={{
            padding: "16px 32px",
            borderRadius: "8px",
            marginTop: 2,
            mx: 2,
          }}
          startIcon={<HomeIcon />}
          onClick={() => router.push("/")}
        >
          Home
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: "16px 32px",
            borderRadius: "8px",
            marginTop: 2,
            mx: 2,
          }}
          startIcon={<LogoutIcon />}
          onClick={() => {
            localStorage.removeItem("authToken");
            router.push("/");
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default UnderConstruction;
