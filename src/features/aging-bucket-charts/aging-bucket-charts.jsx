import { Box } from '@mui/material';
import Chart from 'react-apexcharts';
import React from 'react'

const optionsAgingBucketBarChart = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 6,
            borderRadiusApplication: 'end',
            columnWidth: '30%',
            barHeight: '50%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: ["1 - 30", "31 - 60", "61 - 90", "> 90"],
        position: 'bottom',
        labels: {
            style: {
                fontSize: '12px',
                colors: ["#6B6B80"],
                fontFamily: 'Exo 2'
            },
        },
        axisBorder: {
            color: '#6B6B80',
            height: 1,
        },
        axisTicks: {
            show: false
        },
        tooltip: {
            enabled: false,
        },
    },
    yaxis: {
        labels: {
            style: {
                fontSize: '12px',
                colors: ["#6B6B80"],
                fontFamily: 'Exo 2',
                fontWeight: 400,
            },
            formatter: (value) => { return `£${value}` },
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        tooltip: {
            enabled: false,
        }
    },
    colors: ["#FF9898"]
}
const optionsAgingBucketPieChart = (colors = ["#B54C02", "#E8BD50", "#E88750", "#FF3F3F"]) => ({
    chart: {
        type: 'donut',
    },
    plotOptions: {
        pie: {
            donut: {
                size: '50%',
                labels: {
                    show: true,
                    value: {
                        fontSize: '13.5px',
                        color: "#40404D",
                        fontFamily: 'Exo 2',
                        fontWeight: 600,
                        offsetY: -8,
                        formatter: function (val) {
                            return "£ " + val
                        }
                    },
                    total: {
                        showAlways: false,
                        show: true,
                        label: '',
                        fontSize: '13.5px',
                        color: "#6B6B80",
                        fontFamily: 'Exo 2',
                        fontWeight: 700,
                        formatter: function (w) {
                            let result = w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                            return "£ " + (Math.round(result * 100) / 100).toLocaleString();
                        }
                    }
                }
            }
        }
    },
    labels: ["1-30d", "31-60d", "61-90d", ">90d"],
    stroke: {
        show: false,
    },
    fill: {
        opacity: 1,
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '11.0759px',
        color: "#6B6B80",
        fontFamily: 'Exo 2',
        fontWeight: 400,
        itemMargin: {
            horizontal: 15,
            vertical: 10
        },
        markers: {
            radius: 2,
        },
    },
    dataLabels: {
        enabled: true,
        dropShadow:false,
        formatter: function (val) {
            return val.toFixed(0) + "%";
        },
        style: {
            fontSize: '12px',
            fontFamily: 'Exo 2',
            fontWeight: '400',
        },
    },
    colors: colors
})
export const AgingBucketCharts = ({ chartSwitch, pieChartColors }) => {
    return (
        <>
            <div>
                {
                    chartSwitch === '0' ? <Box sx={{ml:'-14px'}}>
                        <Chart
                            series={[{
                                name: 'Aging Bucket',
                                data: [25, 200, 100, 300]
                            }] ?? []}
                            height={265}
                            options={optionsAgingBucketBarChart ?? {}}
                            type="bar"
                        />
                    </Box>
                        : <Box sx={{ my: '27px' }}>
                            <Chart
                                series={[2050, 2000, 1000, 3000] ?? []}
                                height={265}
                                options={optionsAgingBucketPieChart(pieChartColors) ?? {}}
                                type="donut"
                            />
                        </Box>
                }
            </div>
        </>
    )
}
