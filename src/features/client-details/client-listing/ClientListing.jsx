import { Button, Grid, Box } from "@mui/material";
import React, { Fragment, useState } from "react";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import CustomTable from "../../../components/Table/CustomTable";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import { list_col, list_data } from "./ListClientData";
import { CustomPopover } from "../../../components/custom-popover/custom-popover";
import { ExportCardCheckbox } from "../../../components/export-card-checkbox/export-card-checkbox";
import { toast } from "react-toastify";
import FilterModal from "../components/filter-modal/FilterModal";
import { DateIcon } from "../../../components/date-icon/date-icon";

function Client_Listing() {
  const [selectBranch, setSelectBranch] = useState("");
  const [selectClient, setSelectClient] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [checkboxPdf, setCheckboxPdf] = useState(false);
  const [checkboxExcel, setCheckboxExcel] = useState(false);

  return (
    <Fragment>
      <div className="invoice-title">Clients</div>

      {/* Search field */}
      <Grid container className="align-center cash-collection-report">
        <Grid xl={6} xs={12}>
          <GlobalSearchBar />
        </Grid>
        <Grid xl={6} xs={12}>
          <div
            className="align-end"
            style={{ marginLeft: "auto", display: "flex" }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  paddingRight: "20px",
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
              <DatePicker
                sx={{
                  paddingRight: "20px",
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
            </LocalizationProvider>
            <CustomPopover
              mainTitle="Filters"
              mainTitleClass="primary-color heading-20 font-weight-600 margin-bottom-1"
              popoverOpenerTitle="More Filters"
              popoverOpenerProps={{
                variant: "outlined",
                sx: {
                  mr: 2,
                  whiteSpace: "nowrap",
                  color: "#40404D",
                  border: "1.5px solid #40404D !important",
                  height: "32px",
                  borderRadius: "8px",
                  "&:hover": {
                    border: "2px solid #40404D !important",
                  },
                },
                endIcon: <img src={filterIcon} alt="More Filter" />,
                className:
                  "buttons-filters font-family-Exo font-weight-400 tertiary-title",
              }}
            >
              {(popupState) => (
                <>
                  <FilterModal />
                  <div className="filter-below-btn margin-top-2 flex justify-end">
                    <Button
                      className="btn1"
                      onClick={() => {
                        setSelectBranch("");
                        setSelectClient("");
                      }}
                    >
                      Clear
                    </Button>
                    &nbsp;
                    <Button
                      onClick={() => {
                        if (selectBranch || selectClient) {
                          setSelectBranch("");
                          setSelectClient("");
                          popupState.close();
                        } else {
                          toast.error("Please Select Any Type");
                        }
                      }}
                      className="btn2 primary-bg-color"
                    >
                      Apply
                    </Button>
                  </div>
                </>
              )}
            </CustomPopover>
            <CustomPopover
              mainTitle="Export"
              mainTitleClass="primary-color heading-20 font-weight-600 margin-bottom-1"
              popoverOpenerTitle="Export"
              popoverOpenerProps={{
                variant: "contained",
                sx: {
                  background: "#2B2B33",
                  borderRadius: "8px",
                  height: "32px",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    background: "#2B2B33",
                    borderWidth: "2px",
                  },
                },
                endIcon: <img src={exportIcon} alt="Export Text" />,
                className:
                  "buttons-filters font-family-Exo font-weight-400 tertiary-title",
              }}
            >
              {(popupState) => (
                <>
                  <p className="secondary-color margin-bottom-0">
                    Export this report as
                  </p>
                  <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                      <Box className="attachment-box">
                        <ExportCardCheckbox
                          checkboxState={checkboxPdf}
                          setCheckboxState={setCheckboxPdf}
                          title="PDF"
                        />
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box className="attachment-box">
                        <ExportCardCheckbox
                          checkboxState={checkboxExcel}
                          setCheckboxState={setCheckboxExcel}
                          title="Excel"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <div className="filter-below-btn margin-top-2 flex justify-end">
                    <Button
                      className="btn1"
                      onClick={() => {
                        setCheckboxPdf(false);
                        setCheckboxExcel(false);
                      }}
                    >
                      Clear
                    </Button>
                    &nbsp;
                    <Button
                      onClick={() => {
                        if (checkboxExcel || checkboxPdf) {
                          setCheckboxPdf(false);
                          setCheckboxExcel(false);
                          popupState.close();
                        } else {
                          toast.error("Please Select Export Type");
                        }
                      }}
                      className="btn2 primary-bg-color"
                    >
                      Apply
                    </Button>
                  </div>
                </>
              )}
            </CustomPopover>
          </div>
        </Grid>
      </Grid>
      <br />
      {/* Table */}

      <CustomTable
        data={list_data}
        columns={list_col}
        isSuccess={true}
        isPagination={true}
        showSerialNo
        serialNoSortable
      />
    </Fragment>
  );
}

export default Client_Listing;
