import { Grid } from '@mui/material'
import React from 'react'
import { NotificationsPageHeader } from '../features/notifications-page-header/notifications-page-header'
import { NotificationsDetailsContainer } from '../features/notifications-details-container/notifications-details-container'
import { NOTIFICATIONSDATA } from '../mock-data/notifications-data'

export const Notifications = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <NotificationsPageHeader />
        </Grid>
        <Grid item xs={12}>
          {
            NOTIFICATIONSDATA.map((item,index) => <NotificationsDetailsContainer key={item.id} notification={item} index={index} />)
          }
        </Grid>
      </Grid>
    </>
  )
}
