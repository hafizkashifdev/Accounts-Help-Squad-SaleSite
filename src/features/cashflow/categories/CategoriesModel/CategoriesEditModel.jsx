import { ReactComponent as Close } from "../../../../assests/svg/model-close.svg";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../../../../components/CustomInput";
import { ReactComponent as Add } from "../../../../assests/svg/add-circle-white.svg";

const CategoriesEditModel = ({ handleClose }) => {
  const [personName, setPersonName] = React.useState([]);

  const MenuItemOnchange = (value) => {
    const list = [...personName];
    const condition = list.find(
      (e) => e?.title === value?.title && e?.header === value?.header
    );
    if (condition) {
      const index = list.splice(list.indexOf(condition), 1);

      setPersonName([...list]);
    } else {
      setPersonName([...list, { ...value }]);
    }
  };
  const condition1 = [
    {
      title: `Cash Inflow`,
      value: `Cash Inflow`,
    },
    {
      title: `Cash Outflow`,
      value: `Cash Outflow`,
    },
  ];
  const condition2 = [
    {
      title: `Is less than`,
      value: `Is less than`,
    },
    {
      title: `Is greater than`,
      value: `Is greater than`,
    },
    {
      title: `Equals`,
      value: `Equals`,
    },
    {
      title: `Not equals`,
      value: `Not equals`,
    },
  ];
  const condition3 = [
    {
      header: "All Bank Accounts",
      data: [
        {
          title: `Main Account`,
          value: `Main Account`,
          header: "All Bank Accounts",
        },
        {
          title: `Second Account`,
          value: `Second Account`,
          header: "All Bank Accounts",
        },
      ],
    },
    {
      header: "Pakistan Accounts",
      data: [
        {
          title: `Main Account`,
          value: `Main Account`,
          header: "Pakistan Accounts",
        },
      ],
    },
  ];

  const condition4 = [
    {
      title: `All these Conditions`,
      value: `All these Conditions`,
    },
    {
      title: `One of these Conditions`,
      value: `One of these Conditions`,
    },
  ];
  const condition5 = [
    {
      title: `Name`,
      value: `Name`,
    },
    {
      title: `Amount`,
      value: `Amount`,
    },
    {
      title: `Payment Date`,
      value: `Payment Date`,
    },
    {
      title: `Transaction Type`,
      value: `Transaction Type`,
    },
  ];
  const condition6 = [
    {
      title: `Uncategorized`,
      value: `Uncategorized`,
    },
    {
      title: `Financing and Subsidies`,
      value: `Financing and Subsidies`,
    },
    {
      title: `Bank Loan`,
      value: `Bank Loan`,
    },
    {
      title: `Daily Expense`,
      value: `Daily Expense`,
    },
    {
      title: `Daily Workout`,
      value: `Daily Workout`,
    },
  ];
  return (
    <Box className="model-body">
      <Box className="documentApprovalModel-model">
        <Box className="top-section">
          <Typography variant="h2">Define Category Rule</Typography>
          <Close
            onClick={handleClose}
            style={{ cursor: "pointer", zIndex: 200 }}
          />
        </Box>
        <Box className="documentApprovalModel-model-body">
          <Grid container columnSpacing={4} rowSpacing={4}>
            <Grid item xs={12} lg={6}>
              <CustomInput
                label="Rule Name"
                required={false}
                inputClass={"inputClass"}
                placeholder="Category Rule No.1"
              />
            </Grid>
            <Grid
              item
              xs={12}
              display={{ xs: "none", lg: "block" }}
              lg={6}
            ></Grid>
            <Grid item xs={12} lg={6}>
              <CustomInput
                label="For"
                required={false}
                type="select"
                options={condition1}
                inputClass={"inputClass"}
                placeholder="Category Rule No.1"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <CustomInput
                label="In"
                required={false}
                options={condition3}
                MenuItemOnchange={MenuItemOnchange}
                grouped={true}
                groupedData={condition3}
                personName={personName}
                value={personName.map((e) => e.title) || [{ title: "1" }]}
                isMulti={true}
                renderValue={(selected) => selected.join(", ")}
                type="select"
                inputClass={"inputClass"}
                placeholder="Category Rule No.1"
              />
            </Grid>
            <Grid item xs={12}>
              <Box className="condition-box">
                <Box style={{ marginBottom: "40px" }}>
                  <CustomInput
                    label="When the transaction needs following Conditions"
                    required={false}
                    options={condition4}
                    type="select"
                    inputClass={"inputClass"}
                    placeholder="Category Rule No.1"
                  />
                </Box>
                <Box
                  className="condition-box2"
                  style={{ marginBottom: "20px" }}
                >
                  <CustomInput
                    label="Select"
                    required={false}
                    options={condition5}
                    type="select"
                    inputClass={"inputClass"}
                    placeholder="Category Rule No.1"
                  />
                  <CustomInput
                    label="Equals"
                    required={false}
                    options={condition2}
                    type="select"
                    inputClass={"inputClass"}
                    placeholder="Category Rule No.1"
                  />
                  <CustomInput
                    required={false}
                    inputClass={"inputClass"}
                    placeholder="1"
                  />
                </Box>
                <Box className="button-section">
                  <Button>
                    Add a Condition
                    <span>
                      <Add />
                    </span>
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <CustomInput
                label="Target Category"
                required={false}
                options={condition6}
                type="select"
                inputClass={"inputClass"}
                placeholder="Category Rule No.1"
              />
            </Grid>
          </Grid>
          <Box className="documentApprovalModel-button-box">
            <Button onClick={handleClose} className="outline">
              Cancel
            </Button>
            <Button onClick={handleClose} className="fill">
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoriesEditModel;
