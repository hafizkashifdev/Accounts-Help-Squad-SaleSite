import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import mssionimg from '../../../assets/about-us/mission.png';
import Image from 'next/image';
import {missionData} from './mission-data';

const OurMission = () => {
  return (
    <>
    
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ pt: '117px' ,pb:'116px'}}>
          <Grid item lg={6} xs={12} sx={{display:'flex',justifyContent:{lg:'left',xs:'center'}}}>
            <Image
              src={mssionimg}
              alt="mission us img"
            />
          </Grid>
          <Grid item lg={6} xs={12} sx={{ mt: '57px', display: 'flex', flexDirection: 'column', justifyContent: { lg: 'left', xs: 'center' } }}>
  <Typography
    sx={{
      color: '#1D293F',
      fontSize: '32px',
      fontWeight: 600,
      mt: '30px',
      textAlign: { lg: 'start', xs: 'center' }, 
    }}
  >
    Our Mission
  </Typography>
  <Typography
    sx={{
      color: '#898999',
      fontSize: '16px',
      fontWeight: 400,
      textAlign: { lg: 'start', xs: 'center' }, 
      mt:{lg:0,xs:2}
    }}
  >
    Our mission is clear: to make financial management accessible, efficient, and beneficial for every business. We are committed to:
  </Typography>
  {missionData.map((mission, index) => (
    <Box key={index} sx={{ mt: '24px' }}>
      <Typography component="span" >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',

          }}
        >
          <span
            style={{
              marginRight: 2,
              borderLeft: '4px solid #2B2B33',
              paddingLeft: '4px',
              height: '28px',
            }}
          ></span>
          <Typography
            sx={{
              color: '#2B2B33',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            {mission.title}
          </Typography>
        </span>
      </Typography>
      <Typography
        sx={{
          color: '#898999',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '24px',
          mt: '8px',
        }}
      >
        {mission.description}
      </Typography>
    </Box>
  ))}
</Grid>

        </Grid>
      </Container>
      {/* </div> */}
    </>
  );
};

export default OurMission;
