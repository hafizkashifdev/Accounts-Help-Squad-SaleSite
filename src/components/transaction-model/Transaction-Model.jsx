import React, { useState, useEffect } from "react";
import { SimpleDialog } from "../modal/simple-dialog";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
  InputAdornment,
  Box,
} from "@mui/material";
import "./transaction.scss";
import { PoundSign } from "../../assests/bills/pound-sign";
import { ReactComponent as PercentAge } from "../../assests/svg/percent-age.svg";
import GlobalModal from "../global-modal/global-modal";
import DeleteIcon from "../../assests/svg/trash.svg";
import { ReactComponent as Down } from "../../assests/svg/chev-bottom.svg";

const TransactionModel = ({
  openModel,
  handleClose,
  titelValue,
  nameValue,
  amountValue,
  paymentDateValue,
  categoryValue,
  ...props
}) => {
  const [openDelete, setOpenDelete] = useState(false);
  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };
  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const [openUpdate, setOpenUpdate] = useState(false);
  const handleUpdateOpen = () => {
    setOpenUpdate(true);
  };
  const handleUpdateClose = () => {
    setOpenUpdate(false);
  };

  const isNegative = titelValue && titelValue.includes("-");
  const fontColorClass = isNegative ? "#FF0000" : "#48995D";

  const [formData, setFormData] = useState({
    name: nameValue,
    amount: amountValue,
    issueDate: "",
    VAT: "",
    expactedDate: "",
    paymentDate: paymentDateValue,
    category: categoryValue,
    note: "",
  });

  useEffect(() => {
    setFormData({
      name: nameValue,
      amount: amountValue,
      issueDate: "",
      VAT: "",
      expactedDate: "",
      paymentDate: paymentDateValue,
      category: categoryValue,
      note: "",
    });
  }, [nameValue, amountValue, paymentDateValue, categoryValue]);

  // Handler to update form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form values:", formData);
  };

  const handleClear = () => {
    setFormData({
      name: "",
      amount: "",
      issueDate: "",
      VAT: "",
      expactedDate: "",
      paymentDate: "",
      category: "",
      note: "",
    });
  };

  return (
    <>
      <SimpleDialog
        open={openModel}
        handleClose={handleClose}
        title="Expense Report"
        titleClass="adduser_header primary-color font-weight-600 secondary-heading"
        paperSx={{ maxWidth: "788px", borderRadius: "8px" }}
      >
        <Typography
          color={
            props?.categoryName === "AllTransactions" &&
            titelValue === "£ 56,700"
              ? "#0084AD"
              : fontColorClass
          }
          className="font-family-Exo font-weight-600 secondary-heading margin-bottom-1"
        >
          {titelValue}
        </Typography>
        <form className="tm_form" onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} className="tm-textfield_bold">
              <label className="tm-input_label">Name</label>
              <TextField
                sx={Styles.field_color}
                name="name"
                variant="standard"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                inputProps={{
                  className: "font-family-Exo",
                }}
              />
            </Grid>

            <Grid item xs={12} md={6} className="tm-textfield_bold">
              <label className="tm-input_label">Amount</label>
              <TextField
                sx={Styles.field_color}
                name="amount"
                variant="standard"
                value={formData.amount}
                placeholder="Amount"
                onChange={handleChange}
                inputProps={{
                  className: "font-family-Exo",
                  style: {
                    color:
                      props?.categoryName === "AllTransactions" &&
                      titelValue === "£ 56,700"
                        ? "#0084AD"
                        : fontColorClass,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <PoundSign
                        fillColor={
                          props?.categoryName === "AllTransactions" &&
                          titelValue === "£ 56,700"
                            ? "#0084AD"
                            : fontColorClass
                        }
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} md={6} className="tm-textfield_bold">
              <label className="tm-input_label">Issue Date</label>
              <TextField
                sx={Styles.field_color}
                name="issueDate"
                variant="standard"
                value={formData.issueDate}
                onChange={handleChange}
                inputProps={{
                  className: "font-family-Exo",
                }}
                placeholder="Issue Date"
              />
            </Grid>

            <Grid item xs={12} md={6} className="tm-textfield_bold">
              <label className="tm-input_label">VAT</label>
              <TextField
                sx={Styles.field_color}
                name="VAT"
                variant="standard"
                placeholder="VAT"
                type="number"
                value={formData.VAT}
                onChange={handleChange}
                inputProps={{
                  className: "font-family-Exo",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PercentAge />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} md={6} className="tm-textfield_bold">
              <label className="tm-input_label">Payment Date</label>
              <TextField
                sx={Styles.field_color}
                name="paymentDate"
                variant="standard"
                onChange={handleChange}
                value={formData.paymentDate}
                inputProps={{
                  className: "font-family-Exo",
                }}
                placeholder="Payment Date"
              />
            </Grid>

            <Grid item xs={12} md={6} className="tm-textfield_bold">
              <label className="tm-input_label">Expacted Date</label>
              <TextField
                sx={Styles.field_color}
                name="expactedDate"
                variant="standard"
                onChange={handleChange}
                value={formData.expactedDate}
                inputProps={{
                  className: "font-family-Exo",
                }}
                placeholder="Expacted Date"
              />
            </Grid>

            <Grid item xs={12} md={6} className="tm-textfield_bold">
              <label className="tm-input_label">Category</label>
              <Select
                sx={Styles.field_color}
                fullWidth
                name="category"
                variant="standard"
                IconComponent={Down}
                onChange={handleChange}
                value={formData.category ? 1 : 2}
                inputProps={{
                  className: "font-family-Exo",
                }}
              >
                <MenuItem
                  value={1}
                  sx={{
                    color: categoryValue === "Uncategorized" ? "#FFBF00" : "",
                  }}
                >
                  {categoryValue}
                </MenuItem>
                <MenuItem value={2}>Client 2</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} md={6} className="tm-textfield_bold">
              <label className="tm-input_label">Note</label>
              <TextField
                sx={Styles.field_color}
                name="note"
                variant="standard"
                onChange={handleChange}
                value={formData.note}
                inputProps={{
                  className: "font-family-Exo",
                }}
                placeholder="Add Note"
              />
            </Grid>
          </Grid>

          <Grid className="flex justify-space-between margin-top-1 align-center">
            <Box>
              <Typography
                sx={{ fontWeight: 400, fontSize: "11px", color: "#000" }}
              >
                Consider as Cash inflow
              </Typography>
              <Typography
                sx={{
                  fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
                  fontWeight: 400,
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                Subtract from the selected cash inflow Category
              </Typography>
            </Box>
            <Box>
              <Button
                className="tm-del_btn font-family-Exo"
                onClick={handleDeleteOpen}
              >
                Delete
              </Button>
            </Box>
          </Grid>
          <Grid className="tm_btn">
            <Button variant="outlined" onClick={handleClear}>
              Clear
            </Button>
            <Button
              variant="contained"
              type="submit"
              onClick={handleUpdateOpen}
            >
              Update
            </Button>
          </Grid>
        </form>
      </SimpleDialog>
      <GlobalModal
        open={openDelete}
        handleClose={handleDeleteClose}
        onSureClick={handleDeleteClose}
        modalIcon={DeleteIcon}
        modalText="The transaction will be deleted. You won't be able to retrieve it"
      />
      <GlobalModal
        open={openUpdate}
        handleClose={handleUpdateClose}
        onSureClick={handleUpdateClose}
        modalIcon={DeleteIcon}
        modalText="You want to update this"
      />
    </>
  );
};

export default TransactionModel;

const Styles = {
  field_color: (theme) => ({
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2B2B33",
    },
    "& .Mui-error:after": {
      borderBottomColor: "#d32f2f",
    },
    "& .Mui-error:before": {
      borderBottomColor: "#d32f2f !important",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "15px",
      pb: "10px",
    },
    "& .MuiInputBase-root:hover": {
      backgroundColor: "#F0F0F2",
    },
    "& .MuiSelect-select:hover": {
      backgroundColor: "#F0F0F2",
    },
    "& :before": {
      borderBottom: "1.6px solid #C4C4CC !important",
    },
    "&:after": {
      borderColor: "#2B2B33",
    },
  }),
};
