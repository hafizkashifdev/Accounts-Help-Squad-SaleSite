import React from "react";
import { Button, Grid } from "@mui/material";
import "./client-modal/ClientDetails.scss";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { GlobalSearchBar } from "../../../../components/global-search-filter/global-search-filter";
import CustomTable from "../../../../components/Table/CustomTable";

const CLIENTS_DATA = [
  {
    id: 1,
    username: "Ali",
    assined: 32,
    role: "Manager",
  },
  {
    id: 2,
    username: "Hassan",
    assined: 23,
    role: "Manager",
  },
  {
    id: 3,
    username: "Raza",
    assined: 37,
    role: "Admin",
  },
];
function ClientView({ handleClose2 }) {
  const columns = [
    {
      accessorFn: (row) => row.id,
      id: "id",
      cell: (info) => info.getValue(),
      header: () => <span>Id</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.username,
      id: "username",
      cell: (info) => <span>{info.getValue()}</span>,
      header: "User Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.assined,
      id: "assigned",
      cell: (info) => info.getValue(),
      header: "Assigned Clients",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.role,
      id: "role",
      cell: (info) => info.getValue(),
      header: "Role",
      // isSortable: true,
    },
  ];

  return (
    <div>
      <div className="client-view-heading">
        <div className="title-filter">Details</div>
        <div className="icon-filter" onClick={() => handleClose2()}>
          <CancelOutlinedIcon />{" "}
        </div>
      </div>
      <Grid container sx={{ marginTop: "32px" }}>
        <Grid sm={12} md={12} lg={12}>
          <GlobalSearchBar />
        </Grid>
        <br />
        <br />
        <Grid sm={12} md={12} lg={12}>
          <CustomTable
            pageData="clients-view"
            data={CLIENTS_DATA}
            columns={columns}
            showHeaderFilter={false}
            isSuccess={true}
            isPagination={true}
          />
        </Grid>
      </Grid>
      <br/>
      <div
        className="filter-below-btn"
        style={{ display: "flex", position: 'absolute', bottom: '24px', right: '24px'}}
      >
        <Button className="btn1" onClick={()=>handleClose2()}>
          Clear
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Button className="btn2">Apply</Button>
      </div>
    </div>
  );
}

export default ClientView;
