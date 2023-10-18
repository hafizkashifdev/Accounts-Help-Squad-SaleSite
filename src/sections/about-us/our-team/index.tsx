import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import teamceo from '../../../assets/about-us/teamceo.png';
import Image from 'next/image';
import TeamCards from './team-cards';


const OurTeam = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container sx={{ mt: {lg:'110px',xs:'4px'} }}>
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
             Meet Our Team
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' sx={{
 
}}
>

 <Grid container sx={{ mt: '117px', borderRadius: '12px',
  background: '#FFF',
  boxShadow: '0px 9px 32px 0px rgba(0, 0, 0, 0.02)', 
  p:{lg:0,xs:2}}}>
          <Grid item lg={4} md={6} xs={12}>
  <Box
    sx={{
      display: 'flex',
      justifyContent: { xs: 'center', lg: 'start' },
    }}
  >
    <Image
      src={teamceo}
      alt="team ceo"
    />
  </Box>
</Grid>

         
          <Grid item lg={8} md={6} xs={12} sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
  <Typography
    sx={{
      color: '#898999',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      pr:{lg:20,xs:0},
      textAlign: { lg: 'start', xs: 'center' },
      
     
    }}
  >
    Usman Saeed, an ACCA-certified financial expert, is the visionary founder behind Accounts Help Squad. With a deep passion for finance and a commitment to simplifying complex financial processes, Usman embarked on this journey to empower businesses of all sizes.
  </Typography>
  <Typography
  sx={{
    color: ' #2B2B33',
    fontSize: '20px',
    fontWeight: 600,
    mt:'20px',
    textAlign: { lg: 'start', xs: 'center' },
  }}
>
  Usman Saeed
</Typography>
<Typography
  sx={{
    color: '#2B2B33',
    fontSize: '16px',
    fontWeight: 400,
    textAlign: { lg: 'start', xs: 'center' },
  }}
>
Founder
</Typography>

</Grid>

    
        </Grid>
        <Grid container>
    <Grid item xs={12} sx={{mt:'68px'}}>
<TeamCards/>
</Grid>
    </Grid>
      </Container>
      
    
    </>
  );
};

export default OurTeam;
