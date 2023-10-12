import { Badge, Box, Grid } from '@mui/material'
import React from 'react'
import NotificationIcon from "../../../../../assests/svg/sidebar/notification-icon.svg"
import { ActivityLogDetailsData } from '../activity-log-details-data/ActivityLogDetailsData';
export const ActivityLogContainer = ({listing,index}) => {
  return ( 
    <>
      <Grid container sx={{ pt: '16px', pb: '32px', borderTop: index === 0 ? '1px solid #C4C4CC' : '', borderBottom: '1px solid #C4C4CC' }}>
        <Grid item xs={.5}>
          <Box sx={{ width: '42px', height: '42px', bgcolor: '#F0F0F2' }} className="border-radius-rounded flex align-center justify-center">
            <Badge invisible={listing?.notiNotRead} color="secondary" sx={{ ".MuiBadge-badge": { top: '-10%', right: '-10%', height: '11px', minWidth: '11px', bgcolor: '#898999' } }} overlap="circular" badgeContent="" variant='' >
              <img src={NotificationIcon} alt='Notification Icon with badge' />
            </Badge>
          </Box>
        </Grid>
        <Grid item xs={11.5} paddingLeft="16px">
          <ActivityLogDetailsData listing={listing} /> 
        </Grid>
      </Grid>
    </>
  )
} 