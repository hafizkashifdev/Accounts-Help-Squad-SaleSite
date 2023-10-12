import React from 'react'
import { SimpleDialog } from '../../components/modal/simple-dialog'
import { DashboardDateRange } from '../dashboard-date-range/dashboard-date-range'
import { useMUIModal } from '../../hooks/use-mui-modal'
import { Box } from '@mui/material'

export const DashboardResponsiveDR = () => {
    const {handleCloseMUIModal,handleOpenMUIModal,openDialog} = useMUIModal();
    return (
        <>
            <Box >
                <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
                    <DashboardDateRange minWidth= '112px !important' />
                </Box>
                <Box className="  justify-center align-center" onClick={()=>handleOpenMUIModal()} sx={{ display: { sm: 'none', xs: 'flex' },mb:'5px',p:'4px',bgcolor:'#40404D',borderRadius:'4px',border:'.5px solid #40404D' }}>
                    <svg style={{filter: 'brightness(0) invert(1)'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.29339 15.1004C6.97339 15.1004 6.66006 15.0204 6.36672 14.8604C5.78006 14.5337 5.42672 13.9404 5.42672 13.2737V9.74039C5.42672 9.40706 5.20672 8.90706 5.00006 8.65372L2.50672 6.01372C2.08672 5.59372 1.76672 4.87372 1.76672 4.33372V2.80039C1.76672 1.73372 2.57339 0.900391 3.60006 0.900391H12.4001C13.4134 0.900391 14.2334 1.72039 14.2334 2.73372V4.20039C14.2334 4.90039 13.8134 5.69372 13.4201 6.08706L10.5334 8.64039C10.2534 8.87372 10.0334 9.38706 10.0334 9.80039V12.6671C10.0334 13.2604 9.66006 13.9471 9.19339 14.2271L8.27339 14.8204C7.97339 15.0071 7.63339 15.1004 7.29339 15.1004ZM3.60006 1.90039C3.13339 1.90039 2.76672 2.29372 2.76672 2.80039V4.33372C2.76672 4.58039 2.96672 5.06039 3.22006 5.31372L5.76006 7.98706C6.10006 8.40706 6.43339 9.10706 6.43339 9.73372V13.2671C6.43339 13.7004 6.73339 13.9137 6.86006 13.9804C7.14006 14.1337 7.48006 14.1337 7.74006 13.9737L8.66672 13.3804C8.85339 13.2671 9.04006 12.9071 9.04006 12.6671V9.80039C9.04006 9.08706 9.38672 8.30039 9.88672 7.88039L12.7401 5.35372C12.9667 5.12706 13.2401 4.58706 13.2401 4.19372V2.73372C13.2401 2.27372 12.8667 1.90039 12.4067 1.90039H3.60006Z" fill="#40404D" />
                        <path d="M3.99995 7.16749C3.90661 7.16749 3.81995 7.14083 3.73328 7.09416C3.49995 6.94749 3.42661 6.63416 3.57328 6.40083L6.85995 1.13416C7.00661 0.900827 7.31328 0.827493 7.54661 0.97416C7.77995 1.12083 7.85328 1.42749 7.70661 1.66083L4.41995 6.92749C4.32661 7.08083 4.16661 7.16749 3.99995 7.16749Z" fill="#40404D" />
                    </svg>
                </Box>
            </Box>
            <SimpleDialog title={"Date Range:"} handleClose={handleCloseMUIModal} open={openDialog}>
                <DashboardDateRange minWidth= '112px !important'  />
            </SimpleDialog>
        </>
    )
}
