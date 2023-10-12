import React, {  useState } from "react";
import { Box,  Grid, InputAdornment, Typography } from "@mui/material";
import CustomInput from "../../../../../../../components/CustomInput";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Image from "../../../../../../../assests/bills/file.png";
import { ReactComponent as FullScreen } from "../../../../../../../assests/bills/maximize.svg";
import { DateIcon } from "../../../../../../../components/date-icon/date-icon";
import './style.scss'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { PoundSign } from "../../../../../../../assests/bills/pound-sign";

const Details = ({ setOpenModel, openModel }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return (
      <Box className='reuse-details-section'>
          <Typography marginBottom="-1rem" className="secondary-title secondary-color font-family-Exo margin-top-1">Preview</Typography>
        <Box className="children-first-section">
          <Box sx={{borderRadius: "8px", boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.16) inset"}} className="image-box bg-white-color">
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
                  }}
                  slots={{
                    openPickerIcon: DateIcon,
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
                  }}
                  slots={{
                    openPickerIcon: DateIcon,
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
  export default Details