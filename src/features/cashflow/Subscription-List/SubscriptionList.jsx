import React, { useState } from 'react'
import CustomTable from '../../../components/Table/CustomTable'
import { SUB_INVOICE_DATA } from './sbscription-table-data'
import { sub_columns } from './sbscription-table-data'
import './sub-invoice.scss';
import PayNowCard from '../../../components/pay-now/PayNowCard';


export default function SubscriptionList() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const tableData = sub_columns(handleOpen)
  return (
    <React.Fragment>
      <div className="subscription-title">Subscription Invoices</div>
      <br />
      <br />
      {/* Table */}
      <CustomTable
        data={SUB_INVOICE_DATA}
        columns={tableData}
        isSuccess={true}
        isPagination={false}
        showHeaderFilter={false}
      />
      <PayNowCard
        open={open}
        onClose={handleClose}
      />
      
    </React.Fragment>
  )
}
