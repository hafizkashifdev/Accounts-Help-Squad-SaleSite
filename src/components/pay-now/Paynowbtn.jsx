import React from 'react'
import { Button, Grid } from '@mui/material'

const Paynowbtn = ({ isFieldsEmpty }) => {
    return (
        <Grid container className='justify-end margin-top-2 margin-right-2'>
            <Button
                variant="contained"
                className='font-family-Exo  border-radius-8'
                sx={{
                    width: '431px',
                    fontSize: '16px',
                    px: '25px',
                    py: '10px',
                    background: isFieldsEmpty ? '#A6A6B3' : '#2B2B33',
                    '&:hover': {
                        background: isFieldsEmpty ? '#A6A6B3' : '#2B2B33',
                    },
                }}>
                Pay Now
            </Button>
        </Grid>
    )
}

export default Paynowbtn