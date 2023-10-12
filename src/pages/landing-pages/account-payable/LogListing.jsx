import React from 'react'
import { ActivityLogheader } from '../../../features/account-payable/activity-log/components/activity-log-header/ActivityLogheader'
import { Grid } from '@mui/material'
import { ActivityLogContainer } from '../../../features/account-payable/activity-log/components/activity-log-container/ActivityLogContainer'
import { ACTIVITYLOGDATA } from '../../../mock-data/ActivityLogData'

const LogListing = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <ActivityLogheader />
                </Grid>
                <Grid item xs={12}>
                    {
                        ACTIVITYLOGDATA.map((item, index) => <ActivityLogContainer
                            key={item.id}
                            listing={item}
                            index={index} />)
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default LogListing