import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@emotion/react";
import { Backdrop, Button, Grid, Typography } from "@mui/material";
//import DeleteIcon from "../../assests/svg/trash-red.png";
import DeleteIcon from "../../assests/svg/trash-black.png";
import { ReactComponent as Add } from "../../assests/svg/add-circle-white.svg";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

//---icons

const DeleteModel = (props) => {
  //---usestate handlers and themes
  const { open, handleClose, onDeleteClick, children, add_icon } = props;
  const theme = useTheme();

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={Styles.root}>
          <Grid container>
            <Grid xs={12} item>
              <Box sx={Styles.innerBox(theme)}>
                <div style={{ marginBottom: -35 }}>
                  <Box
                    sx={{
                      p: 3,
                      mt: 4,
                      borderRadius: "50%",
                      bgcolor: "#fff",
                      position: "relative",
                      boxShadow: "-4px 4px 4px rgba(222, 222, 222, 0.25)",
                    }}
                  >
                    <img src={DeleteIcon} alt="" />
                  </Box>
                </div>
                <div
                  style={{
                    backgroundColor: "#fff",
                    width: "100%",
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  <Box sx={{ pt: "40px", textAlign: "center" }}>
                    <Typography variant="h3" sx={Styles.heading}>
                      Are you sure?
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "400",
                        color: "#2B2B33",
                        fontSize: "14px",
                        mt: 3,
                      }}
                    >
                      {children ? children : "Selected Category will be Deleted"}
                    </Typography>
                  </Box>
                  <Box sx={Styles.buttonWrapper}>
                    <Button
                      onClick={onDeleteClick}
                      sx={Styles.buttonError(theme)}
                    >
                      Yes, Sure
                      &nbsp;
                      {add_icon && (
                        <Add style={{width: '24px', height: '24px'}} />
                      )
                      }
                    </Button>
                    <Button
                      onClick={handleClose}
                      sx={Styles.buttonSuccess(theme)}
                    >
                      Cancel
                      &nbsp;
                      {add_icon && (
                        <ControlPointIcon style={{width: '24px', height: '24px'}} />
                      )
                      }
                    </Button>
                  </Box>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeleteModel;
//-----------------------------------------------------------------------
// styles
const Styles = {
  root: (theme) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: 500 },
    borderRadius: "8px",
    boxShadow: 24,
    backgroundColor: "#2B2B33", // Top half color
  }),
  innerBox: (theme) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // pt: "10px"
  }),
  buttonWrapper: (theme) => ({
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    mt: 6,
    mb: 3.5,
  }),
  buttonError: (theme) => ({
    bgcolor: "#2B2B33",
    color: "#fff",
    transition: "background-color 0.2s ease",
    "&:hover": {
      bgcolor: "#1A1A1D",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.9)", // Add a box shadow on hover
      transform: "scale(1)",
    },
    px: 2,
    py: 1,
    fontSize: "16px !important",
    textTransform: "capitalize",
    fontWeight: "400",
    borderRadius: "8px",
  }),
  buttonSuccess: (theme) => ({
    bgcolor: "#fff",
    color: "#2B2B33",
    minWidth: "100px",
    transition: "background-color 0.2s ease",
    "&:hover": {
      bgcolor: "#F7F7F7",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.9)", // Add a box shadow on hover
      transform: "scale(1)",
    },
    fontSize: "16px !important",

    border: "1px solid #2B2B33",
    fontWeight: "400",
    textTransform: "capitalize",
    borderRadius: "8px",
  }),
  heading: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#2B2B33",
    mt: 3,
    fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
  },
};
