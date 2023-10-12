import React from 'react'
import {  Box } from '@mui/material';
import { RolesRightsTable } from './components/roles-and-right/roles-and-right'
import { ClientsTable } from './components/clients/clients'
import { UsersTable } from './components/users/users'
import { UserAccessTable } from './components/user-access-control/user-access-control'
import Manager from './components/role_rights_manager/Manager';
import './user-management.scss'
import { CustomTabs } from '../../components/custom-tabs/custom-tabs';

const tabsData = [
  {
    id: 0,
    name: 'Role & Rights',
    component: <RolesRightsTable />
  },
  {
    id: 1,
    name: 'User Access Control',
    component: <UserAccessTable />
  },
  {
    id: 2,
    name: 'Users',
    component: <UsersTable />
  },
  {
    id: 3,
    name: 'Clients',
    component: <ClientsTable />
  },
]

const UserManagement = () => {
  const [managerData, setManagerData] = React.useState(true);

  return (
    <>
      {
        managerData ? <div className="container">
          <p className='font-family-exo2 heading-20 font-weight-600'>User Management</p>
          <Box sx={{ width: '100%' }}>
            <Box sx={{
              marginTop: 5
            }}>
              <CustomTabs tabsData={tabsData} />
            </Box>
          </Box>
        </div> :
          <Manager />
      }
    </>
  );
}

export default UserManagement