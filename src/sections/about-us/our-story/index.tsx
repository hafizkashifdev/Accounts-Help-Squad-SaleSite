import React from 'react'
import { Container, Grid, Typography ,Box} from '@mui/material'

const OurStory = () => {
  return (
  <>
  
<Container maxWidth="lg">

        <Grid container sx={{mt:'150px'}}>
          
        <Grid item xs={12}sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
  <Typography
    variant='h1'
    sx={{
      color: '#2B2B33',
      fontSize: '64px',
      fontWeight: 600,
      mb:{xl:6,xs:2}
    }}
  >
    Our Story
  </Typography>
</Grid>

        </Grid>
    </Container>
<Grid xs={12} sx={{  }}>
  <Box
    sx={{
      backgroundColor: "#2B2B33",
      height: '20vh',
      marginTop: '74px',
      display: {
        xl: 'flex',
        xs: 'none',
      },
    }}
  ></Box>
</Grid>


<Container maxWidth="md" sx={{ }}> 
  <Grid container sx={{ mt: { xl: '-270px', xs: '26px' } }}>
    <Grid item>
      <Box
        sx={{
          background: '#F8F8FA',
          boxShadow: '0px 25px 50px 0px rgba(0, 0, 0, 0.06)',
          padding: '40px 60px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
       
        }}
      >
        <Typography
          sx={{
            color: "primary.lighter",
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '140%',
            mt: '16px',
          }}
        >
          At Accounts Help Squad, our journey began with a vision - a vision of simplifying complex financial processes and helping businesses thrive. Founded in [Year], we started as a small team of financial experts who shared a passion for assisting entrepreneurs in achieving their goals.
        </Typography>
        <Typography
          sx={{
            color: "primary.lighter",
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '140%',
            mt: '16px',
          }}
        >
          Over the years, our dedication to excellence and client-centric approach has driven our growth. Today, we proudly serve a diverse clientele, from startups and SMEs to established corporations, with a wide range of financial and business services.
        </Typography>
      </Box>
    </Grid>
  </Grid>
</Container>


  </>
  )
}

export default OurStory
