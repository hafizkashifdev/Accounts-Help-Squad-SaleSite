import React from 'react'
import Chart from 'react-apexcharts';
const arrayToPercent = (data, max) => {
    return data.map((item) => {
        const percentData = item.data.map((value) => {
            return (value / (max + 10) * 100).toFixed(2);
        });

        return {
            name: item.name,
            data: percentData,
        };
    });
};

export const ComparisonBarChart = ({ yaxisHidden, showIn, data, max }) => {
    const optionsComparisonBarChart = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                borderRadiusApplication: 'end',
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false,
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
            },
        },
        stroke: {
            colors: ["transparent"],
            width: 5
        },
        yaxis: {
            show: yaxisHidden,
            tickAmount: 5,
            max: showIn === "Amount" ? max + 20 : 100,
            labels: {
                style: {
                    fontSize: '12px',
                    colors: ["#6B6B80"],
                    fontFamily: 'Exo 2',
                    fontWeight: 400,
                },
                formatter: (value) => { return showIn === "Amount" ? `£${value.toFixed(0)}` : `${value.toFixed(0)}%` },
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
        colors: ["#70D69E", "#FF9898"],
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            fontSize: '12px',
            colors: ["#000000"],
            fontFamily: 'Exo 2',
            fontWeight: 400,
        },
        responsive: [{
            breakpoint: 1535,
            options: {
                yaxis: {
                    show: true,
                    tickAmount: 5,
                    max: showIn === "Amount" ? max + 20 : 100,
                    labels: {
                        style: {
                            fontSize: '12px',
                            colors: ["#6B6B80"],
                            fontFamily: 'Exo 2',
                            fontWeight: 400,
                        },
                        formatter: (value) => { return showIn === "Amount" ? `£${value.toFixed(0)}` : `${value.toFixed(0)}%` },
                    },
                }
            },
        },
        {
            breakpoint: 1030,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 2,
                    }
                },
                stroke: {
                    colors: ["transparent"],
                    width: 2
                },
            },
        },
        {
            breakpoint: 600,
            options: {
                yaxis: {
                    tickAmount: 5,
                    max: showIn === "Amount" ? max + 20 : 100,
                    labels: {
                        style: {
                            fontSize: '9px',
                            colors: ["#6B6B80"],
                            fontFamily: 'Exo 2',
                            fontWeight: 400,
                        },
                        formatter: (value) => { return showIn === "Amount" ? `£${value.toFixed(0)}` : `${value.toFixed(0)}%` },
                    },
                },
                legend: {
                    show: false,
                },
            },
        }

        ]
    }
    return (
        <>
            <Chart
                series={showIn === "Amount" ? data : arrayToPercent(data, max) ?? []}
                height={350}
                options={optionsComparisonBarChart ?? {}}
                type="bar"
            />
        </>
    )
}
