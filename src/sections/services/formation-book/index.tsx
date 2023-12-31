import { Box, Typography, Button, Stack } from "@mui/material";
import { Fragment } from "react";
import Hero from "./hero";
import Services from "./services";
import BlackSection from "./black-section";
import Image from "next/image";
import Boxes from "@root/assets/services/images/Boxes.svg";

const FormationBook = () => {
  return (
    <Fragment>
      <Hero />

      <Services />

      <BlackSection />

      <Box textAlign={"center"} paddingX={{ xs: 1, md: 5 }}>
        <Image
          src={Boxes?.src}
          alt={""}
          width={0}
          height={0}
          style={{ width: "50%", height: "50%" }}
        />
        <Box
          display={"flex"}
          justifyContent={"center"}
          mt={{ xs: "unset", md: -15 }}
        >
          <Typography
            variant="h3"
            fontWeight={500}
            textAlign={"center"}
            width={{ xs: "unset", md: "50%" }}
          >
            With Formation Book, we're not just offering a service; we're
            offering you peace of mind. Start your business journey the right
            way with our innovative and comprehensive solutions.
          </Typography>
        </Box>
        <Button
          type="button"
          sx={{
            fontFamily: "__Exo_2_b9bafb",
            bgcolor: "primary.main",
            color: "common.white",
            borderRadius: 2,
            padding: "16px 32px",
            mt: 2,
            ":hover": { bgcolor: "#565666" },
          }}
        >
          Get Started with Formation Book
        </Button>
      </Box>
    </Fragment>
  );
};

export default FormationBook;
