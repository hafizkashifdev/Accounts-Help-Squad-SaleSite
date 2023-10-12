// Components
import Sidebar from "../sidebar";

// MUI
import { Grid, SwipeableDrawer } from "@mui/material";


// MUI Styles
import { mobSidebarDrawer } from "./sidebar-mobile-mui-style";

// Component Function Starts Here
const HeaderMobile = ({mobDrawer,setMobDrawer}) => {
  return (
    <>
      <SwipeableDrawer
        anchor={"left"}
        open={mobDrawer}
        onClose={() => setMobDrawer(!mobDrawer)}
        sx={mobSidebarDrawer}
        onOpen={() => setMobDrawer(!mobDrawer)}
        disableSwipeToOpen={false}
      >
        <Grid height="100%" >
          <Sidebar />
        </Grid>
      </SwipeableDrawer>
    </>
  );
};

export default HeaderMobile;
