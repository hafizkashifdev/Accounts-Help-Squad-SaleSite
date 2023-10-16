import { Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import AccountsReceivableInnovation from "@root/assets/services/images/accounts-receivable/AccountsReceivableInnovation.png";
import { Fragment } from "react";
import { dataArray } from "./innovation.data";

const Innovation = () => {
  return (
    <Grid container spacing={4} paddingX={{ xs: 1, md: 5 }} marginY={5}>
      <Grid item xs={12} md={6}>
        <Image
          src={AccountsReceivableInnovation}
          alt={"Innovation"}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h3" color={"primary.main"}>
          Innovation in Receivables Management - Unleash the Potential
        </Typography>
        <Typography variant="body1" color={"primary.lighter"} my={1}>
          Our commitment to innovation extends to the core of our Accounts
          Receivable service. With us, you'll experience
        </Typography>

        {dataArray?.map((item: any) => (
          <Fragment key={item?.id}>
            <Box display={"flex"} alignItems={"center"}>
              <Box
                height={"30px"}
                border={"3px solid #FBCE66"}
                borderRadius={2}
              />
              <Typography variant="h6" fontWeight={600} ml={1} my={1}>
                {item?.title}
              </Typography>
            </Box>
            <Typography variant="body1" color={"primary.lighter"} my={1}>
              {item?.desc}
            </Typography>
          </Fragment>
        ))}
        <Button
          variant="outlined"
          type="button"
          sx={{ padding: "16px 32px", marginTop: 2 }}
        >
          Master Your Expenses Today
        </Button>
      </Grid>
    </Grid>
  );
};

export default Innovation;
