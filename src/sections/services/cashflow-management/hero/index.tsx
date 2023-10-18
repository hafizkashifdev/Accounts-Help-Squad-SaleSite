import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import CashflowManagementHeroImg from "@root/assets/services/images/cashflow-management/CashflowManagementHero.png";

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
        <Typography variant="h1">Cashflow Management</Typography>
        <Typography variant="h5">Mastering Your Financial Stability</Typography>
        <Typography
          variant="body1"
          mt={1}
          width={"90%"}
          color={"primary.lighter"}
        >
          Welcome to the future of financial stability with Accounts Help
          Squad's Cash Flow Management solution. We understand that cash is the
          lifeblood of your business, and we're here to empower you with the
          tools you need to manage it effectively.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} textAlign={"end"}>
        <Image
          src={CashflowManagementHeroImg}
          alt={"Cashflow Management"}
          width={0}
          height={0}
          style={{ width: "90%", height: "90%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
