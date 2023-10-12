import './report.scss';
import { getLocalStorage } from '../../utils/localStorageHelpers';
import { Grid } from '@mui/material';
import { ReportDataPayable, ReportDataReceiveable } from '../../mock-data/ReportData';
import { Link } from 'react-router-dom';

const reports = {
    "Account Receivable": ReportDataReceiveable,
    "Account Payable": ReportDataPayable,
}

function Reports() {
    return (
        <>
            <div className='top-heading heading-20 font-weight-600 tertiary-color'>Reports</div>
            <Grid container spacing={2}>
                {
                    reports[getLocalStorage("pName")]?.map((val, i) => (
                        <Grid className='report-styles flex flex-column' sx={{ alignItems: { lg: 'flex-start', xs: 'center' } }} item xs={12} lg={6} xl={4} key={val?.title}>
                            <div className='report-title primary-color font-weight-600'>{val?.title}</div>
                            <div className="link flex">
                                <Link to={`/reports/${val?.param}`}>
                                    <div className='report-card border-radius-8'>
                                        <div className="flex justify-center align-center">
                                            {val?.image}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Reports
