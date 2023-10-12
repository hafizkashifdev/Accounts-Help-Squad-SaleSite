import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { CustomTabs } from "../../components/custom-tabs/custom-tabs";
import AllTransactions from "./components/all-transactions/AllTransactions";
import Uncategorized from "./components/uncategorized/Uncategorized";
import PreCategorized from "./components/pre-categorized/PreCategorized";
import Late from "./components/late/Late";

const TabData = [
  {
    id: 0,
    name: "All Transactions",
    component: <AllTransactions />,
  },
  {
    id: 1,
    name: "Uncategorized",
    component: <Uncategorized />,
  },
  {
    id: 2,
    name: "Pre-Categorized",
    component: <PreCategorized />,
  },
  {
    id: 3,
    name: "Late",
    component: <Late />,
  },
];

const Transactions = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography className="font-weight-600 heading-20 font-family-Exo">
          Transactions
        </Typography>
      </Grid>

      <Grid item className="margin-top-3" xs={12}>
        <CustomTabs tabsData={TabData} />
      </Grid>
    </Grid>
  );
};

export default Transactions;
