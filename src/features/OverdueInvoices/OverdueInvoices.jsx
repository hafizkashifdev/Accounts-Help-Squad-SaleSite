import React, { useState } from 'react'
import { GlobalSearchBar } from '../../components/global-search-filter/global-search-filter';
import { Button, Grid } from '@mui/material';
import CustomTable from '../../components/Table/CustomTable';
import filterIcon from "../../assests/images/client/filter.png";
import exportIcon from "../../assests/images/client/export.png";
import './overdue_invoices.scss';
import ShowFilters from './ShowFilters';
import { useParams } from 'react-router-dom';

const INVOICE_DATA = [
    {
      id: 1,
      Id: "01",
      invoiceNo: "2345",
      invoice_status: 'Overdue',
      issue_date: '19 Oct, 2023',
      due_date: '19 Oct, 2023',
      overdue_days: '12',
      total_amount: '£7200'
    },
    {
      id: 2,
      Id: "02",
      invoiceNo: "2345",
      invoice_status: 'Overdue',
      issue_date: "19 Oct, 2023",
      due_date: "19 Oct, 2023",
      overdue_days: '12',
      total_amount: '£7200'
    },
    {
      id: 3,
      Id: "03",
      invoiceNo: "2345",
      invoice_status: 'Overdue',
      issue_date: "19 Oct, 2023",
      due_date: "19 Oct, 2023",
      overdue_days: '12',
      total_amount: '£7200'
    },
    {
      id: 4,
      Id: "04",
      invoiceNo: "2345",
      invoice_status: 'Overdue',
      issue_date: "19 Oct, 2023",
      due_date: "19 Oct, 2023",
      overdue_days: '12',
      total_amount: '£7200'
    },
    {
      id: 5,
      Id: "05",
      invoiceNo: "2345",
      invoice_status: 'Overdue',
      issue_date: "19 Oct, 2023",
      due_date: "19 Oct, 2023",
      overdue_days: '12',
      total_amount: '£7200'
    },
  ];
function OverdueInvoices() {
  const {id} = useParams();
    const columns = [
        {
          accessorFn: (row) => row.Id,
          id: "Id",
          cell: (info) => info.getValue(),
          header: () => <span>{id ? "Bill Id" : "Sr.#"}</span>,
          // isSortable: true,
        },
        {
            accessorFn: (row) => row.invoiceNo,
            id: "invoiceNo",
            cell: (info) => <span style={{color:'#0084AD', textDecoration:'underline'}}>{info.getValue()}</span>,
            header: "Invoice #",
            // isSortable: true,
        },
        {
          accessorFn: (row) => row.invoice_status,
          id: "invoice_status",
          cell: (info) => <span className={info.getValue() === 'Paid' ? 'Paid' : info.getValue() === 'Due' ? 'Due' : 'Overdue'}>{info.getValue()}</span>,
          header: "Status",
          // isSortable: true,
        },
        {
          accessorFn: (row) => row.issue_date,
          id: "issue_date",
          cell: (info) => info.getValue(),
          header: "Issue Date",
          // isSortable: true,
        },
        {
          accessorFn: (row) => row.due_date,
          id: "due_date",
          cell: (info) => info.getValue(),
          header: "Due Date",
          // isSortable: true,
        },
        {
          accessorFn: (row) => row.overdue_days,
          id: "overdue_days",
          cell: (info) => info.getValue(),
          header: "Overdue Days",
          // isSortable: true,
        },
        {
          accessorFn: (row) => row.total_amount,
          id: "total_amount",
          cell: (info) => info.getValue(),
          header: "Total Amount",
          // isSortable: true,
        },
      ];

      const filteredColumns = columns.filter((column) => {
        // Return false for the column you want to hide based on the condition
        return column?.id !== "invoiceNo";
      });
      const [isOpen, setIsOpen] = useState(false);
      const [type, setType] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
     
        <div className="invoice-title">Overdue Invoices</div>
        {/* Search field */}
        <Grid container>
        <Grid xs={12} md={6} lg={6} xl={6}>
          <div
            style={{
              // margin: "5px",
              display: "flex",
              alignItems: "center",
              // marginTop: "10px",
            }}
          >
            <GlobalSearchBar />
          </div>
        </Grid>
        <Grid xs={12} md={6} lg={6} xl={6}>
        <div style={{ marginLeft: "auto", float: 'right' }}>
          {
            !id && (
              <Button
              variant="outlined"
              color="primary"
              sx={{
                mr: 2,
                color: "#40404D",
                borderColor: "#40404D",
                borderRadius:'8px',
                "&:hover": {
                  borderColor: "black",
                  color: "black",
                },
              }}
              endIcon={<img src={filterIcon} alt="More Filter" />}
              onClick={()=> {
                setType("More")
                handleClick()
              }}
            >
              More Filter
            </Button>
            )
          }

          <Button
            variant="contained"
            color="primary"
            sx={{
              background: "#2B2B33",
              borderRadius: '8px',
              "&:hover": {
                background: "#2B2B33",
              },
            }}
            endIcon={<img src={exportIcon} alt="Export Text" />}
            onClick={()=> {
                setType("Export")
                handleClick()
              }}
          >
            Export
          </Button>
          <ShowFilters 
            filter_type = {type}
            handleClick = {handleClick}
            isOpen = {isOpen}
             />
        </div>
        </Grid>
        </Grid>
        
      <br/>
          {/* Table */}

          <CustomTable
            data={INVOICE_DATA}
            columns={id ? filteredColumns : columns}
            showHeaderFilter={false}
            isSuccess={true}
            isPagination={true}
          />
    </React.Fragment>
  )
}

export default OverdueInvoices