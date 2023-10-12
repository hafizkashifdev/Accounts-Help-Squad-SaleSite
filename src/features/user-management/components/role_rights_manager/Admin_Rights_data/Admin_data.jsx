export const FormControlData2 = [
    {
        id: 'userManagement',
        heading: 'User management',
        switchOptions: [
          {
            id: '1',
            label: 'Roles and Rights',
            parent: {
              childData: [
                {
                  id: 'Checkbox1_1',
                  label: 'Add Role',
                },
                {
                  id: 'Checkbox1_2',
                  label: 'Edit Role',
                },
                {
                  id: 'Checkbox1_3',
                  label: 'Delete Role',
                },
                {
                  id: 'Checkbox1_4',
                  label: 'Assign Rights',
                },
              ],
            },
          },
          {
            id: '2',
            label: 'User Access Control',
            parent: {
              childData: [
                {
                  id: 'Checkbox2_1',
                  label: 'Activate User',
                },
                {
                  id: 'Checkbox2_2',
                  label: 'Deactivate User',
                },
              ],
            },
          },
          {
            id: '3',
            label: 'Users',
            parent: {
              childData: [
                {
                  id: 'Checkbox3_1',
                  label: 'Add User',
                },
                {
                  id: 'Checkbox3_2',
                  label: 'Edit User',
                },
                {
                  id: 'Checkbox3_3',
                  label: 'Delete User',
                },
              ],
            },
          },
          {
            id: '4',
            label: 'Clients',
            parent: {
              childData: [
                {
                  id: 'Checkbox4_1',
                  label: 'Assign Clients',
                },
                {
                  id: 'Checkbox4_2',
                  label: 'Un-assign Clients',
                },
              ],
            },
          },
        ],
      },
    
        
      {
        id: 'settings',
        heading: 'Settings',
        switchOptions: [
          {
            id: 'Checkbox1',
            label: 'Edit Personal Profile',
          },
          {
            id: 'Checkbox2',
            label: 'Edit Company Management',
          },
          {
            id: 'Checkbox3',
            label: 'Integration',
          },
        ],
      },
    ];