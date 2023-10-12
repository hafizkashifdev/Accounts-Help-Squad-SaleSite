import React, {useState} from "react";
import {Button, Grid, } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateIcon } from "../../../../../components/date-icon/date-icon";
import { SimpleDialog } from "../../../../../components/modal/simple-dialog";
import { DashboardSelect } from "../../../../dashboard-select/dashboard-select";

const VendorDocumentModel = (props) => {
  const { openFilter, handleCloseVendor,setStatus,status } = props;
  const [bucket, setBucket] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
console.log(status);

    return(
        <SimpleDialog open={openFilter} handleClose={handleCloseVendor} title="Filters" titleClass="adduser_header primary-color font-weight-600 heading-20">
    
          <>
            <Grid container spacing={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Grid item sm={6} xs={12}>
                    <label className="secondary-color" for="branch">
                      From
                    </label>
              <DatePicker
                sx={{
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
              
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <label className="secondary-color" for="Client">
                      To
                    </label>
                    <DatePicker
                sx={{
                  ".MuiInputBase-input ": {
                    p: "13px",
                    fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                    color: "#A6A6B3",
                  },
                }}
                slotProps={{ textField: { placeholder: "To" } }}
                slots={{
                  openPickerIcon: DateIcon,
                }}
                value={endDate}
                onChange={(date) => setEndDate(date)}
                />
                  </Grid>
                </LocalizationProvider>
              <Grid item sm={6} xs={12} className="margin-bottom-1">
                <label className="secondary-color" for="Client">
                  Document Type
                </label>
                <DashboardSelect
                  id="Document Type"
                  placeholder="Select"
                  fullWidth={true}
                  MenuSx={{
                    ".MuiMenuItem-root": {
                      color: "#6B6B80",
                      fontSize: "14px",
                      fontWeight: 400,
                    },
                    marginTop: "10px",
                    boxShadow: "0px 6px 6px 6px #DEDEDE40",
                    borderRadius: "8px",
                    ".MuiList-root": { p: "0" },
                    ".Mui-selected": { bgcolor: "#F0F0F2 !important" },
                    ".Mui-selected:hover": { bgcolor: "#F0F0F2" },
                  }}
                  selectSx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderBottom: "1.6px solid #C4C4CC !important",
                    },
                    ".MuiSelect-select": {
                      p: "10.5px 14px",
                      fontWeight: "400",
                      color: "#40404D",
                      fontSize: "15px",
                    },
                    ".MuiSelect-icon": { top: "40%" },
                  }}
                  selectVal={bucket}
                  setSelectVal={setBucket}
                  data={["Pdf", "Excel"]}
                />
              </Grid>
              <Grid item sm={6} xs={12} className="margin-bottom-1">
                <label className="secondary-color" for="Client">
                  Document Status
                </label>
                <DashboardSelect
                  id="Document Status"
                  placeholder="Select"
                  fullWidth={true}
                  MenuSx={{
                    ".MuiMenuItem-root": {
                      color: "#6B6B80",
                      fontSize: "14px",
                      fontWeight: 400,
                    },
                    marginTop: "10px",
                    boxShadow: "0px 6px 6px 6px #DEDEDE40",
                    borderRadius: "8px",
                    ".MuiList-root": { p: "0" },
                    ".Mui-selected": { bgcolor: "#F0F0F2 !important" },
                    ".Mui-selected:hover": { bgcolor: "#F0F0F2" },
                  }}
                  selectSx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderBottom: "1.6px solid #C4C4CC !important",
                    },
                    ".MuiSelect-select": {
                      p: "10.5px 14px",
                      fontWeight: "400",
                      color: "#40404D",
                      fontSize: "15px",
                    },
                    ".MuiSelect-icon": { top: "40%" },
                  }}
                  selectVal={status}
                  setSelectVal={setStatus}
                  data={[
                    "Pending",
                    "Scheduled",
                    "Paid",
                    "Rejected",
                  ]}
                />
              </Grid>
            </Grid>
          </>
      </SimpleDialog>
    )
}

export default VendorDocumentModel
