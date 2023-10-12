import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { CustomField } from "./custom-field/custom-field";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CustomDatePicker } from "../../components/custom-date-picker/custom-date-picker";
import { DashboardSelect } from "../dashboard-select/dashboard-select";
import { ApRadioButton } from "../../components/ap-radio-button/ap-radio-button";
import { CustomBtn } from "../add-bill-modal/custom-btn/custom-btn";
import AddIcon from "@mui/icons-material/Add";
import DragDropFile from "../DocumentApproval/Uploader";
import { PoundSign } from "../../assests/bills/pound-sign";

export const AddBillFeature = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectBranch, setSelectBranch] = useState("");
  const [recurringBill, setRecurringBill] = useState("");
  return (
    <>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item xs={5.5}>
          <CustomField label="Invoice Number" id="invoice-number">
            <TextField
              id="invoice-number"
              className="font-family-Exo"
              placeholder="Enter Invoice Number"
            />
          </CustomField>
        </Grid>
        <Grid item xs={5.5}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CustomField label="Issue Date" id="Issue-Date">
                  <CustomDatePicker
                    dateValue={startDate}
                    placeholder="Date"
                    setDateValue={setStartDate}
                  />
                </CustomField>
              </Grid>
              <Grid item xs={6}>
                <CustomField label="Bill Due Date" id="Bill-Due-Date">
                  <CustomDatePicker
                    dateValue={endDate}
                    placeholder="Date"
                    paddingRight={"0px"}
                    setDateValue={setEndDate}
                  />
                </CustomField>
              </Grid>
            </Grid>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={5.5}>
          <CustomField label="Amount" id="amount">
            <TextField
              id="amount"
              className="font-family-Exo"
              placeholder="Enter Amount"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <PoundSign />
                  </InputAdornment>
                ),
              }}
            />
          </CustomField>
        </Grid>
        <Grid item xs={5.5}>
          <CustomField label="Currency" id="currency">
            <DashboardSelect
              id="currency"
              placeholder="Select Currency"
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
              selectVal={selectBranch}
              setSelectVal={setSelectBranch}
              data={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]}
            />
          </CustomField>
        </Grid>
        <Grid item xs={5.5}>
          <Grid container spacing={2} className="justify-center align-end">
            <Grid item xs={8.5}>
              <CustomField label="Choose a Vendor" id="vendor">
                <DashboardSelect
                  id="vendor"
                  placeholder="Select Vendor"
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
                  selectVal={selectBranch}
                  setSelectVal={setSelectBranch}
                  data={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]}
                />
              </CustomField>
            </Grid>
            <Grid item xs={3.5} className="flex align-end justify-end">
              <Button
                variant="outlined"
                className="tertiary-color font-weight-400 border-radius-8"
                sx={{
                  border: "2px solid #40404D",
                  fontWeight: 400,
                  "&:hover": {
                    border: "2px solid #40404D",
                  },
                }}
              >
                Create New Vendor
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5.5}>
          <CustomField label="Is this a recurring bill?" id="recurringBill">
            <Grid container spacing={2}>
              <Grid item xs={6} mt="5px">
                <ApRadioButton
                  radioState={recurringBill === "Yes"}
                  setRadioState={setRecurringBill}
                  title="Yes"
                />
              </Grid>
              <Grid item xs={6} mt="5px">
                <ApRadioButton
                  radioState={recurringBill === "No"}
                  setRadioState={setRecurringBill}
                  title="No"
                />
              </Grid>
            </Grid>
          </CustomField>
        </Grid>
        <Grid
          item
          xs={12}
          className="flex justify-end margin-top-3 margin-bottom-3"
        >
          <CustomBtn otherProps={{ endIcon: <AddIcon /> }} onClick={() => {}}>
            Add Bill
          </CustomBtn>
        </Grid>
        <Grid item xs={12}>
          <DragDropFile></DragDropFile>
        </Grid>
      </Grid>
    </>
  );
};
