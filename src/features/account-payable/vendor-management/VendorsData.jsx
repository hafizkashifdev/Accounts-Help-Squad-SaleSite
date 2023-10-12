import TableAction from "../../../components/Table/TableAction";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

// const navigate = useNavigate();
// const handleView = () => {
//     navigate("/vendor-action");
// };

export const Vendors_Col = [
  {
    accessorFn: (row) => row.name,
    id: "name",
    cell: (info) => info.getValue(),
    header: "Name",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.next_due,
    id: "next_due",
    cell: (info) => info.getValue(),
    header: "Next Due",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.pending_amount,
    id: "pending_amount",
    cell: (info) => info.getValue(),
    header: "Pending Amount",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.paid_amount,
    id: "paid_amount",
    cell: (info) => info.getValue(),
    header: "Paid Amount",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.payment_method,
    id: "payment_method",
    cell: (info) => info.getValue(),
    header: "Payment Method",
    // isSortable: true,
  },
  {
      id: "Actions",
      cell: (info) => (
           <Box className="center-text">
          
            <Link to='/vendors/vendor-action'>
          <TableAction type="view"
           onClick={console.log()}
            />
            </Link>
            </Box>
          
      ),
      header: () => <div className="flex justify-center width-100">Actions</div>,
      isSortable: false,
  },
];

export const Vendors_Data = [
  {
    id: 1,
    name: "AA Traders",
    next_due: "19 Oct, 1999",
    pending_amount: "John Doe",
    paid_amount: "Doe",
    payment_method: "19 Oct, 1999",
  },
  {
    id: 2,
    name: "Berghotel Grosse Scheidegg",
    next_due: "19 Oct, 1999",
    pending_amount: "John Doe",
    paid_amount: "Doe",
    payment_method: "19 Oct, 1999",
  },
  {
    id: 3,
    name: "East Repair lnc.",
    next_due: "19 Oct, 1999",
    pending_amount: "John Doe",
    paid_amount: "Doe",
    payment_method: "19 Oct, 1999",
  },
  {
    id: 4,
    name: "Oasis Global System Limited",
    next_due: "19 Oct, 1999",
    pending_amount: "John Doe",
    paid_amount: "Doe",
    payment_method: "19 Oct, 1999",
  },
];
