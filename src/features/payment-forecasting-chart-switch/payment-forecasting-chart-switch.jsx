import { Box } from '@mui/material'
import React from 'react'

export const PaymentForecastingChartSwitch = ({chartSwitch,setSwitch,data=['This Month', 'This Week']}) => {
    return (
        <>
            <div className="flex">
                {
                    data.map(item => <Box sx={{fontSize:{sm:'12px',xs:'10px'}}} key={item} onClick={()=>setSwitch(item)} className={`flex align-center margin-right-0 cursor-pointer ${item === chartSwitch ? 'tertiary-color font-weight-700' :'secondary-color font-weight-400'}`}>
                            {item}
                    </Box>)}
            </div>
        </>
    )
}  
