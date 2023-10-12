import React, { useState } from "react";
import RecentNotify from "../../features/RecentNotification/RecentNotify";
import { Grid } from "@mui/material";
import { DashboardCard } from "../../components/dashboard-card/dashboard-card";
import { TopClientsStackedBarChart } from "../../features/top-clients-stacked-bar-chart/top-clients-stacked-bar-chart";
import { AgingBucketCharts } from "../../features/aging-bucket-charts/aging-bucket-charts";
import { PaymentShowcaseAreaChart } from "../../features/payment-showcase-area-chart/payment-showcase-area-chart";
import { PaymentForecastingChartSwitch } from "../../features/payment-forecasting-chart-switch/payment-forecasting-chart-switch";
import { DashboardChartSwitch } from "../../features/dashboard-chart-switch/dashboard-chart-switch";
import { DashboardToggleIcon } from "../../features/dashboard-toggle-icon/dashboard-toggle-icon";
import { DashboardResponsiveDR } from "../../features/dashboard-responsive-DR/dashboard-responsive-DR";
import { useNavigate } from "react-router-dom";
import { dashboardStyle } from "./dashboard-receivable";
import TotalBills from "../../features/account-payable/total-bills-dashboard/total-bills";
import PaidBills from "../../features/account-payable/total-bills-dashboard/paid-bills";
import ScheduledBills from "../../features/account-payable/total-bills-dashboard/scheduled-bills";
import RejectedBills from "../../features/account-payable/total-bills-dashboard/rejected-bills";

export const DashboardPayable = () => {
    const [paymentForecastSwitch, setPaymentForecastSwitch] = useState("This Month");
    const [PCVal, setPCVal] = useState("2020");
    const [agingBucketVal, setAgingBucketVal] = useState("0");
    const navigate = useNavigate();
    return (
        <>
            <div style={dashboardStyle} className="tertiary-color font-weight-600">Dashboard</div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xl={3} sm={6} xs={12}>
                            <DashboardCard>
                                <TotalBills title={'Total Bills'} number = {'1350'} price = {'£ 17500.00'} color = {'var(--theme-primary-p-20-main, #2B2B33)'} />
                            </DashboardCard>
                        </Grid>
                        <Grid item xl={3} sm={6} xs={12}>
                            <DashboardCard>
                                <PaidBills title={'Paid Bills'} number = {'1100'} price = {'£ 123650.00'} color = {'var(--indication-success, #48995D)'} />
                            </DashboardCard>
                        </Grid>
                        <Grid item xl={3} sm={6} xs={12}>
                            <DashboardCard>
                                <ScheduledBills title={'Scheduled Bills'} number = {'1100'} price = {'£ 123650.00'} color = {'#3F75FF'} />
                            </DashboardCard>
                        </Grid>
                        <Grid item xl={3} sm={6} xs={12}>
                            <DashboardCard>
                                <RejectedBills title={'Rejected Bills'} number = {'1100'} price = {'£ 123650.00'} color = {'var(--indication-error, #FF3F3F)'} />
                            </DashboardCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xl={6.5} xs={12}>
                    <DashboardCard
                        heading={"Top Vendors"}
                        headingSibling={<DashboardResponsiveDR />}
                    >
                        <TopClientsStackedBarChart />
                    </DashboardCard>
                </Grid>
                <Grid item xl={5.5} xs={12}>
                    <DashboardCard
                        heading="Aging Bucket"
                        headingSibling={
                            <div className="flex margin-top-0">
                                <DashboardResponsiveDR />
                                <DashboardToggleIcon
                                    chartSwitch={agingBucketVal}
                                    setSwitch={setAgingBucketVal}
                                />
                            </div>
                        }
                    >
                        <AgingBucketCharts chartSwitch={agingBucketVal} />
                    </DashboardCard>
                </Grid>
                <Grid item xl={6.5} xs={12}>
                    <DashboardCard
                        heading="Amount Payable"
                        headingSibling={
                            <DashboardChartSwitch
                                switchName="Year"
                                data={["2020", "2030", "2040"]}
                                selectVal={PCVal}
                                setSelectVal={setPCVal}
                            />
                        }
                    >
                        <PaymentShowcaseAreaChart
                            categories={[
                                "",
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Nov",
                                "Dec",
                                "",
                            ]}
                            series={[
                                {
                                    name: "Payment Collection",
                                    data: ["", 31, 40, 28, 51, 42, 109, 100, 31, 40, 28, 51, ""],
                                },
                            ]}
                        />
                    </DashboardCard>
                </Grid>
                <Grid item xl={5.5} xs={12}>
                    <DashboardCard
                        heading="Payment Forecasting"
                        headingSibling={
                            <PaymentForecastingChartSwitch
                                chartSwitch={paymentForecastSwitch}
                                setSwitch={setPaymentForecastSwitch}
                            />
                        }
                    >
                        <PaymentShowcaseAreaChart
                            categories={
                                paymentForecastSwitch === "This Month"
                                    ? ["", "Week 1", "Week 2", "Week 3", "Week 4", ""]
                                    : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                            }
                            series={[
                                {
                                    name: "Payment Forecasting",
                                    data:
                                        paymentForecastSwitch === "This Month"
                                            ? ["", 31, 40, 28, 51, ""]
                                            : [31, 40, 28, 51, 42, 109, 100],
                                },
                            ]}
                        />
                    </DashboardCard>
                </Grid>
                <Grid item xs={12}>
                    <DashboardCard
                        heading="Recent Notifications"
                        headingSibling={
                            <span
                                className="right-text"
                                style={{ color: "#6B9DE9", cursor: "pointer" }}
                                onClick={() => navigate("/notifications")}
                            >
                                View All
                            </span>
                        }
                    >
                        <RecentNotify />
                    </DashboardCard>
                </Grid>
            </Grid>
        </>
    )
}
