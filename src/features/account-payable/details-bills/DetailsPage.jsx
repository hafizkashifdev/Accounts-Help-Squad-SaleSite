import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  Typography,
} from "@mui/material";
// import './detail.scss';
import CustomInput from "../../../components/CustomInput";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Image from "../../../assests/bills/file.png";
import { ReactComponent as FullScreen } from "../../../assests/bills/maximize.svg";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { PoundSign } from "../../../assests/bills/pound-sign";
import { SimpleDialog } from "../../../components/modal/simple-dialog";
import GlobalButton from "../../../components/global-button/global-button";
import Pendingbtn from "./btns/Pendingbtn";
import Approvedbtn from "./btns/Approvedbtn";
import Rejectedbtns from "./btns/Rejectedbtns";
import Partialbtn from "./btns/Partialbtn";
import BillDetailModel from "./BillDetailModel";

const DetailsPage = ({ open, onClose, status }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const handleOpen = () => {
    setOpenModel(true);
  };
  const handleClose = () => {
    setOpenModel(false);
  };

  return (
    <>
      <SimpleDialog
        open={open}
        handleClose={onClose}
        title="Bill Details"
        titleClass="primary-color font-weight-600 heading-20"
        paperSx={{ maxWidth: "936px" }}
      >
        <div className="flex justify-space-between margin-top-3">
          <div
            style={{ fontFamily: "Exo 2", fontSize: "18px", color: "#6B6B80" }}
          >
            East Repair Inc.
          </div>
          <div
            style={{ fontFamily: "Exo 2", fontSize: "18px", color: "#40404D" }}
          >
            £ 500.00
          </div>
        </div>

        <div
          style={{
            fontFamily: "Exo 2",
            fontSize: "18px",
            color: "#6B6B80",
            marginTop: "4rem",
            marginBottom: "10px",
            fontWeight: 600,
          }}
        >
          Preview
        </div>

        <DialogContent sx={{ padding: "20px 0" }}>
          <Box className="reuse-details-section">
            <Box className="children-first-section">
              <Box className="image-box">
                <img src={Image} alt="file" />
              </Box>
              <FullScreen className="maximize-btn" onClick={handleOpen} />
            </Box>
            <Box className="children-second-section">
              <Grid container spacing={5} rowSpacing={5}>
                <Grid item xs={12} md={6} lg={4}>
                  <CustomInput
                    inputClass={"inputClass"}
                    label={"Invoice Number"}
                    required={false}
                    labelClass={"labelClass"}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <p className="label">Issue Date</p>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    style={{ maxWidth: "100%", width: "100%" }}
                  >
                    <DatePicker
                      sx={{
                        width: "100%",
                        ".MuiInputBase-input ": {
                          p: "13px",
                          fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                          color: startDate ? "#40404D" : "#A6A6B3",
                        },
                      }}
                      slots={{
                        openPickerIcon: CalendarMonthRoundedIcon,
                      }}
                      slotProps={{ textField: { placeholder: "From" } }}
                      variant="standared"
                      value={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <p className="label">Bill Due Date</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        width: "100%",
                        ".MuiInputBase-input ": {
                          p: "13px",
                          fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                          color: startDate ? "#40404D" : "#A6A6B3",
                        },
                      }}
                      slots={{
                        openPickerIcon: CalendarMonthRoundedIcon,
                      }}
                      slotProps={{ textField: { placeholder: "From" } }}
                      variant="standared"
                      value={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <CustomInput
                    inputClass={"inputClass"}
                    label={"Payment Source"}
                    required={false}
                    labelClass={"labelClass"}
                    type="select"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <CustomInput
                    inputClass={"inputClass"}
                    label={"Payment Method"}
                    required={false}
                    labelClass={"labelClass"}
                    type="select"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <CustomInput
                    label={"Payment Amount"}
                    required={false}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PoundSign />
                        </InputAdornment>
                      ),
                    }}
                    inputClass={"inputClass inputClass2"}
                    labelClass={"labelClass"}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>

          {status === "Pending" ? (
            <Box>
              <Pendingbtn />
            </Box>
          ) : (
            ""
          )}
          {status === "Approved" ? (
            <Box>
              <Approvedbtn />
            </Box>
          ) : (
            ""
          )}
          {status === "Rejected" ? (
            <Box>
              <Rejectedbtns />
            </Box>
          ) : (
            ""
          )}
          {status === "Partial" ? (
            <Box>
              <Partialbtn />
            </Box>
          ) : (
            ""
          )}
        </DialogContent>
      </SimpleDialog>
      <BillDetailModel openModel={openModel} handleClose={handleClose} />
    </>
  );
};

export default DetailsPage;
