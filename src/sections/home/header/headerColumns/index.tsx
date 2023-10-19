import { Grid, Typography } from "@mui/material";
import Buttons from "./Buttons";
import HeroImage from "@root/assets/home/images/hero/HeroImage.svg";
import Image from "next/image";

const HeaderColumns = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} margin={"auto"}>
          <Typography
            sx={{
              pb: { xs: 2 },
            }}
            variant="h2"
          >
            Welcome to
            <br /> Accounts Help Squad
          </Typography>
          <Typography variant="h3" fontWeight={500} pb={2}>
            -Your Trusted Accounting Solutions Partner
          </Typography>
          <Typography
            variant={"h5"}
            color={"primary.lighter"}
            pb={2}
            fontWeight={400}
          >
            At Accounts Help Squad, we're dedicated to simplifying your
            financial journey.
          </Typography>
          <Buttons />
        </Grid>
        <Grid item xs={12} md={6} textAlign={"end"}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={HeroImage?.src}
            alt="Hero Image"
            width={0}
            height={0}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderColumns;
