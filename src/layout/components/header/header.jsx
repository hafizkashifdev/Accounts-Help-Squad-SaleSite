import AppLogo from "../../../assests/svg/app-logo/app-logo.svg";
import Grid from '@mui/material/Grid';

import { MoreOptions } from './components/more-options/more-options';
import NotificationCard from './components/notification-card/notification-card';
import SearchCard from './components/search-card/search-card';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import "./header.scss";


export const Header = ({ openMobHeader }) => {
  return (
    <>
      <Grid container justifyContent="space-between" className="header flex bg-white-color">
        <Grid item display="flex" justifyContent="center" alignItems="center">
            <img className="ap-logo cursor-pointer" src={AppLogo} alt="Accountants Pact" />
        </Grid>
        <Grid item display="flex" justifyContent="center" alignItems="center">
          <Grid container className="flex align-center" spacing={{sm:2,xs:0}}>
            <Grid item sx={{ display: { md: 'flex', xs: 'none' } }} className="search-icon">
              <SearchCard />
            </Grid>
            <Grid item sx={{ display: { md: 'none', xs: 'flex' } }} className="search-icon">
              <MenuOpenIcon  onClick={() => openMobHeader(true)} />
            </Grid>
            <Grid item className="notification-icon">
              <NotificationCard />
            </Grid>
            <Grid item className="user-details flex align-center">
              <MoreOptions />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
