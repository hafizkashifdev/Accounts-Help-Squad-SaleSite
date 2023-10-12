import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { DashboardCard } from '../../components/dashboard-card/dashboard-card'
import { AgingBucketCharts } from '../aging-bucket-charts/aging-bucket-charts'
import { DashboardResponsiveDR } from '../dashboard-responsive-DR/dashboard-responsive-DR'
import { DashboardToggleIcon } from '../dashboard-toggle-icon/dashboard-toggle-icon'
import { CategoryBarChart } from '../category-bar-chart/category-bar-chart'

export const AccountsAnalyticsCharts = ({ title, card1Heading,card2Heading }) => {
    const [agingBucketVal, setAgingBucketVal] = useState("0");
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className="sub-heading tertiary-color margin-top-1">{title}</div>
                </Grid>
                <Grid item xs={12}>
                    <DashboardCard heading={card1Heading}>
                        <AgingBucketCharts chartSwitch={"1"} pieChartColors={['#76BD70', '#E8BD50', '#E88750', '#FF6060']} />
                    </DashboardCard>
                </Grid>
                <Grid item xs={12}>
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
                        <AgingBucketCharts chartSwitch={agingBucketVal} pieChartColors={['#76BD70', '#E8BD50', '#E88750', '#FF6060']} />
                    </DashboardCard>
                </Grid>
                <Grid item xs={12}>
                    <DashboardCard
                        heading={card2Heading}
                        headingSibling={<DashboardResponsiveDR />}
                    >
                        <CategoryBarChart />
                    </DashboardCard>
                </Grid>
            </Grid>
        </>
    )
}
