import { Grid } from "@mui/material";
import { dashboardStyle } from "./dashboard-receivable";
import { DashboardCard } from "../../components/dashboard-card/dashboard-card";
import { DashboardResponsiveDR } from "../../features/dashboard-responsive-DR/dashboard-responsive-DR";
import AccountReceivableDashboard from '../../features/cashflow/Dashboard/Cashflow-Module/account-receivable-dashboard';
import { PaymentForecastingChart } from "../../features/cashflow/Dashboard/PaymentForecastingChart/PaymentForecastingChart";
import { CashInflowOutflowStats } from "../../features/cash-inflow-outflow-stats/cash-inflow-outflow-stats";
import { CashInflowOutflowTable } from "../../features/cash-inflow-outflow-table/cash-inflow-outflow-table";
import { AccountsAnalyticsCharts } from "../../features/accounts-analytics-charts/accounts-analytics-charts";
import { TitleTable } from "../../features/title-table/title-table";

export const DashboardCashflow = () => {
  return (
    <>
      <div style={dashboardStyle}>Dashboard</div>
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <DashboardCard
            heading={"Account Receivable"}
            headingSize=""
            className="tertiary-color sub-heading font-family-Exo"
            headingWeight="400"

          >
            <AccountReceivableDashboard
              tooltipMessageDso="Days Sales Outstanding It measures the average number of days it takes a business to receive payments for goods and services purchased on credit."
              tooltipMessageApd="Average Payment Delay The time between receiving a payment for goods and services AND paying said payment."
            />
          </DashboardCard>
        </Grid>
        <Grid item lg={6} xs={12}>
          <DashboardCard
            heading={"Account Payable"}
          >
            <AccountReceivableDashboard
              tooltipMessageDso="Days Sales Outstanding It measures the average number of days it takes a business to receive payments for goods and services purchased on credit."
              tooltipMessageApd="Average Payment Delay The time between receiving a payment for goods and services AND paying said payment."
            />
          </DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            heading={"Cash Inflow/Outflow Stats"}
            headingSibling={<DashboardResponsiveDR />}
          >
            <CashInflowOutflowStats />
          </DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            heading="Cash Inflow"
            headingColor="#48995D"
            headingSibling={<DashboardResponsiveDR />}
          >
            <CashInflowOutflowTable />
          </DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <DashboardCard
            heading="Cash Outflow"
            headingColor="#FF3F3F"
            headingSibling={<DashboardResponsiveDR />}
          >
            <CashInflowOutflowTable />
          </DashboardCard>
        </Grid>
        <Grid item xs={12}>
          <PaymentForecastingChart />
        </Grid>
        <Grid item xs={12}>
          <DashboardCard heading="Title">
            <TitleTable />
          </DashboardCard>
        </Grid>
        <Grid item xs={12} xl={6}>
          <AccountsAnalyticsCharts title="Account Receivable Analytics" card1Heading="Invoice Analytics" card2Heading="Top 10 Receivables by Category" />
        </Grid>
        <Grid item xs={12} xl={6}>
          <AccountsAnalyticsCharts title="Account Payable Analytics" card1Heading="Bills Analytics" card2Heading="Top 10 Payables by Category" />
        </Grid>
      </Grid>
    </>
  );
};
