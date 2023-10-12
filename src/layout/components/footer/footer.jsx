import React from 'react';

import { Grid } from '@mui/material';

export const Footer = () => {
    return (
        <>
            <Grid component="footer" spacing={{ lg: 2, xs: 1 }} sx={{ backgroundColor: '#FFFAFC', fontSize: { lg: "14px", xs: "9px" }, pl: { lg: '20px !important', xs: '0px' }, position: 'fixed', bottom: 0, pb: { lg: '10px', xs: '0px' }, zIndex: '1400' }} justifyContent="space-between" container className="ap-app-footer footer-primary-color">
                <Grid item lg={4} xs={12} sx={{ textAlign: { lg: "left", xs: "center" }, pt: '5px !important' }} className="copyright-div">
                    Copyrights © 2023 All rights reserved <span className='secondary-color'>ORCALO HOLDINGS</span>
                </Grid>
            </Grid>
        </>
    );
};
