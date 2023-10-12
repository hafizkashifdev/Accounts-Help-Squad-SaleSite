import React, { useEffect } from "react";
import AddNote from "./add-note/AddNote";
import RecentEmailTable from "./recent-email-table/RecentEmailTable";
import "./invoice_no_detail.scss";
import { Button, Grid, Box, Typography } from "@mui/material";
import { useState } from "react";
import ViewInvoice from "../../../view-invoices/ViewInvoice";
import { useNavigate } from "react-router";
import GlobalButton from "../../../../components/global-button/global-button";
import Popover from "@mui/material/Popover";
import EditIcon from "../../../../assests/images/client/editIcon.png";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const InvoiceNoDetail = () => {
  const [isAddNoteTrue, setIsAddNoteTrue] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const AllOverdue = () => {
    navigate("/overdue-invoices");
  };

  useEffect(() => {
    function handleResize() {
      setIsAddNoteTrue(window.innerWidth > 1200);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Typography className="font-weight-600 heading-20 tertiary-color font-family-Exo">
        Invoice Details
      </Typography>
      <Grid
        container
        spacing={2}
        className="invoice-no_container position-relative"
      >
        <Grid item xl={10} lg={12} md={12} xs={12}>
          <div className="flex justify-space-between">
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      height: "32px",
                      fontFamily: "Exo 2",
                      background: "#2B2B33",
                      borderRadius: "8px",
                      "&:hover": {
                        background: "#2B2B33",
                      },
                    }}
                    inputProps={{
                      fontFamily: "Exo 2",
                    }}
                    endIcon={
                      <img
                        src={EditIcon}
                        alt="Edit Icon"
                        width={16}
                        height={16}
                      />
                    }
                    {...bindTrigger(popupState)}
                    className="addnote_btn"
                  >
                    Add Note
                  </Button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <AddNote />
                  </Popover>
                </div>
              )}
            </PopupState>
          </div>
          <Typography
            className="font-weight-600 secondary-heading tertiary-color font-family-Exo"
            sx={{ mt: "50px" }}
          >
            Bratley Cooper
          </Typography>
          <Grid
            container
            display="flex"
            sx={{ justifyContent: { xs: "center" } }}
            className="justify-space-between"
          >
            <Grid
              xl={7}
              lg={7}
              md={12}
              xs={12}
              item
              className="flex justify-space-between"
            >
              <Box>
                <div style={{ display: "flex", marginTop: "40px" }}>
                  <Typography className="font-weight-600 heading-20 tertiary-color font-family-Exo">
                    Invoice 1345
                  </Typography>
                  <span className="invoice-no_paid primary-title font-weight-600 font-family-Exo">
                    Paid
                  </span>
                </div>
                <Typography className="font-weight-400 primary-title secondary-color margin-top-0-8 font-family-Exo">
                  Issue Date
                </Typography>
                <Typography className="font-weight-400 primary-title secondary-color margin-top-0-8 font-family-Exo">
                  Due Date
                </Typography>
                <Typography className="font-weight-600 sub-heading secondary-color margin-top-0-8 font-family-Exo">
                  Total Amount
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", mt: "2.5rem" }}>
                <GlobalButton btnText="View Invoice" onClick={handleOpen} />
                <ViewInvoice
                  open={open}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                />
                <Typography className="font-weight-400 primary-title tertiary-color margin-top-0-8 font-family-Exo">
                  19/07/2022
                </Typography>
                <Typography className="font-weight-400 primary-title tertiary-color margin-top-0-8 font-family-Exo">
                  19/07/2023
                </Typography>
                <Typography className="font-weight-600 sub-heading tertiary-color margin-top-0-8 font-family-Exo">
                  £ 7100.00
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xl={3.8}
              lg={4.5}
              md={12}
              xs={12}
              sx={{
                backgroundColor: "#F0F0F2",
                p: "24px",
                borderRadius: "8px",
                width: "370px",
                mt: "2.5rem",
              }}
            >
              <Typography className="font-weight-600 heading-20 tertiary-color font-family-Exo">
                Overdue Invoices
              </Typography>
              <Box className="flex justify-space-between">
                <div>
                  <Typography className="font-weight-400 secondary-title secondary-color margin-top-0-8 font-family-Exo">
                    Invoice 1140
                  </Typography>
                  <Typography className="font-weight-400 secondary-title secondary-color margin-top-0-8 font-family-Exo">
                    Invoice 1171
                  </Typography>
                  <Typography className="font-weight-400 secondary-title secondary-color margin-top-0-8 font-family-Exo">
                    Invoice 1191
                  </Typography>
                </div>
                <div>
                  <Typography className="font-weight-600 secondary-title tertiary-color margin-top-0-8 font-family-Exo">
                    £ 2112.00
                  </Typography>
                  <Typography className="font-weight-600 secondary-title tertiary-color margin-top-0-8 font-family-Exo">
                    £ 1537.00
                  </Typography>
                  <Typography className="font-weight-600 secondary-title tertiary-color margin-top-0-8 font-family-Exo">
                    £ 704.00
                  </Typography>
                </div>
              </Box>
              <GlobalButton
                sx={{ mt: "1rem", width: "100%" }}
                btnText="View All Invoices"
                onClick={AllOverdue}
              />
            </Grid>
          </Grid>
          <Grid item>
            <RecentEmailTable />
          </Grid>
        </Grid>
        {isAddNoteTrue && (
          <Grid item xl={2} className="position-relative">
            <Grid
              className="margin-auto-x addnote_side margin-top-6"
              position={{ xl: "static", xs: "absolute" }}
              height={"100%"}
            >
              <AddNote />
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default InvoiceNoDetail;
