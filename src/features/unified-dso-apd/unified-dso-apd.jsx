import { Box } from '@mui/material';
import React from 'react';
import NorthRoundedIcon from '@mui/icons-material/NorthRounded';
import Chart from 'react-apexcharts';
const options = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
            show: false,
        },
    },
    states: {
        hover: {
            filter: {
                type: 'none',
            }
        },
    },
    grid: {
        show: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 6,
            borderRadiusApplication: 'end',
            columnWidth: '50%',
            barHeight: '50%',
            dataLabels: {
                position: 'top',
            }
        }
    },
    dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
            fontSize: '10px',
            colors: ["#6B6B80"],
            fontFamily: 'Exo 2'
        }
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar"],
        position: 'bottom',
        labels: {
            style: {
                fontSize: '10px',
                colors: ["#6B6B80"],
                fontFamily: 'Exo 2'
            },
            offsetY: -5,
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        tooltip: {
            enabled: false,
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
        max: (max) => {
            return max + (max / 2);
        },
        labels: {
            show: false,
        }
    },
    tooltip: {
        enabled: false,
    },
    colors: [
        function ({ value, w }) {
            if (w?.config?.series?.[0].data?.[2] === value) {
                return '#FF9898'
            } else {
                return '#E5E5E5'
            }
        }
    ]
}
export const UnifiedDSOAPD = ({days,percentile,series,isGood}) => {
    return (
        <>
            <Box sx={{ height: '66px' }} className="flex justify-space-between">
                <div className="flex justify-end flex-column">
                    <div>
                        {days} days
                    </div>
                    <div className="flex align-center">
                        <div>
                            <NorthRoundedIcon sx={{ mt: '6px', color: isGood ? '#1FB563' : '#FF6B6B', rotate: isGood ? '180deg' : '0deg' }} fontSize='20px' />
                        </div>
                        <Box color={isGood ? '#1FB563' : '#FF6B6B'}>
                            {percentile}%
                        </Box>
                    </div>
                </div>
                <div>
                    <Box sx={{ mt: '-50px' }}>
                        <Chart
                            series={series ?? []}
                            height={140}
                            width={200}
                            options={options ?? {}}
                            type="bar"
                        />
                    </Box>
                </div>
            </Box>
        </>
    )
}
