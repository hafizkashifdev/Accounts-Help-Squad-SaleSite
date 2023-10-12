import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { toast } from "react-toastify";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CustomPopover } from "../../../../components/custom-popover/custom-popover";
import { GlobalSearchBar } from "../../../../components/global-search-filter/global-search-filter";
import filterIcon from "../../../../assests/images/client/filter.png";
import { DashboardSelect } from "../../../dashboard-select/dashboard-select";
import { CustomDatePicker } from "../../../../components/custom-date-picker/custom-date-picker";
import CustomTable from "../../../../components/Table/CustomTable";
import TransactionModel from "../../../../components/transaction-model/Transaction-Model";

const PreCategorized = () => {
  const [selectBranch, setSelectBranch] = useState("");
  const [selectClient, setSelectClient] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [filteredTransactionData, setFilteredTransactionData] = useState();

  const handleOpen = (_id) => {
    setOpenModel(true);
    const [filterData] = Pre_categorized_Data?.filter((ele) => ele?.id === _id);
    setFilteredTransactionData(filterData);
  };
  // console.log(filteredTransactionData);

  const handleClose = () => {
    setOpenModel(false);
  };

  const Pre_categorized_Data = [
    {
      id: 4,
      sr: "01",
      name: "Test 3",
      category: "Type 2",
      payment_extended_date: "19 Apr, 2023",
      amount: "£ 30,000",
    },
    {
      id: 5,
      sr: "02",
      name: "Test 4",
      category: "Supplier Type 1",
      payment_extended_date: "19 Apr, 2023",
      amount: "-£ 15,000",
    },
    {
      id: 6,
      sr: "03",
      name: "Test 5",
      category: "Supplier Type 2",
      payment_extended_date: "19 Apr, 2023",
      amount: "-£ 456,7800",
    },
  ];

  const Pre_categorized_Data2 = [
    {
      id: 1,
      sr: "01",
      name: "Payment Client 3",
      category: "Rent",
      payment_extended_date: "19 Apr, 2023",
      amount: "-£ 15,000",
    },
    {
      id: 2,
      sr: "02",
      name: "Payment Client 4",
      category: "Electricity",
      payment_extended_date: "19 Apr, 2023",
      amount: "£ 30,000",
    },
    {
      id: 3,
      sr: "03",
      name: "Payment Client 5",
      category: "Gas",
      payment_extended_date: "19 Apr, 2023",
      amount: "-£ 456,7800",
    },
  ];

  const Pre_categorized_Col = [
    {
      accessorFn: (row) => row.sr,
      id: "sr",
      cell: (info) => info.getValue(),
      header: "Sr.#",
      // isSortable: true,
    },
    {   
      accessorFn: (row) => row.name,
      id: "name",
      cell: (info) => info.getValue(),
      header: "Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.category,
      id: "category",
      cell: (info) => info.getValue(),
      header: "Category",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.payment_extended_date,
      id: "payment_extended_date",
      cell: (info) => info.getValue(),
      header: "Payment Extended Date",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.amount,
      id: "amount",
      cell: (info) => (
        <Box
          className={
            info.getValue().startsWith("-") ? "error-color" : "success-color"
          }
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => handleOpen(info?.row?.original?.id)}
        >
          {info.getValue()}
        </Box>
      ),
      header: "Amount(incl. tex)",
      // isSortable: true,
    },
  ];

  // const dataElement = filteredTransactionData;
  return (
    <>
      <Grid xs={12}>
        <Grid container className="align-end" spacing={2}>
          <Grid item xl={8.7} lg={7.5} md={12}>
            <GlobalSearchBar />
          </Grid>

          <Grid
            item
            xl={3.3}
            lg={4.5}
            md={12}
            className="flex align-end"
            sx={{ gap: "1.5rem" }}
          >
            <Grid
              item
              sx={{
                ":focus-within": { fontWeight: 600 },
                ":hover": { fontWeight: 600 },
                maxWidth: "330px",
                width: "100%",
              }}
            >
              <label className="secondary-color">Transaction Type</label>
              <DashboardSelect
                id="branch"
                placeholder="Accounting System"
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
                  ".MuiSelect-select:hover": {
                    bgcolor: "#F0F0F2",
                  },
                  ".MuiSelect-icon": { top: "40%" },
                  width: "100%",
                }}
                selectVal={selectBranch}
                setSelectVal={setSelectBranch}
                data={["Bank", "Accounting System"]}
              />
            </Grid>

            <Grid item>
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
                    <Grid container spacing={2}>
                      <Grid item sm={6} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <CustomDatePicker
                            width="100%"
                            dateValue={startDate}
                            placeholder="From"
                            setDateValue={setStartDate}
                          />
                        </LocalizationProvider>
                      </Grid>

                      <Grid item sm={6} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <CustomDatePicker
                            width="100%"
                            dateValue={endDate}
                            placeholder="To"
                            setDateValue={setEndDate}
                          />
                        </LocalizationProvider>
                      </Grid>

                      <Grid item sm={6} xs={12}>
                        <label className="secondary-color" for="Category Type">
                          Category Type
                        </label>
                        <DashboardSelect
                          id="Client"
                          placeholder="All"
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
                            ".Mui-selected": {
                              bgcolor: "#F0F0F2 !important",
                            },
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
                            width: "94%",
                          }}
                          selectVal={selectClient}
                          setSelectVal={setSelectClient}
                          data={["All", "Cash Inflow", "Cash Outflow"]}
                        />
                      </Grid>
                    </Grid>
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
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ height: "1px", bgcolor: "#C4C4CC", my: "1rem" }}></Box>
        <CustomTable
          data={
            selectBranch === "Bank"
              ? Pre_categorized_Data
              : Pre_categorized_Data2
          }
          columns={Pre_categorized_Col}
          showHeaderFilter={false}
          isSuccess={true}
          isPagination={true}
        />
      </Grid>
      <TransactionModel
        openModel={openModel}
        handleClose={handleClose}
        titelValue={filteredTransactionData?.amount}
        nameValue={filteredTransactionData?.name}
        amountValue={filteredTransactionData?.amount}
        paymentDateValue={filteredTransactionData?.payment_extended_date}
        categoryValue={filteredTransactionData?.category}
      />
    </>
  );
};

export default PreCategorized;
