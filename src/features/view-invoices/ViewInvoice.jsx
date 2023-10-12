import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import './ViewInvoice.scss';
import { SimpleDialog } from '../../components/modal/simple-dialog';

const invoice_data = [
  {
    activity: 'HCA Weekday Night (Excelcare Homes)',
    description: 'HCA Weekday Night (Excelcare Homes)',
    qty: 88,
    rate: 15.00,
    amount: 1320.00,
  },
  {
    activity: 'HCA Weekday Night (Excelcare Homes)',
    description: 'HCA Weekday Night (Excelcare Homes)',
    qty: 88,
    rate: 15.00,
    amount: 1320.00,
  },
  {
    activity: 'HCA Weekday Night (Excelcare Homes)',
    description: 'HCA Weekday Night (Excelcare Homes)',
    qty: 88,
    rate: 15.00,
    amount: 1320.00,
  },
  {
    activity: 'HCA Weekday Night (Excelcare Homes)',
    description: 'HCA Weekday Night (Excelcare Homes)',
    qty: 88,
    rate: 15.00,
    amount: 1320.00,
  },
]

function ViewInvoice({ open, handleClose }) {

  return (
    <>
      <SimpleDialog handleClose={handleClose} paperSx={{ maxWidth: '840px' }} open={open}  >
        <Box className="modal-body font-family-Exo">
          <Box className="model-header">
            <Box className="left-section">
              <Typography variant={"h5"}>ORCALO HOLDINGS LTD</Typography>
              <Typography>Uxbridge</Typography>
              <Typography>UB11 1FW</Typography>
              <Typography>accounts@ceative.co.uk</Typography>
              <Typography>Company Registration No #12345</Typography>
            </Box>
            <Box className="right-section">
              <img style={{ width: '100px', height: '100px' }} src='/logo192.png' alt="react logo" />
              <Button className='font-family-Exo text-transform-capitalize' startIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 11.832C5.93333 11.832 5.87333 11.8187 5.80667 11.792C5.62 11.7187 5.5 11.532 5.5 11.332V7.33203C5.5 7.0587 5.72667 6.83203 6 6.83203C6.27333 6.83203 6.5 7.0587 6.5 7.33203V10.1254L6.98 9.64536C7.17333 9.45203 7.49333 9.45203 7.68667 9.64536C7.88 9.8387 7.88 10.1587 7.68667 10.352L6.35333 11.6854C6.26 11.7787 6.12667 11.832 6 11.832Z" fill="white" />
                <path d="M5.99988 11.8317C5.87321 11.8317 5.74655 11.785 5.64655 11.685L4.31321 10.3517C4.11988 10.1583 4.11988 9.83833 4.31321 9.645C4.50655 9.45167 4.82655 9.45167 5.01988 9.645L6.35321 10.9783C6.54655 11.1717 6.54655 11.4917 6.35321 11.685C6.25321 11.785 6.12655 11.8317 5.99988 11.8317Z" fill="white" />
                <path d="M9.99992 15.1654H5.99992C2.37992 15.1654 0.833252 13.6187 0.833252 9.9987V5.9987C0.833252 2.3787 2.37992 0.832031 5.99992 0.832031H9.33325C9.60659 0.832031 9.83325 1.0587 9.83325 1.33203C9.83325 1.60536 9.60659 1.83203 9.33325 1.83203H5.99992C2.92659 1.83203 1.83325 2.92536 1.83325 5.9987V9.9987C1.83325 13.072 2.92659 14.1654 5.99992 14.1654H9.99992C13.0733 14.1654 14.1666 13.072 14.1666 9.9987V6.66536C14.1666 6.39203 14.3933 6.16536 14.6666 6.16536C14.9399 6.16536 15.1666 6.39203 15.1666 6.66536V9.9987C15.1666 13.6187 13.6199 15.1654 9.99992 15.1654Z" fill="white" />
                <path d="M14.6666 7.16829H11.9999C9.71992 7.16829 8.83325 6.28162 8.83325 4.00162V1.33495C8.83325 1.13495 8.95325 0.948287 9.13992 0.874953C9.32659 0.794953 9.53992 0.84162 9.68659 0.98162L15.0199 6.31495C15.1599 6.45495 15.2066 6.67495 15.1266 6.86162C15.0466 7.04829 14.8666 7.16829 14.6666 7.16829ZM9.83325 2.54162V4.00162C9.83325 5.72162 10.2799 6.16829 11.9999 6.16829H13.4599L9.83325 2.54162Z" fill="#777777" />
              </svg>} style={{ width: '70%' }}>Download</Button>
            </Box>
          </Box>
          <Typography variant="h4">INVOICE</Typography>
          <Box className="model-mid">
            <Box className="left-section">
              <Box className="box-to">
                <Typography variant="h6">INVOICE TO</Typography>
                <Typography>FilzWilliam House, 89 Rooks St, Cottenham</Typography>
                <Typography>Cambridge</Typography>
                <Typography>CB24 Z</Typography>
              </Box>
              <Box className="two-parent">
                <Box className="box-to">
                  <Typography variant="h6">Time Period</Typography>
                  <Typography>27-2-3203 to 27-2-3203 </Typography>
                </Box>
                <Box className="box-to">
                  <Typography variant="h6">MONTH WEEK</Typography>
                  <Typography> Week - 39 </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="right-section">
              <Box className="box-2">
                <Typography variant="h6">Invoice</Typography>
                <Typography>1140</Typography>
              </Box>
              <Box className="box-2">
                <Typography variant="h6">Date</Typography>
                <Typography>27/12/2023</Typography>
              </Box>
              <Box className="box-2">
                <Typography variant="h6">Terms</Typography>
                <Typography>Net 30</Typography>
              </Box>
              <Box className="box-2">
                <Typography variant="h6">Due Date</Typography>
                <Typography>27/12/2023</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="model-table">
            <TableContainer>
              <Table className="font-family-Exo" sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="font-family-Exo">
                    <TableCell className="font-family-Exo">Activity</TableCell>
                    <TableCell className="font-family-Exo">description</TableCell>
                    <TableCell align="right" className="font-family-Exo">qty</TableCell>
                    <TableCell align="right" className="font-family-Exo">rate</TableCell>
                    <TableCell align="right" className="font-family-Exo">amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    invoice_data?.map((value, index) => (
                      <TableRow className="font-family-Exo" key={index}>
                        <TableCell className="font-family-Exo">{value?.activity}</TableCell>
                        <TableCell className="font-family-Exo">{value?.description}</TableCell>
                        <TableCell className="font-family-Exo" align="right">{value?.qty}</TableCell>
                        <TableCell className="font-family-Exo" align="right">{value?.rate}</TableCell>
                        <TableCell className="font-family-Exo" align="right">{value?.amount}</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box className="model-calculation">
            <Box className="box-3">
              <Typography variant="h5">PAYMENT</Typography>
              <Typography>2,112.00</Typography>
            </Box>
            <Box className="box-3">
              <Typography variant="h5">BALANCE DUE</Typography>
              <Box>
                <Typography>$12312</Typography>
                <Typography variant="h6">PAID</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="model-payment-instruction">
            <Typography variant="h5" className='payment-info-title'>Payment Information</Typography>
            <br />
            <Box className="box-4">
              <Typography variant="h4">Account Name: </Typography>
              <Typography>ORCALO HOLDING Ltd</Typography>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">Account No: </Typography>
              <Box>
                <Typography>46205129</Typography>
              </Box>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">Sort Code: </Typography>
              <Box>
                <Typography>23-14-70</Typography>
              </Box>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">IBAN No: </Typography>
              <Box>
                <Typography>GB33 TRWI 2314 7046 2051 69</Typography>
              </Box>
            </Box>
            <Box className="box-4">
              <Typography variant="h4">Wises Bank Address: </Typography>
              <Box>
                <Typography>56 Shoreditch High Street, London E1 6JJ, United Kingdom</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </SimpleDialog>
    </>
  )
}

export default ViewInvoice