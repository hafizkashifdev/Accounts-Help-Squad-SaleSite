import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import FilteredBy from '../components/filtered-by/FilteredBy'
import { VatCredit, VatCredit1, VatDueDate } from '../components/filtered-by/VatDueDat'
import VatAmountPercentage from '../components/filtered-by/VatAmntPercnt'
import './/../components/filtered-by//filter.scss'
const VTAmanagement = () => {
    const goBack = () => {
        window.history.back();
    };
    return (
        <Box mt={4} >
            <Typography className="font-family-exo2" fontSize={'20px'} fontStyle='normal' fontWeight={600} colour='#2B2B33' line-height='28px'>VAT Management</Typography>
            <Grid container alignItems={'start'} justifyContent={'space-between'}  >
                <Grid item xs={12} lg={6} >
                    <FilteredBy />
                </Grid>
                {/* <Grid item xs={12} lg={5.3} mt={11.5}>
                    <Grid item xs={12}><VatDueDate /></Grid>
                </Grid> */}
            </Grid>
            <Typography className="font-family-exo2"
                sx={{
                    marginTop: '64px',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    color: '#2B2B33',
                    lineHeight: '28px'
                }}
            >
                VAT Credit
            </Typography>
            <Typography className='font-family-exo2' marginTop={2} fontFamily='Exo 2' fontSize='16px' fontStyle='normal' fontWeight='400' colour='#2B2B33' line-height='24px' >Due VAT Credit started from the payment on</Typography>
            <Grid container alignItems={'start'} justifyContent={'space-between'} mt={4} >
                <Grid item xs={12} lg={5.3} mt={4}>

                    <VatCredit1 />

                </Grid>
                <Grid item xs={12} lg={5.3} mt={4}>

                    <VatCredit />

                </Grid>
                <Grid item xs={12} lg={5.3} mt={8}>

                    <VatAmountPercentage />

                </Grid>
                <Grid item xs={12} lg={5.5} mt={10} sx={{
                    marginTop: "200px",
                    justifyContent: "flex-end",
                    flex: "1 1 auto",
                    flexWrap: "wrap",
                    rowGap: "10px",
                  

                }}>
                     <Button type="submit" sx={{
                        background: '#2B2B33',
                        fontSize: '14px',
                        float:"right",
                        fontWeight: 400,
                        borderRadius: '8px',
                        marginLeft: '20px',
                        gap: '15px',
                        width: "77px",
                        height: "40px",
                        color: "#fff",
                        textTransform: 'capitalize',
                        transition: 'background 0.3s, transform 0.3s',
                        '&:hover': {
                            bgcolor: "#1A1A1D",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.9)",
                            transform: 'scale(1)',
                        }
                    }}
                    >
                        save
                    </Button>
                    <Button variant="outlined" onClick={goBack} sx={{
                        background: '#FFFFFF',
                        float:"right",
                        fontSize: '14px',
                        fontWeight: 400,
                        borderRadius: '8px',
                        marginLeft: '20px',
                        gap: '15px',
                        width: "77px",
                        height: "40px",
                        color: "#40404D",
                        textTransform: 'capitalize',
                        transition: 'background 0.3s, transform 0.3s',
                        border: "1px solid #2B2B33",
                        '&:hover': {
                            bgcolor: "#F7F7F7",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.9)",
                            transform: 'scale(1)',
                        }
                    }}>
                        Cancel
                    </Button>
                   
                </Grid>
            </Grid>
        </Box>
    )
}

export default VTAmanagement