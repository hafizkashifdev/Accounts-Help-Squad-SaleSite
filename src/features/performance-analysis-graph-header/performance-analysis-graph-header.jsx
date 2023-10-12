import React, { useState } from 'react'
import BarChartIcon from "../../assests/svg/dashboard/bar-chart-icon.svg";
import BarChartIconActive from "../../assests/svg/dashboard/bar-chart-active.svg";
import { Box, Collapse, Grid } from '@mui/material';
import { DashboardDateRange } from '../dashboard-date-range/dashboard-date-range';
import { DashboardChartSwitch } from '../dashboard-chart-switch/dashboard-chart-switch';
import { PaymentForecastingChartSwitch } from '../payment-forecasting-chart-switch/payment-forecasting-chart-switch';
import { ComparisonBarChart } from '../comparison-bar-chart/comparison-bar-chart';
import { ComparisonPieChart } from '../comparison-pie-chart/comparison-pie-chart';
const ComparisonBarChart1 = [
    {
        name: 'Paid Invoices',
        data: [144, 55, 57, 56, 61, 58, 63, 60, 66, 10, 100, 67]
    },
    {
        name: 'OverDue Invoices',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 34, 76, 12]
    }
]
const ComparisonBarChart2 = [
    {
        name: 'Paid Invoices',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 10, 100, 67]
    },
    {
        name: 'OverDue Invoices',
        data: [176, 85, 101, 98, 87, 105, 91, 114, 94, 34, 76, 12]
    }
]
const getMax = (array1, array2, array3, array4) => {
    let mainArr = [array1, array2, array3, array4];
    const flattenedArray = mainArr.flat();
    return Math.max(...flattenedArray);
}
export const PerformanceAnalysisGraphHeader = ({ id }) => {
    const [graphDivOpen, setGraphDivOpen] = useState(false);
    const [showInSelect, setShowInSelect] = useState("Percentage");
    const [workflow1Select, setWorkflow1Select] = useState(id ? "Frodo Baggins" : "UK Workflow");
    const [workflow2Select, setWorkflow2Select] = useState(id ? "Bilbo Baggins" : "New workflow");
    const [chartSwitch, setchartSwitch] = useState("Bar Graph");
    return (
        <>
            <div className='flex justify-end margin-top-1 margin-bottom-1' >
                <img onClick={() => setGraphDivOpen(!graphDivOpen)} className=' cursor-pointer' src={graphDivOpen ? BarChartIconActive : BarChartIcon} alt="money-trees" />
            </div>
            <Collapse easing={{
                enter: "cubic-bezier(0, 1.5, .8, 1)",
                exit: "ease-out"
            }} className='margin-bottom-2' in={graphDivOpen} timeout="auto" unmountOnExit >
                <Grid container className='align-center'>
                    <Grid item className='font-weight-600 primary-color secondary-title margin-bottom-1' xl={2} xs={12}>
                        Graph Comparison
                    </Grid>
                    <Grid item xl={10} xs={12} className=''>
                        <Grid container className='flex align-center justify-between'>
                            <Grid item lg={4} xs={12} justifyContent={{ xl: 'flex-end', lg: 'flex-start', xs: 'center' }} className='flex margin-bottom-1'>
                                <DashboardDateRange />
                            </Grid>
                            <Grid item lg={4} sm={6} xs={12} className='flex margin-bottom-1' justifyContent={{ xl: 'flex-end', lg: 'center', sm: 'flex-start', xs: 'center' }}>
                                <DashboardChartSwitch MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} switchName="Show in" selectVal={showInSelect} setSelectVal={setShowInSelect} data={["Percentage", "Amount"]} />
                            </Grid>
                            <Grid item lg={4} sm={6} xs={12} className='flex margin-bottom-1' justifyContent={{ xl: 'flex-end', sm: 'flex-end', xs: 'center' }}>
                                <PaymentForecastingChartSwitch chartSwitch={chartSwitch} setSwitch={setchartSwitch} data={["Bar Graph", "Pie Graph"]} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className='flex align-center justify-between margin-top-1'>
                    <Grid item xl={6} xs={12} className='position-relative'>
                        <Box sx={{ top: {sm:'23px'}, zIndex: 2 }} className="position-absolute">
                            <DashboardChartSwitch MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} switchName={id ? "Client" : "Workflow"} selectVal={workflow1Select} setSelectVal={setWorkflow1Select} data={id ? ["Frodo Baggins", "Bilbo Baggins"] : ["UK Workflow", "New workflow"]} />
                        </Box>
                        <div className='margin-top-1'>
                            {chartSwitch === "Bar Graph" ? <ComparisonBarChart yaxisHidden={true} showIn={showInSelect} data={ComparisonBarChart1} max={getMax(ComparisonBarChart1[0].data, ComparisonBarChart1[1].data, ComparisonBarChart2[0].data, ComparisonBarChart2[1].data,)} /> : <ComparisonPieChart setchartSwitch={setchartSwitch} showIn={showInSelect} data={[2050, 2000]} />}
                        </div>
                    </Grid>
                    <Grid item xl={6} xs={12} className='position-relative'>
                        <Box sx={{ top: {sm:'23px'}, zIndex: 2 }} className="position-absolute">
                            <DashboardChartSwitch MenuSx={{ ".MuiMenuItem-root": { color: '#6B6B80', fontSize: '14px', fontWeight: 400 }, marginTop: '10px', boxShadow: '0px 6px 6px 6px #DEDEDE40', borderRadius: '8px', ".MuiList-root": { p: '0', }, ".Mui-selected": { bgcolor: '#F0F0F2 !important' }, ".Mui-selected:hover": { bgcolor: '#F0F0F2' } }} switchName={id ? "Client" : "Workflow"} selectVal={workflow2Select} setSelectVal={setWorkflow2Select} data={id ? ["Frodo Baggins", "Bilbo Baggins"] : ["UK Workflow", "New workflow"]} />
                        </Box>
                        <div className='margin-top-1'>
                            {chartSwitch === "Bar Graph" ? <ComparisonBarChart yaxisHidden={false} showIn={showInSelect} data={ComparisonBarChart2} max={getMax(ComparisonBarChart1[0].data, ComparisonBarChart1[1].data, ComparisonBarChart2[0].data, ComparisonBarChart2[1].data,)} /> : <ComparisonPieChart setchartSwitch={setchartSwitch} showIn={showInSelect} data={[2050, 1000]} />}
                        </div>
                    </Grid>
                </Grid>

            </Collapse>
        </>
    )
}
