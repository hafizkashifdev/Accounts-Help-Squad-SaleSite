import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@emotion/react";
import { Backdrop, Button, Grid, Typography, IconButton } from "@mui/material";
import TableAction from "../../TableAction";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import "./view-prompt.scss";
import editIcon from "../../../../assests/images/workflow/Action Button Set.svg";
import dot from "../../../../assests/images/workflow/Rectangle 6393.svg";
import CustomInput from "../../../CustomInput";

const ViewPrompt = (props) => {
  const condition1 = [
    {
      title: `Bill Amount`,
      value: `Bill Amount`,
    },
    {
      title: `Category`,
      value: `Category`,
    },
    {
      title: `Payment Method`,
      value: `Payment Method`,
    },
    {
      title: `Bank`,
      value: `Bank`,
    },
    {
      title: `Vendor`,
      value: `Vendor`,
    },
    {
      title: `Payment Type`,
      value: `Payment Type`,
    },
  ];
  const condition2 = [
    {
      title: `Is less than`,
      value: `Is less than`,
    },
    {
      title: `Is greater than`,
      value: `Is greater than`,
    },
    {
      title: `Equals`,
      value: `Equals`,
    },
    {
      title: `Not equals`,
      value: `Not equals`,
    },
  ];
  const condition3 = [
    {
      title: `Admin`,
      value: `Admin`,
    },
    {
      title: `Manager`,
      value: `Manager`,
    },
    {
      title: `Client`,
      value: `Client`,
    },
    {
      title: `Xyz`,
      value: `Xyz`,
    },
  ];
  const condition4 = [
    {
      title: `John Doe`,
      value: `John Doe`,
    },
    {
      title: `Jack Sparrow`,
      value: `Jack Sparrow`,
    },
    {
      title: `Will Turner`,
      value: `Will Turner`,
    },
    {
      title: `Elizabeth Swan`,
      value: `Elizabeth Swan`,
    },
  ];
  
  const { onViewClick } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();

  return (
    <Box>
      <TableAction size="small" type="view" onClicked={handleOpen} />
      {open && (
        <Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Box sx={Styles.root(theme)}>
              <Box sx={{ p: 2 }}>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "black",
                  }}
                >
                  <CancelOutlinedIcon />
                </IconButton>

                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      display: "flex",
                      mt: { sm: 2, xs: 4 },
                      gap: 2,
                      mb: 2,
                      mr: 2,
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: 600 }}
                      className="heading-20 font-family-Exo primary-color"
                    >
                      Workflow:
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 600 }}
                      className="heading-20 font-family-Exo primary-color"
                    >
                      XYZ
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginLeft: "auto",
                      mt: { sm: 2.5, xs: 4.5 },
                      pr: { sm: 5, xs: 0 },
                    }}
                  >
                    {" "}
                    <img
                      src={editIcon}
                      alt="diagramicon"
                      height={25}
                      width={25}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    border: "1px solid #F0F0F2",
                    pb: 2,
                  }}
                >
                  <Grid container direction={'column'} alignItems={'start'}
                    sx={{ 
                      p: { lg: 4, xs: 2 },
                      mt: 1,
                      mb: { md: 2, xs: 0 },
                    
                    }}
                  >
                    <Box
                   
                    pl={1.5}
                    >
                      <Typography variant="h5" 
                      
                      >If:</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { md: "row", xs: "column" },
                        gap: 2,
                        p:2,
                      }}
                    >
                      <Box sx={{ display:{lg:"flex",xs:'none'}, alignItems:"center"}}>
                        <img src={dot} alt="diagramicon" height={8} width={8} />
                      </Box>
                      <CustomInput
                        disable={true}
                        type="select"
                        required={false}
                        options={condition1}
                      />
                      <CustomInput
                        disable={true}
                        type="select"
                        required={false}
                        options={condition2}
                      />
                      <CustomInput
                        disable={true}
                        required={false}
                        placeholder="Type here"
                        parentClass={"inputClass"}
                      />
                    </Box>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    border: "1px solid #F0F0F2",
                    pd: { md: 4, xs: 2 },
                    pb: 2,
                    mt: 2,
                  }}
                >
                  <Grid
                    container
                    sx={{
                      p: { lg: 4, xs: 2 },
                      mt: 1,
                      mb: { md: 2, xs: 0 },
                    }}
                  >
                    <Box sx={{ mb: { md: 4, xs: 2 } }}>
                      <Typography variant="h5">Then:</Typography>
                    </Box>{" "}
                    <Grid
                      container
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: { md: "row", xs: "column" },
                        gap: 2,
                      }}
                    >
                      <CustomInput
                        disable={true}
                        type="select"
                        required={false}
                        options={condition3}
                      />
                      <CustomInput
                        disable={true}
                        type="select"
                        required={false}
                        options={condition4}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
      )}
    </Box>
  );
};

export default ViewPrompt;

//-----------------------------------------------------------------------
// styles
const Styles = {
  root: (theme) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: {md:848,  xs:100,},
    // height: {xl:450},
    borderRadius: 2,
    boxShadow: 24,
    backgroundColor: "#FFFFFF",
    pb: 2, // White background color
  }),
};
