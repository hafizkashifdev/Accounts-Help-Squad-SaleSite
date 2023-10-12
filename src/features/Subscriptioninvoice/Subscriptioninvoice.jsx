import React, { Fragment, useState } from "react";
import CustomTable from "..//../components/Table/CustomTable";
import { SUBSCRIPTION_INVO_DATA, SUBSCRIPTION_INVO_Col } from "./SubscriptioninvoiceData";
import { useNavigate } from "react-router-dom";
// import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Typography } from "@mui/material";
import LinkNewCard from './LinkNewCard/LinkNewCard';
// import VatDueDate from "../../pages/VatDueDate";
// import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
function handleClose() {
    // Function logic here
  }
export default function Vendors() {

    // const navigate = useNavigate();

    // const handleAddVendor = () => {
    //     navigate('/vendors/add-vendor')
    // }

    return (
        <React.Fragment>
            <div>
                <Typography className="font-weight-600 heading-20 font-family-Exo margin-top-2">Subscription Invoice</Typography>
            <Grid container className="justify-space-between margin-top-3">   
            </Grid>
            <br />
            {/* Table */}

            <CustomTable
                data={ SUBSCRIPTION_INVO_DATA}
                showHeaderFilter={false}
                columns={SUBSCRIPTION_INVO_Col}
                isSuccess={true}
                isPagination={true}
            />
            </div>
            <Button onClick={handleClose}>
          <span>
            <LinkNewCard />
          </span>
          
        </Button>
        {/* <Button onClick={handleClose}>
          <span>
            <VatDueDate />
          </span> */}
          
        {/* </Button> */}
        </React.Fragment>
    );
}
