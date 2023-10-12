import { Link } from "react-router-dom";

const activeStyle = {
  color: '#48995D',
  background: '#D3E7D8',
  padding: '10px',
  borderRadius: '12px',
}
const pauseStyle = {
  color: '#FF3F3F',
  background: '#FFD1D1',
  padding: '10px',
  borderRadius: '12px',
}
export const list_col = [
  {
    accessorFn: (row) => row.id,
    id: "id",
    cell: (info) =>(
      <span style={{ color: "#0084AD", textDecoration: "underline", cursor: 'pointer' }}>
        <Link to={`/clients-details/${info.getValue()}`}>{info.getValue()}</Link>
      </span>
    ),
    header: () => <span>Id</span>,
    isSortable: true,
  },
  {
    accessorFn: (row) => row.client,
    id: "client",
    cell: (info) => info.getValue(),
    header: () => <span>Client</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.email,
    id: "email",
    cell: (info) => info.getValue(),
    header: () => <span>Email</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.total_invoices,
    id: "total_invoices",
    cell: (info) => info.getValue(),
    header: () => <span>Total Invoices</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.due_invoices,
    id: "due_invoices",
    cell: (info) => info.getValue(),
    header: () => <span>Due Invoices</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.due_amount,
    id: "due_amount",
    cell: (info) => info.getValue(),
    header: () => <span>Due Amount</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.overdue_invoices,
    id: "overdue_invoices",
    cell: (info) => info.getValue(),
    header: () => <span>Overdue Invoices</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.overdue_amount,
    id: "overdue_amount",
    cell: (info) => info.getValue(),
    header: () => <span>Overdue Amount</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.overdue_invoices_less,
    id: "overdue_invoices_less",
    cell: (info) => info.getValue(),
    header: () => <span>Overdue Invoices({'<'}30d)</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.overdue_amount_less,
    id: "overdue_amount_less",
    cell: (info) => info.getValue(),
    header: () => <span>Overdue Amount({'<'}30d)</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.overdue_invoices_range,
    id: "overdue_invoices_range",
    cell: (info) => info.getValue(),
    header: () => <span>Overdue Invoices(30-60d)</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.overdue_amount_range,
    id: "overdue_amount_range",
    cell: (info) => info.getValue(),
    header: () => <span>Overdue Amount(30-60d)</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.overdue_invoices_range2,
    id: "overdue_invoices_range2",
    cell: (info) => info.getValue(),
    header: () => <span>Overdue Invoices(61-90d)</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.overdue_amount_range2,
    id: "overdue_amount_range2",
    cell: (info) => info.getValue(),
    header: () => <span>Overdue Amount(61-90d)</span>,
    // isSortable: true,
  },
  
  {
    accessorFn: (row) => row.overdue_invoices_greater,
    id: "overdue_invoices_greater",
    cell: (info) => info.getValue(),
    header: () => <span>Overdue Invoices({'>'}90d)</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.overdue_amount_greater,
    id: "overdue_amount_greater",
    cell: (info) => info.getValue(),
    header: () => <span>Overdue Amount({'>'}90d)</span>,
    // isSortable: true,
  },
  
  {
    accessorFn: (row) => row.avg_pay,
    id: "avg_pay",
    cell: (info) => info.getValue(),
    header: () => <span>Avg Payment Delay(d)</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.workflow,
    id: "workflow",
    cell: (info) => info.getValue(),
    header: () => <span>Workflow Name</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.workflow_status,
    id: "workflow_status",
    cell: (info) => <span style={info.getValue() == 'Active' ? activeStyle : pauseStyle}>{info.getValue()}</span>,
    header: () => <span>Workflow Status</span>,
    // isSortable: true,
  },
];

export const list_data = [
  {
    id: '1234',
    client: 'Jacob',
    email: 'xyz@gmail.com',
    total_invoices: '300',
    due_invoices: '44',
    due_amount: '$1234',
    overdue_invoices: '33',
    overdue_amount: '$1245',
    overdue_invoices_less: '20',
    overdue_amount_less: '$1245',

    overdue_invoices_range: '60',
    overdue_amount_range: '$1245',

    overdue_invoices_range2: '60',
    overdue_amount_range2: '$1245',

    overdue_invoices_greater: '90',
    overdue_amount_greater: '$1245',

    avg_pay: '60',
    workflow: 'Test',
    workflow_status: 'Active',
  },
  {
    id: '1234',
    client: 'Bills',
    email: 'xyz@gmail.com',
    total_invoices: '300',
    due_invoices: '44',
    due_amount: '$1234',
    overdue_invoices: '33',
    overdue_amount: '$1245',
    overdue_invoices_less: '20',
    overdue_amount_less: '$1245',

    overdue_invoices_range: '60',
    overdue_amount_range: '$1245',

    overdue_invoices_range2: '60',
    overdue_amount_range2: '$1245',

    overdue_invoices_greater: '90',
    overdue_amount_greater: '$1245',

    avg_pay: '60',
    workflow: 'Test',
    workflow_status: 'Pause',
  },
  {
    id: '1234',
    client: 'John',
    email: 'xyz@gmail.com',
    total_invoices: '300',
    due_invoices: '44',
    due_amount: '$1234',
    overdue_invoices: '33',
    overdue_amount: '$1245',
    overdue_invoices_less: '20',
    overdue_amount_less: '$1245',

    overdue_invoices_range: '60',
    overdue_amount_range: '$1245',

    overdue_invoices_range2: '60',
    overdue_amount_range2: '$1245',

    overdue_invoices_greater: '90',
    overdue_amount_greater: '$1245',

    avg_pay: '60',
    workflow: 'Test',
    workflow_status: 'Pause',
  },
];
