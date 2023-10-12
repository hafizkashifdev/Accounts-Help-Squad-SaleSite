import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@emotion/react";
import { Backdrop, Button, Grid, Typography } from "@mui/material";
import AlertIcon from "../../assests/svg/tickGreen.svg";
//---icons

const GreatModel = (props) => {
  //---usestate handlers and themes
  const { open, handleClose, onDeleteClick } = props;
  const theme = useTheme();

  return (
    <Box>
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
                  <img src={AlertIcon} alt="" />
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
                    Great
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
                    Your account is successfully linked to Payable
                  </Typography>
                </Box>
                <Box sx={Styles.buttonWrapper}>
                  <Button
                    onClick={handleClose}
                    sx={Styles.buttonSuccess(theme)}
                  >
                    Close
                  </Button>
                </Box>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default GreatModel;
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
    "&:hover": { bgcolor: "#2B2B33" },
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
    "&:hover": { bgcolor: "#fff" },
    fontSize: "16px !important",
    border: "1px solid #2B2B33",
    fontWeight: "400",
    textTransform: "capitalize",
    borderRadius: "8px",
  }),
  heading: { fontSize: "20px", fontWeight: "600", color: "#2B2B33", mt: 3 },
};
