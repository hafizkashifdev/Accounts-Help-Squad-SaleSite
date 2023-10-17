import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Aboutmainimg from '../../../assets/about-us/about-main.png';
import Image from 'next/image'; 

const AboutHero= () => {
  return (
    <>
    
  
    <Container maxWidth="md">
        <Grid container>
<Grid item>
    <Typography
    variant='h1'
    sx={{
        color: '#2B2B33',
        textAlign: 'center',
        fontSize: '64px',
        fontWeight: 600,
      }}
      >
    About Us
    </Typography>
    <Typography
    sx={{
        color: "primary.lighter",
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '140%', 
        mt:'16px',
      }}
      >
Welcome to Accounts Help Squad, your trusted partner for financial and business solutions. Our mission is to empower entrepreneurs and businesses of all sizes by providing expert guidance, innovative tools, and a dedicated support team. With years of experience in the industry, we are committed to your success. 
    </Typography>

</Grid>
        </Grid>

    </Container>

<Container maxWidth="xl">
<Grid container sx={{display:'flex',justifyContent:'center',mt:'36px'}}>
<Grid item sx={{}}>
            <Image
              src={Aboutmainimg}
              alt="About us img"
              
            />
          </Grid>
</Grid>

</Container>
</>
  )
}

export default AboutHero
