export const formControlData = [
  {
    id: 'dashboard',
    heading: 'Dashboard',
    checked:true,
    switchOptions: [
      {
        id: 'Checkbox1',
        label: 'The tab and view dashboard with all user data',
        value: true
      },
      {
        id: 'Checkbox2',
        label: 'The tab and view dashboard with own user data',
      },
      {
        id: 'Checkbox3',
        label: 'Update dashboard',
      },
    ],
  },
  ///////////////////// Invoices ////////////////////////////////

  {
    id: 'invoices',
    heading: 'Invoices',
    switchOptions: [
      {
        id: 'Checkbox1',
        label: 'Column Sorting',
      },
      {
        id: 'Checkbox2',
        label: 'Invoice Details',
      },
      {
        id: 'Checkbox3',
        label: 'View/Download Invoice',
      },
      {
        id: 'Checkbox4',
        label: 'View Overdue Invoices',
      },
      {
        id: 'Checkbox5',
        label: 'Add Note',
      },
      {
        id: 'Checkbox6',
        label: 'Edit Note',
      },
      {
        id: 'Checkbox7',
        label: 'Delete Note',
      },
      {
        id: 'Checkbox8',
        label: 'Compose Email',
      },
      {
        id: 'Checkbox9',
        label: 'View Recent Emails',
      },
    ]
  },
  ///////////////////// Clients ////////////////////////////////

  {
    id: 'clients',
    heading: 'Clients',
    switchOptions: [
      {
        id: 'Checkbox1',
        label: 'Column Sorting'
      },
      {
        id: 'Checkbox2',
        label: 'Export to Excel'
      },
      {
        id: 'Checkbox3',
        label: 'Export to PDF'
      },
      {
        id: 'Checkbox4',
        label: 'Client Details'
      },
      {
        id: '1',
        label: 'Invoices',
        parent:
        {
          childData: [
            {
              id: 'Checkbox1',
              label: 'Export to Excel',
            },
            {
              id: 'Checkbox2',
              label: 'Export to PDF',
            },
            {
              id: 'Checkbox3',
              label: 'Invoice Details',
            },
            {
              id: 'Checkbox4',
              label: 'View/Download Invoice',
            },
            {
              id: 'Checkbox5',
              label: 'View Overdue Invoices',
            },
            {
              id: 'Checkbox6',
              label: 'Add Note',
            },
            {
              id: 'Checkbox7',
              label: 'Edit Note',
            },
            {
              id: 'Checkbox8',
              label: 'Delete Note',
            },
            {
              id: 'Checkbox9',
              label: 'Compose Email',
            },
            {
              id: 'Checkbox10',
              label: 'View Recent Emails',
            },
          ]
        }
      },
      {
        id: '2',
        label: 'Workflow Details',
        parent:
        {
          childData: [
            {
              id: 'Checkbox1',
              label: 'View Workflow',
            },
            {
              id: 'Checkbox1',
              label: 'Change Workflow',
            },
            {
              id: 'Checkbox1',
              label: 'Pause Collection',
            },
            {
              id: 'Checkbox1',
              label: 'Restart Collection',
            },
          ]
        }
      }
    ]
  },
  ///////////////////// Performance Analysis ////////////////////////////////

  {
    id: 'performance_analysis',
    heading: 'Performance Analysis',
    switchOptions: [
      {
        id: '1',
        label: 'Workflow Comparison',
        parent:
        {
          childData: [
            {
              id: 'Checkbox1',
              label: 'Export to Excel',
            },
            {
              id: 'Checkbox2',
              label: 'Export to PDF',
            },
            {
              id: 'Checkbox3',
              label: 'Graph Comparison',
            },
            {
              id: 'Checkbox4',
              label: 'Column Sorting',
            },
          ]
        }
      },
      {
        id: '2',
        label: 'Client Comparsion',
        parent:
        {
          childData: [
            {
              id: 'Checkbox1',
              label: 'Export to Excel',
            },
            {
              id: 'Checkbox2',
              label: 'Export to PDF',
            },
            {
              id: 'Checkbox3',
              label: 'Graph Comparison',
            },
            {
              id: 'Checkbox4',
              label: 'Column Sorting',
            },
          ]
        }
      }
    ]
  },
  ///////////////////// Workflows ////////////////////////////////

  {
    id: 'workflows',
    heading: 'Workflows',
    switchOptions: [
      {
        id: 'Checkbox1',
        label: 'Change Default Workflow',
      },
      {
        id: 'Checkbox2',
        label: 'Add Workflow',
      },
      {
        id: 'Checkbox3',
        label: 'Edit Workflow',
      },
      {
        id: 'Checkbox4',
        label: 'Delete Workflow',
      },
      {
        id: 'Checkbox5',
        label: 'View Workflow',
      },
    ]
  },
  ///////////////////// Notifications ////////////////////////////////

  {
    id: 'notification',
    heading: 'Notification',
    switchOptions: [
      {
        id: 'Checkbox1',
        label: 'Quick Filter',
      },
    ]
  },
  ///////////////////// Reports ////////////////////////////////
  {
    id: 'reports',
    heading: 'Reports',
    switchOptions: [
      {
        id: '1',
        label: 'DSO Report',
        parent:
        {
          childData: [
            {
              id: 'Checkbox1',
              label: 'Export to Excel',
            },
            {
              id: 'Checkbox2',
              label: 'Export to PDF',
            },
          ]
        }
      },
      {
        id: '2',
        label: 'Cashflow Forecasting Report',
        parent:
        {
          childData: [
            {
              id: 'Checkbox1',
              label: 'Export to Excel',
            },
            {
              id: 'Checkbox2',
              label: 'Export to PDF',
            },
          ]
        }
      },
      {
        id: '3',
        label: 'Cash Collection Report',
        parent:
        {
          childData: [
            {
              id: 'Checkbox1',
              label: 'Export to Excel',
            },
            {
              id: 'Checkbox2',
              label: 'Export to PDF',
            },
          ]
        }
      },
      {
        id: '4',
        label: 'Aging Buckets Report',
        parent:
        {
          childData: [
            {
              id: 'Checkbox1',
              label: 'Export to Excel',
            },
            {
              id: 'Checkbox2',
              label: 'Export to PDF',
            },
          ]
        }
      },
      {
        id: '5',
        label: 'Workflows Report',
        parent:
        {
          childData: [
            {
              id: 'Checkbox1',
              label: 'Export to Excel',
            },
            {
              id: 'Checkbox2',
              label: 'Export to PDF',
            },
          ]
        }
      }
    ]
  },

]