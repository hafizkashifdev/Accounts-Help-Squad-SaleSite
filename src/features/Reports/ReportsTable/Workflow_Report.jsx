import { Link } from "react-router-dom";
import SrIcon from '../../../assests/images/client/sricon.png'
import TableAction from "../../../components/Table/TableAction";
import { Box} from "@mui/material";

export const WORKFLOW_REPORT_DATA = [
  {
    id: 1,
    workflow_Id: "01",
    workflow_name: "Test",
    created_by: "Alice",
    no_assigned_clients: "2",
    overdue_days: "12",
  },
  {
    id: 2,
    workflow_Id: "02",
    workflow_name: "Test",
    created_by: "Alice",
    no_assigned_clients: "33",
    overdue_days: "12",
  },
  {
    id: 3,
    workflow_Id: "03",
    workflow_name: "Test",
    created_by: "Alice",
    no_assigned_clients: "33",
    overdue_days: "12",
  },
];

export const WORKFLOW_REPORT_COL = [
    {
      accessorFn: (row) => row.workflow_Id,
      id: "workflow_Id",
      cell: (info) => info.getValue(),
      header: () => <span>Workflow Id <img src={SrIcon} alt="Workflow Id" /></span>
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.workflow_name,
      id: "workflow_name",
      cell: (info) => info.getValue(),
      header: "Workflow Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.created_by,
      id: "created_by",
      cell: (info) => info.getValue(),
      header: "Created By",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.no_assigned_clients,
      id: "no_assigned_clients",
      cell: (info) => info.getValue(),
      header: "No of Assigned Clients",
      // isSortable: true,
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
         <Link to="/reports/workflows-report/workflow-detail"> <TableAction type="view" /> </Link>
        </Box>
      ),
      header: () => <span className='flex justify-center width-100'>Actions</span>,
      // isSortable: false,
    },
  ];