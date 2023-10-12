import { Box } from '@mui/material'
import React, { useState } from 'react'
import ViewInvoice from '../view-invoices/ViewInvoice'

export const CashCollectionReportInvoiceModal = ({ id }) => {
    const [openInvoiceModal, setOpenInvoiceModal] = useState(false)
    return (
        <>
            <Box className="blue-color cursor-pointer" onClick={()=>setOpenInvoiceModal(true)}>
                {id}
            </Box>
            <ViewInvoice open={openInvoiceModal} handleClose={()=> setOpenInvoiceModal(false)} />
        </>
    )
}
