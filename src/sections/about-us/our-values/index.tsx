import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const OurValues = () => {
  return (
    <Container maxWidth="xl">
    <Grid container sx={{ mt: '117px' }}>
      <Grid item xs={12} sx={{ mt: '57px' }}>
        <Typography
          sx={{
            color: '#1D293F',
            fontSize: '40px',
            fontWeight: 700,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center', 
          }}
        >
       Our Values
        </Typography>
        <Typography
          sx={{
            color: '#1D293F',
            fontSize: '16px',
            fontWeight: 500,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center', 
          }}
        >
    At Accounts Help Squad, our values are the foundation of everything we do:
        </Typography>
      </Grid>
    </Grid>
  </Container>
  )
}

export default OurValues
