import { Box } from '@mui/material';
import React from 'react'
import Chart from 'react-apexcharts';
const optionsComparisonPieChart = {
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
    labels: ["Paid Invoices", "OverDue Invoices"],
    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
        fontSize: '12px',
        colors: ["#000000"],
        fontFamily: 'Exo 2',
        fontWeight: 400,
    },
    dataLabels: {
        enabled: true,
        formatter: function (val, { seriesIndex }) {
            return val.toFixed(0) + "%";
        },
        style: {
            fontSize: '12px',
            fontFamily: 'Exo 2',
            fontWeight: '400',
        },
    },
    colors: ["#70D69E", "#FF9898"],
    responsive: [
        {
            breakpoint: 600,
            options: {
                chart:{
                    height:280
                },
                legend: {
                    show: false,
                },
            },
        }

    ]
}
export const ComparisonPieChart = ({ showIn, data }) => {
    return (
        <Box sx={{mt:{sm:'0',xs:'40px'}}}>
            <Chart
                series={data ?? []}
                height={350}
                options={optionsComparisonPieChart ?? {}}
                type="donut"
            />
        </Box>
    )
}