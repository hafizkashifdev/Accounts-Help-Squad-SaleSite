import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import AccountsReceivableHeroImg from "@root/assets/services/images/accounts-receivable/AccountsReceivableHero.png";

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
        <Typography variant="h1">Accounts Receivable</Typography>
        <Typography variant="h5">Our Comprehensive Services Include</Typography>
        <Typography
          variant="body1"
          mt={1}
          width={"90%"}
          color={"primary.lighter"}
        >
          Welcome to Accounts Help Squad's Accounts Receivable service, designed
          to revolutionize your receivables management. We understand that
          timely payments are crucial for your business's financial health. With
          our innovative solution, you can take control like never before.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} textAlign={"end"}>
        <Image
          src={AccountsReceivableHeroImg}
          alt={"Accounts Receivable"}
          width={0}
          height={0}
          style={{ width: "90%", height: "90%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
