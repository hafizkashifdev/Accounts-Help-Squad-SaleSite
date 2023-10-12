import TableAction from "../../components/Table/TableAction";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import LinkNewCard from './LinkNewCard/LinkNewCard';
  
export const SUBSCRIPTION_INVO_Col = [
  {
    accessorFn: (row) => row.name,
    id: "Invoice",
    cell: (info) => info.getValue(),
    header: "Invoice #",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.next_due,
    id: "Invoice_Title",
    cell: (info) => info.getValue(),
    header: "Invoice Title",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.pending_amount,
    id: "Issue_Date",
    cell: (info) => info.getValue(),
    header: "Issue Date",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.paid_amount,
    id: "Invoice_Amount",
    cell: (info) => info.getValue(),
    header: "Invoice_Amount",
    // isSortable: true,
  },
 
  // {
  //     id: "Actions",
  //     cell: (info) => (
  //          <Box sx={{ display: "flex", justifyContent: "left-center" ,}}>
          
  //           <Link to='/vendors/vendor-action'>
  //         <TableAction type="view"
  //          onClick={console.log()}
  //           />
  //           </Link>
  //           </Box>
          
  //     ),
  //     header: () => <span>Actions</span>,
  //     isSortable: false,
  // },
];
export  const SUBSCRIPTION_INVO_DATA= [
        {
            Invoice: "01",
            Invoice_Title: "John Doe",
            Issue_Date: "13/06/2020",
            Invoice_Amount: "123456",
            
          },
          {
            Invoice: "01",
            Invoice_Title: "John Doe",
            Issue_Date: "13/06/2020",
            Invoice_Amount: "123456",
          },
          {
            Invoice: "01",
            Invoice_Title: "John Doe",
            Issue_Date: "13/06/2020",
            Invoice_Amount: "123456",
          },
    ];
    