

export const Forecasting_Report_Col = [
  {
    accessorFn: (row) => row.Bill_Id,
    id: "Bill_Id",
    cell: (info) => info.getValue(),
    header: () => <span>Bill Id</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.Vendors_Name,
    id: "Vendors_Name",
    cell: (info) => (info.getValue()),
    header: "Vendors Name",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.Bill_Amount,
    id: "Bill_Amount",
    cell: (info) => info.getValue(),
    header: "Bill Amount",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.Created_On,
    id: "Created_On",
    cell: (info) => info.getValue(),
    header: "Created On",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.Due_Date,
    id: "Due_Date",
    
    cell: (info) => info.getValue(),
    header: "Due Date",
    
    // isSortable: true,
  },

  
 
  
 


];



export const Forecasting_Report_Data = [
  {
    id: 1,
    Bill_Id: '01',
    Vendors_Name: 'John Doe',
    Bill_Amount: '1000',
    Created_On: '25/10/22',
    Due_Date: '25/10/22',
    
  },
  {
    id: 2,
    Bill_Id: '02',
    Vendors_Name: 'Care Library',
    Bill_Amount: '1000',
    Created_On: '25/10/22',
    Due_Date: '25/10/22',},
  {
    id: 3,
    Bill_Id: '03',
    Vendors_Name: 'John Doe',
    Bill_Amount: '1000',
    Created_On: '25/10/22',
    Due_Date: '25/10/22',
  
  },
]