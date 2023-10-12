import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Card, Box, FormControlLabel, Switch, Grid, Select, Typography } from "@mui/material";
import CustomTable from "../../../../components/Table/CustomTable";
import { styled } from '@mui/material/styles';
import { useTableParams } from "../../../../components/Table/useTableParams";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { USER_ACCESS_DATA } from ".";
import { useUserAccess } from "./use-user-access-control";
import { Status } from '../../../../components/status/status';
import { GlobalSearchBar } from '../../../../components/global-search-filter/global-search-filter';
import CustomInput from '../../../../components/CustomInput';
import { ReactComponent as Down } from "../../../../assests/svg/chev-bottom.svg";

export const UserAccessTable = () => {
  const {
    userData,
    tableData,
    updateStatus
  } = useUserAccess();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = tableData.filter((data) =>
    Object.values(data).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      border: "1px solid #E1E1E6",
      opacity: 1,
      backgroundColor: "black" ? "white" : "#E1E1E6",
      boxSizing: "border-box",
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      backgroundColor: "#40404D",
      border: "3px solid #40404D",
      width: 16,
      height: 16,
      margin: 2,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      backgroundColor: "transparent",
      color: '#40404D'
    },

    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: "#E1E1E6",
    },
  }));
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columns = [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => info.getValue(),
      header: () => <span>Id</span>,
    },
    {
      accessorFn: (row) => row.userName,
      id: "userName",
      cell: (info) => info.getValue(),
      header: "User Name",
    },
    {
      accessorFn: (row) => row.role,
      id: "role",
      cell: (info) => info.getValue(),
      header: "Role",
    },
    {
      accessorFn: (row) => row.createdOn,
      id: "createdOn",
      cell: (info) => dayjs(info.getValue()).format("DD MMM, YYYY"),
      header: "Created On",
    },
    {
      accessorFn: (row) =>
        row.status ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', }}>
            <Typography
              fontFamily='Exo 2'
            >
              <Status
                title={row.status}
                color={
                  row.status === 'Active' ? '#065F46' : row.status === 'Inactive' ? '#FF624E' : '-'
                }
                bgColor={
                  row.status === 'Active'
                    ? 'rgba(209, 250, 229, 1)'
                    : row.status === 'Inactive'
                      ? 'rgba(255, 98, 78, 0.12)'
                      : '-'
                }
              />
            </Typography>
          </Box>
        ) : (
          '-'
        ),
      id: "status",
      cell: (info) => info.getValue(),
      header: ()=> <span className='flex justify-center width-100'>Status</span>,
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <FormControlLabel
            control={
              <Android12Switch
                value={info.cell.row.original.status}
                checked={info.cell.row.original.status === 'Active'}
                onChange={(e) => updateStatus(e, info.cell.row.original.id)}
              />
            }
          />
        </Box>
      ),
      header: () => <span className='flex justify-center width-100'>Actions</span>,
      isSortable: false,
    },
  ];
  const isFocused = false;
  return (
    <>
        <Grid container sx={{ justifyContent: 'space-between', mb: '15px' }}>
          <Grid item xs={5} lg={6} >
            <GlobalSearchBar
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid item xs={5} lg={2.5}>
            <Select
              sx={{
                height: '100%',
                '&:before': {
                  borderColor: '#C4C4CC',
                },
                '&:after': {
                  borderColor: '#C4C4CC',
                },
                '& .MuiSelect-select':{
                  padding:'10px'
                }
              }}
              defaultValue="Role"
              placeholder='Role'
              fullWidth
              variant="standard"
              IconComponent={Down}
            >
              <MenuItem disabled value='Role'>
                Role
              </MenuItem>
              <MenuItem value='Assigned'>
                Assigned
              </MenuItem>
              <MenuItem value='Unassigned'>
                Unassigned
              </MenuItem>
            </Select>
          </Grid>
        </Grid>
        <CustomTable
          data={userData}
          columns={columns}
          showHeaderFilter={false}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
        />
    </>
  );
};
