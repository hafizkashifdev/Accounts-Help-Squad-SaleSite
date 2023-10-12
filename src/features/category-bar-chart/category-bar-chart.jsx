import React from 'react'
import Chart from 'react-apexcharts';

const categoryBarChartOptions = {
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false,
        },
    },
    grid: {
        yaxis: {
            lines: {
                show: false
            }
        }, 
        xaxis: {
            lines: {
                show: true
            }
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            horizontal: true,
            distributed: true,
            borderRadiusApplication: 'end',
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Pakistan', 'Canada', 'Gotham', 'Italy', 'France', 'Japan', 'China', 'Germany'
        ],
        labels: {
            style: {
                fontSize: '12px',
                colors: ["#6B6B80"],
                fontFamily: 'Exo 2'
            },
        },
        axisBorder: {
            height: 0,
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
                fontFamily: 'Exo 2'
            },
        },
    },
    legend: {
        show: false,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return '<div style="padding: 4px 8px; border-radius: 4px; background-color: #2B2B33; color: #fff; font-size: 13px;" class="arrow_box">' +
                '<span>' + w.globals.labels[dataPointIndex] + ' : </span>' +
                '<span>£' + Math.abs(series[seriesIndex][dataPointIndex]) + '</span>' +
                '</div>'
        },
    },
    colors: ["#FF9898", "#FFB798", "#FFE898", "#B9FF98", "#98FFF9", "#98CEFF", "#CB98FF", "#FD98FF",],
}
export const CategoryBarChart = () => {
    return (
        <>
            <Chart
                series={[{
                    data: [400, 430, 448, 470, 540, 580, 690, 1100]
                }] ?? []}
                height={350}
                options={categoryBarChartOptions ?? {}}
                type="bar"
            />
        </>
    )
}
