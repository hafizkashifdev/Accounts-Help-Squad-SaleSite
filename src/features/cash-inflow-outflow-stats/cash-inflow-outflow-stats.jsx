import React from 'react'
import Chart from "react-apexcharts";
const options = {
    colors: ['#76BD70', '#565666', '#FFD698'],
    chart: {
        type: 'bar',
        height: 440,
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            barHeight: '80%',
            borderRadius: 8,
            borderRadiusApplication: 'end',
            borderRadiusWhenStacked: 'all',
            columnWidth: ["44%"],
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'straight',
    },

    grid: {
        xaxis: {
            lines: {
                show: false
            }
        }
    },
    markers: {
        size: [4, 4],
        colors: ["#fff", "#fff"],
        strokeColors: "#565666",
    },
    yaxis: {
        min: -5,
        forceNiceScale: true,
        max: 5,
        labels: {
            style: {
                fontSize: '12px',
                colors: ["#6B6B80"],
                fontFamily: 'Exo 2',
                fontWeight: 400,
            },
            formatter: (value) => { return `£${Math.abs(value.toFixed(0))}` },
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },

    },
    tooltip: {
        shared: false,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return '<div style="padding: 4px 8px; border-radius: 4px; background-color: #2B2B33; color: #fff; font-size: 13px;" class="arrow_box">' +
                '<span>' + w.globals.seriesNames[seriesIndex] + ' : </span>' +
                '<span>£' + Math.abs(series[seriesIndex][dataPointIndex]) + '</span>' +
                '</div>'
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
        }
    },
    legend: {
        show: false,
    }
}
export const CashInflowOutflowStats = () => {
    return (
        <>
            <Chart
                options={options}
                series={[{
                    name: 'Inflow',
                    type: 'bar',
                    data: [4.4, 5.65, 4.76, 3.88, 4.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3]
                },
                {
                    name: 'Inflow Outflow Stats',
                    type: 'line',
                    data: [0, 5, -2, 0.88, -1, 1.7, -2.2, 3, -2, 4, -4.5, 1]
                },
                {
                    name: 'Outflow',
                    type: 'bar',
                    data: [-4.8, -5.05, -4.06, -4.18, -3.4, -5.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4]
                }
                ]}
                type="bar"
                height={340}
            />
        </>
    )
}
