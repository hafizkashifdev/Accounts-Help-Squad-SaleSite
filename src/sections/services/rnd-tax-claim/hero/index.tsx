import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import RNDTaxClaimHeroImg from "@root/assets/services/images/rnd-tax-claim/RNDTaxClaimHero.png";

const Hero = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        margin={"auto"}
        paddingX={{ xs: 1, md: 5 }}
        color={"primary.main"}
      >
        <Typography variant="h1">R&D Tax Claim</Typography>
        <Typography variant="h5">
          Unleashing Your Innovation Potential
        </Typography>
        <Typography
          variant="body1"
          mt={1}
          width={"90%"}
          color={"primary.lighter"}
        >
          Welcome to the world of innovation and financial growth with Accounts
          Help Squad's R&D Tax Claim service. We understand that innovation is
          at the heart of your business, and we're here to help you navigate the
          complexities of R&D tax relief, ensuring you receive the benefits you
          deserve.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} textAlign={"end"}>
        <Image
          src={RNDTaxClaimHeroImg}
          alt={"R&D Tax Claim"}
          width={0}
          height={0}
          style={{ width: "90%", height: "90%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
