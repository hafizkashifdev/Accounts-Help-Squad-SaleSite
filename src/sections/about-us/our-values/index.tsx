import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import {ourValuesData} from './our-values.data'
import ServiceCard from '@root/components/serviceCard'
import Image from 'next/image';

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
      <Grid item xs={12} sx={{mt:'64px'}}>
      <div>
      {ourValuesData.map((value, index) => (
        <Box
          key={index}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            boxShadow: "0 17px 30px 0 rgba(0, 0, 0, 0.2)",
            p: 3.2,
            borderRadius: "12px",
            width: { xs: "100%", xl: "30%" },
            
          }}
        >
          <Box
            sx={{
              background: "rgba(240, 240, 242, 0.4)",
              borderRadius: "12px, 12px, 0px, 0px",
              
            }}
          >
            <Avatar
              variant="square"
              sx={{
                width: 80,
                height: 80,
                background: "#F0F0F2",
                opacity: 0.7,
                borderRadius: 2,
              }}
            >
                 <Image
              src={value.icon} alt={value.heading}
            />
            
            </Avatar>
          </Box>
          <Typography
            variant="h5"
            fontSize={20}
            color={"primary.main"}
            pb={0.4}
            pt={2.4}
          >
            {value.heading}
          </Typography>
          <Typography textAlign="center" fontSize={14} color={"primary.lighter"}>
            {value.text}
          </Typography>
        </Box>
      ))}
    </div>
      </Grid>
    </Grid>
  </Container>
  )
}

export default OurValues
