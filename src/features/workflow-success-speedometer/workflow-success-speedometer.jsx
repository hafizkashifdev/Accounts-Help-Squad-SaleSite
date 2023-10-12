import { Box } from '@mui/material'
import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import "./workflow-success-speedometer.scss";
export const WorkflowSuccessSpeedometer = () => {
    return (
        <>
            <div className="workflow-speedometer flex justify-center margin-top-2">
                <Box className="position-relative circle-parent" sx={{ width: { sm: '534px', xs: '320px' }, height: { sm: '280px', xs: '180px' } }}>
                    <div className="circle"></div>
                    <ReactSpeedometer
                        value={75}
                        maxSegmentLabels={4}
                        segments={1000}
                        minValue={0}
                        currentValueText=""
                        maxValue={100}
                        needleColor="#C4C4CC"
                        fluidWidth
                        needleHeightRatio={0.7}
                        ringWidth={27}
                        needleTransition="easeElastic"
                        needleTransitionDuration={3333}
                    />
                </Box>
            </div>
        </>
    )
}
