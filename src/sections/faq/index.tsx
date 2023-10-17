import { Grid, Typography } from "@mui/material";
import { getStartedStyles } from "../get-started/GetStarted.styles";
import HorizontalTabs from "@root/components/tabs/horizontal-tabs/HorizontalTabs";
import HorizontalTabsExample from "@root/components/tabs/horizontal-tabs/HorizontalTabs.example";

const FAQs = () => {
  return <>
    <Grid container>
      <Grid item xs={12} sx={getStartedStyles.heroContainer}>
        <Typography variant="h1" color="common.main">
          Let’s Get Started
        </Typography>
        <Typography variant="h6" color="common.light" maxWidth="799px">
          Welcome to Accounts Help Squad, your gateway to seamless
          communication. Whether you have questions, feedback, or simply want
          to get in touch, this is the place to do it. We're eager to hear
          from you and provide the information and assistance you need. Feel
          free to reach out, and we'll respond promptly to assist you in any
          way we can.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={10} xs={11}>
            <HorizontalTabs tabsDataArray={['General',
              'Formation Book',
              'Accounts Receivable',
              'Accounts Payable',
              'CashFlow Management',
              'R&D Tax Claim']} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>;
};

export default FAQs;
