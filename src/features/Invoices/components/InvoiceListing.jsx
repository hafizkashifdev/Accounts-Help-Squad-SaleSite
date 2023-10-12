import React, { useState } from "react";
import CustomTable from "../../../components/Table/CustomTable";
import { useTableParams } from "../../../components/Table/useTableParams";
// import TableAction from '../../../components/Table/TableAction';
// import DeleteModel from '../../../../components/modal/DeleteModel';
// import FormDialog from '../../../../components/modal/ModalPractice';
import "./invoice_listing.scss";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import filterIcon from "../../../assests/images/client/filter.png";
import exportIcon from "../../../assests/images/client/export.png";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Link } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CustomPopover } from "../../../components/custom-popover/custom-popover";
import { DashboardSelect } from "../../dashboard-select/dashboard-select";
import { toast } from "react-toastify";
import { DateIcon } from "../../../components/date-icon/date-icon";

const INVOICE_DATA = [
  {
    id: 1,
    Id: "01",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: "Paid",
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: "12",
    total_amount: "£ 7200",
  },
  {
    id: 2,
    Id: "02",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: "Due",
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: "12",
    total_amount: "£ 7200",
  },
  {
    id: 3,
    Id: "03",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: "Overdue",
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: "12",
    total_amount: "£ 7200",
  },
  {
    id: 4,
    Id: "04",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: "Paid",
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: "12",
    total_amount: "£ 7200",
  },
  {
    id: 5,
    Id: "05",
    invoiceNo: "2345",
    client: "Ali",
    invoice_status: "Overdue",
    issue_date: "19 Oct, 2023",
    due_date: "19 Oct, 2023",
    overdue_days: "12",
    total_amount: "£ 7200",
  },
];

export default function InvoiceListing() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const columns = [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => info.getValue(),
      header: () => <span>Sr.#</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row) => <Link to="/invoice-no-detail">{row.invoiceNo}</Link>,
      id: "invoiceNo",
      cell: (info) => (
        <span style={{ color: "#0084AD", textDecoration: "underline" }}>
          {info.getValue()}
        </span>
      ),
      header: "Invoice No.",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.client,
      id: "client",
      cell: (info) => info.getValue(),
      header: "Client",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.invoice_status,
      id: "invoice_status",
      cell: (info) => (
        <span
          className={
            info.getValue() === "Paid"
              ? "Paid"
              : info.getValue() === "Due"
                ? "Due"
                : "Overdue"
          }
        >
          {info.getValue()}
        </span>
      ),
      header: "Invoice Status",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.issue_date,
      id: "issue_date",
      cell: (info) => info.getValue(),
      header: "Issue Date",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.due_date,
      id: "due_date",
      cell: (info) => info.getValue(),
      header: "Due Date",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.overdue_days,
      id: "overdue_days",
      cell: (info) => info.getValue(),
      header: "Overdue Days",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.total_amount,
      id: "total_amount",
      cell: (info) => info.getValue(),
      header: "Total Amount",
      // isSortable: true,
    },
  ];

  const [selectBranch, setSelectBranch] = useState("");
  const [selectClient, setSelectClient] = useState("");
  const [status, setStatus] = useState("");
  const [bucket, setBucket] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(null);

  const handleDateChange = (date, label) => {
    if (label === "Start date") {
      setStartDate(date);
    } else if (label === "End Date") {
      setEndDate(date);
    }
  };


  const handleClearClick = () => {
    setStartDate(null);
    setEndDate(null);
    setError(null);
  };

  return (
    <React.Fragment>
      <div className="invoice-title">Invoices</div>

      {/* Search field */}
      <Grid container>
        <Grid xs={12} md={6} lg={6} xl={6}>
          <div
            style={{
              margin: "5px",
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <GlobalSearchBar />
          </div>
        </Grid>

        <Grid xs={12} md={6} lg={6} xl={6}>
          <Box sx={{
            marginLeft: "auto",
            display: "flex"
          }}>
            <Box sx={{marginLeft:'30px'}}>
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
            </Box>
            <Box sx={{ marginLeft: 'auto', marginRight:'10px' }}>
              <CustomPopover
                mainTitle="Filters"
                mainTitleClass="primary-color heading-20 font-weight-600 margin-bottom-1"
                popoverOpenerTitle="More Filters"
                popoverOpenerProps={{
                  variant: "outlined",
                  sx: {
                    mr: 2,
                    top: "20px",
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
                    <Grid container spacing={2}>
                      <Grid item sm={6} xs={12}>
                        <label className="secondary-color" for="branch">
                          Branch
                        </label>
                        <DashboardSelect
                          id="branch"
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
                          selectVal={selectBranch}
                          setSelectVal={setSelectBranch}
                          data={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]}
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <label className="secondary-color" for="Client">
                          Client
                        </label>
                        <DashboardSelect
                          id="Client"
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
                          selectVal={selectClient}
                          setSelectVal={setSelectClient}
                          data={["Client 1", "Client 2", "Client 3", "Client 4"]}
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <label className="secondary-color" for="Client">
                          Status
                        </label>
                        <DashboardSelect
                          id="Status"
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
                          data={["Paid", "Due", "Overdue"]}
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <label className="secondary-color" for="Client">
                          Aging Bucket
                        </label>
                        <DashboardSelect
                          id="bucket"
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
                          data={[
                            "Amount overdue < 30d",
                            "Amount overdue 30 - 60d",
                            "Amount overdue 60 - 90d",
                            "Amount overdue > 90d",
                          ]}
                        />
                      </Grid>
                    </Grid>
                    <div className="filter-below-btn margin-top-2 flex justify-end">
                      <Button
                        className="btn1"
                        onClick={() => {
                          setSelectBranch("");
                          setSelectClient("");
                          setBucket("");
                          setStatus("");
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
                            setBucket("");
                            setStatus("");
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
            </Box>
          </Box>
        </Grid>
      </Grid>
      <br />
      {/* Table */}

      <CustomTable
        data={INVOICE_DATA}
        columns={columns}
        isSuccess={true}
        isPagination={true}
      />
    </React.Fragment>
  );
}
