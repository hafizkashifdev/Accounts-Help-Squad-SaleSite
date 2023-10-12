import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import GlobalButton from "../../../../components/global-button/global-button";
import rollimg from "../../../../assests/images/settings/roll-icon.png";
import dellIcon from "../../../../assests/images/settings/dell-butn.png";
import editIcon from "../../../../assests/images/settings/edit.png";
import crossIcon from "../../../../assests/images/settings/close-square.png";
import addIcon from "../../../../assests/images/settings/add-circle.png";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { FormControlLabel } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import AccountSystem from "../../account-system/account-system";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    border: "1px solid black",
    opacity: 1,
    backgroundColor: "black" ? "white" : "gray",
    boxSizing: "border-box",
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    backgroundColor: "black",
    border: "3px solid dark",
    width: 16,
    height: 16,
    margin: 2,
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    backgroundColor: "dark",
  },

  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: "gray",
  },
}));

const HsbcHolding = () => {
  // const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  return (
    <>
    <Grid sx={{p:2}}>
      <Grid container>
        {/* <Grid item xs={12}> */}
        <Grid xs={12} sx={{}}>
          <Typography
            className="sub-heading font-family-exo2 tertiary-color"
            sx={{ fontWeight: 600, borderRadius: "8px",ml:0.5 }}
          >
            HSB Business
          </Typography>
        </Grid>

        <Grid xl={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "space-between", xs: "center" },
              mt: 2,
              // p:{sm:0,xs:2},

              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            <Button
              sx={{
                background: "#D3E7D8",
                borderRadius: "8px",
                color: "#80B88E ",
                fontSize:'16px',
               fontWeight:600,
               textTransform:'capitalize',
              
                
              }}
            >
              {" "}
              Connected
            </Button>
            <Typography
              sx={{ mt: { sm: 0, xs: 2 }, p: { sm: 0, xs: 2 } }}
              className="secondary-color font-family-exo2 primary-title"
            >
              Last information received: 15 March 2023, 20:29
            </Typography>
          </Box>
        </Grid>
        <Grid
          xl={6}
          xs={12}
          sx={{
            display: "flex",
            mt: { sm: 0, xs: 2 },
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: { xl: "flex-end", xs: "center" },
          }}
        >
          <Box>
            <GlobalButton
              btnName="outline"
              btnText="Refresh"
              startIcon={
                <img src={rollimg} alt="More Filter" width={16} height={16} />
              }
              sx={{
                mr: 2,
              }}
              className="invoice-filter-btn"
            />{" "}
          </Box>
          <Grid sx={{ mt: 0.6, display: { sm: "block", xs: "none" } }}>
            <img
              src={dellIcon}
              alt="More Filter"
              width={21}
              height={21}
              style={{ marginRight: "10px" }}
            />
            <img
              src={editIcon}
              alt="More Filter"
              width={21}
              height={21}
              style={{ marginRight: "10px" }}
            />
            <img src={crossIcon} alt="More Filter" width={21} height={21} />
          </Grid>
        </Grid>
        <Grid xs={12} sx={{ mt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormGroup>
              <Box sx={{ml:0.5}}>
                <FormControlLabel
                  control={<Android12Switch color="default" />}
                />
              </Box>
            </FormGroup>
            <Typography
              sx={{ color: "#48995D" }}
              className="sub-heading font-family-exo2"
            >
              £530.00
            </Typography>
          </Box>
          <Divider sx={{ mt: 2 }} />
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 2 }}>
        {/* <Grid item xs={12}> */}
        <Grid xs={12} sx={{}}>
          <Typography
            className="sub-heading font-family-exo2 tertiary-color"
            sx={{ fontWeight: 600, borderRadius: "8px" ,ml:0.5}}
          >
            HSB Business
          </Typography>
        </Grid>

        <Grid xl={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "space-between", xs: "center" },
              mt: 2,
              // p:{sm:0,xs:2},

              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            <Button
              sx={{
                color: "#FF3F3F",
                borderRadius: "8px",
                backgroundColor: "#FDCFD1 ",
                fontSize:'16px',
                fontWeight:600,
                textTransform:'capitalize',
                
              }}
              // variant="contained"
            >
              {" "}
              Disconnected
            </Button>
            <Typography
              sx={{ mt: { sm: 0, xs: 2 }, p: { sm: 0, xs: 2 } }}
              className="secondary-color font-family-exo2 primary-title"
            >
              Last information received: 15 March 2023, 20:29
            </Typography>
          </Box>
        </Grid>
        <Grid
          xl={6}
          xs={12}
          sx={{
            display: "flex",
            mt: { sm: 0, xs: 2 },
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: { xl: "flex-end", xs: "center" },
          }}
        >
          <Box>
            <GlobalButton
              btnName="outline"
              btnText="Connect"
              startIcon={
                <img src={addIcon} alt="More Filter" width={16} height={16} />
              }
              sx={{
                mr: 2,
              }}
              className="invoice-filter-btn"
            />{" "}
          </Box>
          <Grid sx={{ mt: 0.6, display: { sm: "block", xs: "none" } }}>
            <img
              src={dellIcon}
              alt="More Filter"
              width={21}
              height={21}
              style={{ marginRight: "10px" }}
            />
            <img
              src={editIcon}
              alt="More Filter"
              width={21}
              height={21}
              style={{ marginRight: "10px" }}
            />
            <img src={crossIcon} alt="More Filter" width={21} height={21} />
          </Grid>
        </Grid>
        <Grid xs={12} sx={{ mt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormGroup>
              <Box sx={{ml:0.5}}>
                <FormControlLabel
                  control={<Android12Switch color="default" />}
                />
              </Box>
            </FormGroup>
            <Typography
              sx={{ color: "#FF3F3F" }}
              className="sub-heading font-family-exo2"
            >
              £530.00
            </Typography>
          </Box>
          <Divider sx={{ mt: 2 }} />
        </Grid>
      </Grid>
      <Grid xs={12}>
     <AccountSystem/>
      </Grid></Grid>
    </>
  );
};

export default HsbcHolding;
