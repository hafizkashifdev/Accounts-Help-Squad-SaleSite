import { Box, Typography, Button } from "@mui/material";
import { Fragment } from "react";
import FormationBookHero from "./hero";
import FormationBookServices from "./services";
import BlackSection from "./black-section";
import Image from "next/image";
import Boxes from "@root/assets/services/images/Boxes.png";

const FormationBook = () => {
  return (
    <Fragment>
      <FormationBookHero />

      <FormationBookServices />

      <BlackSection />

      <Box textAlign={"center"} paddingX={{ xs: 1, md: 5 }}>
        <Image src={Boxes} alt={""} width={0} height={0} />
        <Box display={"flex"} justifyContent={"center"} mt={-15}>
          <Typography
            variant="h3"
            fontWeight={500}
            textAlign={"center"}
            width={"50%"}
          >
            With Formation Book, we're not just offering a service; we're
            offering you peace of mind. Start your business journey the right
            way with our innovative and comprehensive solutions.
          </Typography>
        </Box>
        <Button
          type="button"
          variant="contained"
          sx={{ padding: "16px 32px", marginTop: 2 }}
        >
          Get Started with Formation Book
        </Button>
      </Box>
    </Fragment>
  );
};

export default FormationBook;
