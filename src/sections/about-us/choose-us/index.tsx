import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import chooseimg from '../../../assets/about-us/choose.png';
import circle from '../../../assets/about-us/Oval.png';
import Image from 'next/image';
import {chooseUsData} from './choose-us-data';


const ChooseUs = () => {
  return (
   
      <Container maxWidth="xl">
        <Grid container spacing={0} sx={{ mt: '180px',}} >
        <Grid item lg={4} sx={{ position: 'relative'}}>
  <Image src={chooseimg} alt="choose us img" style={{ position: 'absolute', zIndex: 1,width:'100%' }} />
  <Image src={circle} style={{ position: 'absolute', top: '30%', left: '50%', zIndex: 0 }} alt="circle img" />
</Grid>



          <Grid item lg={8} sx={{  }}>
           <Box sx={{background:'#2B2B33', mt:'130px' ,pl:'190px',py:'34px'}}>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '32px',
                fontWeight: 600,             
                 
              }}
            >
            Why Choose Us
            </Typography>
            <Typography
              sx={{     
                color: '#FFF',
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
                        borderLeft: '4px solid #FFF',
                        paddingLeft: '4px',
                        height: '28px',
                      }}
                    ></span>
                    <Typography
                      sx={{
                        color: '#FFF',
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
                    color: '#FFF',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '24px',
                    mt: '8px',
                  }}
                >
                  {choose.description}
                </Typography>
              </Box>
            ))}</Box> 
          </Grid>
        </Grid>
      </Container>
     
  )
}

export default ChooseUs