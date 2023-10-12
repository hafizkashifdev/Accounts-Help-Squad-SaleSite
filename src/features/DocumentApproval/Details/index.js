import React, { useState } from "react";
import { Box, Grid, InputAdornment, Typography } from "@mui/material";
import CustomInput from "../../../components/CustomInput";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Image from "../../../assests/bills/file.png";
import { ReactComponent as FullScreen } from "../../../assests/bills/maximize.svg";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import "./style.scss";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { PoundSign } from "../../../assests/bills/pound-sign";

const Details = ({ setOpenModel, openModel }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <Box className="reuse-details-section">
      <Box className="children-first-section">
        <Box className="image-box">
          <img src={Image} alt="file" />
        </Box>

        <FullScreen
          className="maximize-btn"
          onClick={() =>
            setOpenModel({ ...openModel, model: !openModel.model, type: 1 })
          }
        />
      </Box>
      <Box className="children-second-section">
        <Grid container spacing={5} rowSpacing={5}>
          <Grid item xs={12} md={6} lg={6}>
            <CustomInput
              inputClass={"inputClass"}
              label={"Invoice Number"}
              required={false}
              labelClass={"labelClass"}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
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
                  ".MuiInputBase-adornedEnd": {
                    paddingRight: "8px",
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
          <Grid item xs={12} md={6} lg={3}>
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
                  ".MuiInputBase-adornedEnd": {
                    paddingRight: "8px",
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
          <Grid item xs={12} md={6} lg={6}>
            <CustomInput
              inputClass={"inputClass"}
              label={"Payment Source"}
              required={false}
              labelClass={"labelClass"}
              type="select"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <CustomInput
              inputClass={"inputClass"}
              label={"Payment Method"}
              required={false}
              labelClass={"labelClass"}
              type="select"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}></Grid>
          <Grid item xs={12} md={6} lg={6}>
            <CustomInput
              label={"Payment Amount"}
              required={false}
              inputType="number"
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
  );
};
export default Details;
