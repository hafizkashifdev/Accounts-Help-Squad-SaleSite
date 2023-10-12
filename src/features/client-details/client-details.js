import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import clientImage from "../../assests/images/client/client-img.png";
import "./client-details.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DueInvoices from "./due-invoices/due-invoices";
import WorkflowDetails from "./workflow-details/workflow-details";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import GlobalModal from "../../components/global-modal/global-modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { green } from "@mui/material/colors";
import playicon from "../../../src/assests/images/client/playicon.png";
import pauseicon from "../../../src/assests/images/client/pauseicon.png";
import { CustomTabs } from "../../components/custom-tabs/custom-tabs";

const ClientDetails = () => {
  const [openInvoices, setOpenInvoices] = useState(true);
  const [clientDetails, setClientDetails] = useState(true);
  const [activestatus, setActivestatus] = useState("All");
  const [openModal, setOpenModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [statusText, setStatusText] = useState("");
  const [showStatusText, setShowStatusText] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleSureClick = () => {
    const toastText = isPlaying
      ? "Collection has been paused"
      : "Collection has been restarted";
    setOpenModal(false);
    toast.success(toastText);
  };

  const modalText = isPlaying
    ? "You want to Pause Colllection"
    : "You want to start Collection";
  const modalIconimage = isPlaying ? playicon : pauseicon;

  const invoicesStatusChangeHandler = (status) => {
    setActivestatus(status);
  };

  const openInvoicesClickHandler = () => {
    setOpenInvoices(!openInvoices);
  };

  const clientDetailsClickHandler = () => {
    setClientDetails(!clientDetails);
  };

  const TabData = [
    { id:0,name: "Invoices", component: <DueInvoices status={activestatus} setActiveTab={setActiveTab} /> },
    { id:1,name: "Workflow Details", component: <WorkflowDetails setActiveTab={setActiveTab} /> },
  ];

  return (
    <>
      {" "}
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} sx={{ height: "8vh" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "20px", fontWeight: "600" }}
              className="font-family-exo2 tertiary-color"
            >
              Client Details
            </Typography>

            {activeTab === 1 && (
              <div>
                {isPlaying ? (
                  <PauseCircleFilledIcon
                    fontSize="large"
                    color="red"
                    sx={{ color: "#FF3F3F" }}
                    onClick={handlePlayPause}
                  />
                ) : (
                  <PlayCircleFilledWhiteIcon
                    fontSize="large"
                    sx={{ color: green[500] }}
                    onClick={handlePlayPause}
                  />
                )}

                <div>
                  <GlobalModal
                    open={openModal}
                    handleClose={handleModalClose}
                    onSureClick={handleSureClick}
                    modalText={modalText}
                    modalIcon={modalIconimage}
                  />
                </div>

                <ToastContainer
                  position="top-right"
                  closeButton={false}
                  autoClose={1000}
                />

                {showStatusText && toast.success(statusText)}
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} xl={10} md={12} sm={12} sx={{}}>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Remy Sharp"
                src={clientImage}
                sx={{ width: "80px", height: "80px" }}
              />
              <div
                style={{ padding: "8px", marginTop: "5px", marginLeft: "15px" }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: "20px", fontWeight: "600" }}
                  className="font-family-exo2 primary-color"
                >
                  Jacob Bills
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "14px" }}
                  className="font-family-exo2 secondary-color"
                >
                  xyz@gmail.com
                </Typography>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={clientDetailsClickHandler}
                className={clientDetails ? "opendata" : ""}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ArrowDropDownIcon />
              </IconButton>
            </div>
          </div>

          {clientDetails && (
            <Grid sx={{}}>
              <Box
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  "@media (max-width: 600px)": {
                    display: "block",
                    width: "100%",
                  },
                }}
              >
                <Box
                  className=""
                  sx={{
                    display: "flex",
                    gap: "20px",
                    "@media (max-width: 600px)": {
                      display: "block",
                      gap: "40px",
                      // backgroundColor: 'blue',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "14px" }}
                    className="font-family-exo2 secondary-color"
                  >
                    Designation
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "14px" }}
                    className="font-family-exo2 secondary-color"
                  >
                    C.T.O
                  </Typography>
                </Box>
                <Box className="" style={{ display: "flex", gap: "20px" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px" }}
                    className="font-family-exo2 secondary-color"
                  >
                    Phone
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "14px" }}
                    className="font-family-exo2 secondary-color"
                  >
                    +44 667788
                  </Typography>
                </Box>
                <Box style={{ display: "flex", gap: "20px" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px" }}
                    className="font-family-exo2 secondary-color"
                  >
                    Postal code
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "14px" }}
                    className="font-family-exo2 secondary-color"
                  >
                    +44 667788
                  </Typography>
                </Box>
              </Box>
              <div style={{ marginTop: "28px" }}>
                <Box className="" style={{ display: "flex", gap: "20px" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px" }}
                    className="font-family-exo2 secondary-color"
                  >
                    Address
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "14px" }}
                    className="font-family-exo2 secondary-color"
                  >
                    96 Richmond Road London EC35 7CX
                  </Typography>
                </Box>
              </div>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12} xl={2} md={12} sm={12} sx={{}}>
          <div style={{}} className="invoices">
            <div
              className=""
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", fontWeight: "400" }}
                className="font-family-exo2 primary-color"
              >
                Outstanding Amount
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", fontWeight: "400" }}
                className="yellow-color font-family-exo2"
              >
                £10245
              </Typography>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", fontWeight: "400" }}
                className="font-family-exo2 primary-color"
              >
                Overdue Amount
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "14px" }}
                className="error-color font-family-exo2"
              >
                £1245
              </Typography>
            </div>
          </div>
          <Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <IconButton
                onClick={openInvoicesClickHandler}
                className={openInvoices ? "open" : ""}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <ArrowDropDownIcon />
              </IconButton>
            </Grid>

            {/* invoice section */}
            {openInvoices && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  zIndex: "100",
                }}
              >
                <div
                  className="client-details-invoice-title"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "11px",
                    // marginBottom: '10px', // Add margin at the bottom for spacing
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "14px",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => invoicesStatusChangeHandler("Due")}
                    className="font-family-exo2"
                  >
                    Due Invoices
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "14px", ml: -2 }}
                    className="yellow-color font-family-exo2"
                  >
                    120
                  </Typography>
                </div>
                <div
                  className="client-details-invoice-title"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    // marginBottom: '10px', // Add margin at the bottom for spacing
                    marginTop: "11px",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "14px",
                      textDecoration: "underline",
                      cursor: "pointer",
                      className: "font-family-exo2",
                    }}
                    onClick={() => invoicesStatusChangeHandler("Overdue")}
                  >
                    Overdue Invoices
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "14px" }}
                    className="error-color font-family-exo2"
                  >
                    60
                  </Typography>
                </div>
                <div
                  className="client-details-invoice-title"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "11px",

                    // marginBottom: '10px', // Add margin at the bottom for spacing
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "14px",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => invoicesStatusChangeHandler("Paid")}
                    className="font-family-exo2"
                  >
                    Paid Invoices
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "14px" }}
                    className="client-details-invoice-title font-family-exo2"
                  >
                    60
                  </Typography>
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
      <CustomTabs tabsData={TabData} setActiveTab={setActiveTab} />
    </>
  );
};

export default ClientDetails;
