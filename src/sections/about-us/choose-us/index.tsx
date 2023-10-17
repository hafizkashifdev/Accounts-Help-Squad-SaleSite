import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import chooseimg from '../../../assets/about-us/choose.png';
import Image from 'next/image';
import {chooseUsData} from './choose-us-data';


const ChooseUs = () => {
  return (
   
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ mt: '180px'}}>
          <Grid item lg={6}>
            <Image
              src={chooseimg}
              alt="choose us img"
            />
          </Grid>
          <Grid item lg={6} sx={{ mt: '57px' }}>
            <Typography
              sx={{
                color: '#1D293F',
                fontSize: '32px',
                fontWeight: 600,
                mt:'60px'
              }}
            >
            Why Choose Us
            </Typography>
            <Typography
              sx={{
                color: '#898999',
                fontSize: '16px',
                fontWeight: 400,
              }}
            >
             A collage of client testimonials and achievements.     </Typography>
            {chooseUsData.map((choose, index) => (
              <Box key={index} sx={{ mt: '24px' }}>
                <Typography component="span">
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
                      {choose.title}
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
                  {choose.description}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
     
  )
}

export default ChooseUs