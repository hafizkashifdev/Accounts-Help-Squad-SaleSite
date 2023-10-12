import { Box, Grid } from '@mui/material'
import React from 'react'
import './payable.scss';

function HeroSection() {
  return (
    <Grid container className='hero-section' sm={12} sx={{padding: '100px'}}> 
        
        <Grid xs={12} xl={6} md={6} lg={6}>
            <Box className='hero-section-left'>
                <h6>Online platform that helps you manage Accounting</h6>
            </Box>   
        </Grid>
        
        <Grid xs={12} xl={6} md={6} lg={6}>
            <Box className='hero-section-right'>
                <ul>
                    <li className='odd-li'>Accountant Pact contains everything you need for faster Accounting journey of your company.</li>
                    <li className='even-li'>Accountant Pact contains everything you need for faster Accounting journey of your company.</li>
                    <li className='odd-li'>Accountant Pact contains everything you need for faster Accounting journey of your company.</li>
                    <li  className='even-li'>Accountant Pact contains everything you need for faster Accounting journey of your company.</li>
                </ul>
            </Box>
        </Grid>
    </Grid>
  )
}

export default HeroSection