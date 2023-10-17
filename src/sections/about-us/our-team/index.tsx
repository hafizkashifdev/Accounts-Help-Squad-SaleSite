import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import teamceo from '../../../assets/about-us/teamceo.png';
import Image from 'next/image';
import {teamtData} from './our-team-data'
import ProfileCard from '@root/components/profileCard';


const OurTeam = () => {
  return (
    <>
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
             Meet Our Team
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' sx={{
  borderRadius: '12px',
  background: '#FFF',
  boxShadow: '0px 9px 32px 0px rgba(0, 0, 0, 0.02)',
}}
>

 <Grid container sx={{ mt: '117px' }}>
          <Grid item lg={4} >
          <Image
              src={teamceo}
              alt="team ceo"
            />
          </Grid>
          <Grid item lg={8} sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
  <Typography
    sx={{
      color: '#898999',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      pr:{lg:20,xs:0}
     
    }}
  >
    Usman Saeed, an ACCA-certified financial expert, is the visionary founder behind Accounts Help Squad. With a deep passion for finance and a commitment to simplifying complex financial processes, Usman embarked on this journey to empower businesses of all sizes.
  </Typography>
  <Typography
  sx={{
    color: ' #2B2B33',
    fontSize: '20px',
    fontWeight: 600,
    mt:'20px'
  }}
>
  Usman Saeed
</Typography>
<Typography
  sx={{
    color: '#2B2B33',
    fontSize: '16px',
    fontWeight: 400,
  }}
>
Founder
</Typography>

</Grid>


        </Grid>
      </Container>
      <Container maxWidth='xl'>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2.4,
          flexWrap: "wrap",
          mt: 6.8,
        }}
      >
        {teamtData?.map(({ image, title, text }) => (
          <ProfileCard
            key={title}
            image={image}
            name={title}
            desgination={text}
            textAlign="center"
          />
        ))}
      </Box>
      </Container>
    </>
  );
};

export default OurTeam;
