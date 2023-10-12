import React, { useState } from "react";
import CustomTable from "../../../components/Table/CustomTable";
import "./VendorReport.scss";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import { Button, Grid, Box } from "@mui/material";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CustomPopover } from "../../../components/custom-popover/custom-popover";
import { DashboardSelect } from "../../dashboard-select/dashboard-select";
import SrIcon from "../../../assests/images/client/sricon.png";

import { toast } from "react-toastify";
import { ExportCardCheckbox } from "../../../components/export-card-checkbox/export-card-checkbox";
import { DateIcon } from "../../../components/date-icon/date-icon";
import TableAction from "../../../components/Table/TableAction";
import { Link } from "react-router-dom";

export default function SingleVendorReport() {
  const [selectBranch, setSelectBranch] = useState("");
  const [selectClient, setSelectClient] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [checkboxPdf, setCheckboxPdf] = useState(false);
  const [checkboxExcel, setCheckboxExcel] = useState(false);

  const WORKFLOW_REPORT_DATA = [
    {
      id: '01',
      createAt: "26/06/2033",
      dueDate: "26/06/2033",
      source: "Email",
      amount: "1000",
      billStatus: "Approved",
    },
    {
      id: '02',
      createAt: "26/06/2033",
      dueDate: "26/06/2033",
      source: "Email",
      amount: "1000",
      billStatus: "Pending",
    },
    {
      id: '03',
      createAt: "26/06/2033",
      dueDate: "26/06/2033",
      source: "Email",
      amount: "1000",
      billStatus: "Rejected",
    },
  ];

  const WORKFLOW_REPORT_COL = [
    {
      accessorFn: (row) => row.id,
      id: "Bill Id",
      cell: (info) => info.getValue(),
      header: () => (
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          Bill Id <img src={SrIcon} alt=" Id" />
        </span>
      ),
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.createAt,
      id: "Created On",
      cell: (info) => info.getValue(),
      header: "Created On",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.dueDate,
      id: "Due Date",
      cell: (info) => info.getValue(),
      header: "Due Date",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.source,
      id: "Source",
      cell: (info) => info.getValue(),
      header: "Source",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.amount,
      id: "Amount",
      cell: (info) => info.getValue(),
      header: "Amount",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.billStatus,
      id: "Bill Status",
      cell: (info) => (
        <span
          style={{
            color:
              info.getValue() === "Approved"
                ? "#48995D"
                : info.getValue() === "Pending"
                ? "#166088"
                : info.getValue() === "Rejected"
                ? "#FF3F3F"
                : "",
          }}
        >
          {info.getValue()}
        </span>
      ),
      header: "Bill Status",
      // isSortable: true,
    },
  ];

  return (
    <React.Fragment>
      <div className="workflows-title">Jon Doe Reports</div>

      {/* Search field */}
      <Grid container className="align-center cash-collection-report">
        <Grid xl={6} xs={12}>
          <GlobalSearchBar />
        </Grid>
        <Grid xl={6} xs={12}>
          <div
            className="align-end"
            style={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "space-between",
            }}
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

            <div style={{ textAlign: "end" }}>
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
          </div>
        </Grid>
      </Grid>
      <br />
      {/* Table */}

      <CustomTable
        data={WORKFLOW_REPORT_DATA}
        columns={WORKFLOW_REPORT_COL}
        isSuccess={true}
        isPagination={true}
        showHeaderFilter={false}
      />
    </React.Fragment>
  );
}
