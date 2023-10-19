import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import AccountsPayableHeroImg from "@root/assets/services/images/accounts-payable/AccountsPayableHero.svg";

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
        <Typography variant="h1">Accounts Payable</Typography>
        <Typography variant="h5">
          Revolutionize Your Expense Management
        </Typography>
        <Typography
          variant="body1"
          mt={1}
          width={"90%"}
          color={"primary.lighter"}
        >
          Welcome to the future of expense management with Accounts Help Squad's
          Accounts Payable solution. We understand that staying on top of your
          bills and payments is essential for business success. That's why we've
          developed an innovative platform to simplify and enhance your accounts
          payable process.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} textAlign={"end"}>
        <Image
          src={AccountsPayableHeroImg?.src}
          alt={"Accounts Payable"}
          width={0}
          height={0}
          style={{ width: "90%", height: "90%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
