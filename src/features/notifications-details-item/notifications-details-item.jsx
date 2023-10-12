import { Box, Collapse, Grid } from '@mui/material'
import React, { useState } from 'react'
import { AppTooltip } from '../../components/app-tooltip/app-tooltip';

export const NotificationsDetailsItem = ({ notification }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Grid container sx={{ p: '16px 24px', borderRadius: '8px', '&:hover': { bgcolor: '#F0F0F2' } }}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6} className='font-weight-600 primary-color'>
                            {notification?.notiType}
                        </Grid>
                        <Grid item xs={6} className='flex justify-end align-center '>
                            <div className="notification-date tertiary-color">
                                {notification?.startDate} | {notification?.endDate}
                            </div>
                            <div className="notification-expand-btn">
                                <Box onClick={() => setExpanded(!expanded)} sx={{ transform: expanded ? 'rotateZ(180deg)' : 'rotateZ(0deg)' }} className="margin-left-1 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
                                        <path d="M9.00002 8.80062C8.30002 8.80062 7.60002 8.53063 7.07002 8.00063L0.55002 1.48062C0.26002 1.19062 0.26002 0.710625 0.55002 0.420625C0.84002 0.130625 1.32002 0.130625 1.61002 0.420625L8.13002 6.94062C8.61002 7.42062 9.39002 7.42062 9.87002 6.94062L16.39 0.420625C16.68 0.130625 17.16 0.130625 17.45 0.420625C17.74 0.710625 17.74 1.19062 17.45 1.48062L10.93 8.00063C10.4 8.53063 9.70002 8.80062 9.00002 8.80062Z" fill="#777777" />
                                    </svg>
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: '8px' }} className='primary-color'>
                    {notification?.notiDesc}
                </Grid>
                <Grid item xs={12}>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Grid container sx={{ mt: '18px' }}>
                            <Grid item xs={8} className='primary-color'>
                                <Grid container>
                                    <Grid item xs={4} className='primary-color'>
                                        <div className="title-1 secondary-title">
                                             { notification?.furtherDetailNotitypeName ? <>{notification?.notitypeName}<AppTooltip message={notification?.furtherDetailNotitypeName} className="font-family-Exo" ><Box component="span" className='cursor-pointer' sx={{color:'#0084AD'}}> ⓘ </Box></AppTooltip></> : notification?.notitypeName}
                                        </div>
                                        <div className="title-2 secondary-title margin-top-0">
                                            {notification?.notitypeDesc}
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} className=''>
                                        <div className="desc-1 secondary-title">
                                            {notification?.notitypeNameGot}
                                        </div>
                                        <div className="desc-2 secondary-title margin-top-0">
                                            {notification?.notitypeDescGot}
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4} >
                                <Grid container>
                                    <Grid item xs={6} className='primary-color'>
                                        <div className="title-1 secondary-title end-text">
                                            {notification?.actionType}
                                        </div>
                                        <div className="title-2 secondary-title margin-top-0 end-text">
                                            Role:
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} className='primary-color'>
                                        <div className="desc-1 secondary-title margin-left-0 end-text">
                                            {notification?.actionTypeBy}
                                        </div>
                                        <div className="desc-2 secondary-title margin-top-0 margin-left-0 end-text">
                                            {notification?.actionRole}
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Collapse>
                </Grid>
            </Grid>
        </>
    )
}
