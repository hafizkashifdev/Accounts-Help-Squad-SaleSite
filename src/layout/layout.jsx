import { Outlet } from "react-router-dom";

// MUI
import CssBaseline from "@mui/material/CssBaseline";



// SCSS
import "./layout.scss";
import { Box, Grid } from "@mui/material";
// import { AlertBreadcrumbs } from "../../components/alert-breadcrumbs/alert-breadcrumbs";
import { AppBar, body, Drawer, DrawerHeader, mainContainer, xsNonesmFlex } from "./layout-mui-style";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import HeaderMobile from "./components/sidebar/sidebar-mobile/sidebar-mobile";
import { useState } from "react";
// Component start here
export default function Layout({ children }) {
  const [openMobDrawer, setOpenMobDrawer] = useState(false)
  return (
    <div className="main-layout">
      <CssBaseline />
      <Grid
        sx={mainContainer}
      >
        {/* header and sidebar for sm to  x-large screens */}
        <Grid>
          <AppBar className="app-bar" >
            <Header openMobHeader={setOpenMobDrawer} />
          </AppBar>

          <Drawer sx={xsNonesmFlex}
            className="drawer" variant="permanent" open={true}>
            <Sidebar />
          </Drawer>

          <HeaderMobile mobDrawer={openMobDrawer} setMobDrawer={setOpenMobDrawer} />

        </Grid>

        {/* body of application */}
        <div className="main-layout-body">
          <div className="body-outlet">
            <Grid
              sx={body}
            >
              <DrawerHeader />
            </Grid>
            <div className="margin-outlet-x" >
              {/* <AlertBreadcrumbs /> */}
              <Box sx={{my:'50px'}} >
                <Outlet />
              </Box>
              <br />
              <br />
              <main className="flex-grow">{children}</main>
            </div>
          </div>
        </div>
      </Grid>
      <div className="body-footer">
        <Footer />
      </div>
    </div>
  );
}
