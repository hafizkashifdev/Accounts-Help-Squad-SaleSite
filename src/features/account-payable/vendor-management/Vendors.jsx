import React, { Fragment, useState } from "react";
import CustomTable from "../../../components/Table/CustomTable";
import { Vendors_Data, Vendors_Col } from "./VendorsData";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Typography } from "@mui/material";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";

export default function Vendors() {

    const navigate = useNavigate();

    const handleAddVendor = () => {
        navigate('/vendors/add-vendor')
    }

    return (
        <React.Fragment>
            <div>
                <Typography className="font-weight-600 heading-20 font-family-Exo margin-top-2">Vendors</Typography>
            <Grid container className="justify-space-between margin-top-3">
            <GlobalSearchBar />
                <Button 
                onClick={handleAddVendor}
                sx={{
                    background: '#2B2B33',
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: `'Exo 2', "Roboto" "sans-serif"`,
                    borderRadius: '8px',
                    gap:'10px',
                    px: "16px",
                    py: "10px",
                    color: "#fff",
                    textTransform: 'capitalize',
                    '&:hover': {
                        background: '#2B2B33',
                    },
                    "@media (max-width: 600px)": {
                        mt: "8px",
                      },
                }}
                endIcon={<AddIcon fontSize="medium" sx={{color:'white'}}/>}
                >
                        Add Vendor
                </Button>
            </Grid>
            <br />
            {/* Table */}

            <CustomTable
                data={Vendors_Data}
                showHeaderFilter={false}
                columns={Vendors_Col}
                isSuccess={true}
                isPagination={true}
            />
            </div>
        </React.Fragment>
    );
}
