import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Typography, Box } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import "./vendordetails.scss";
import { Error } from '@mui/icons-material';
import InputAdornment from "@material-ui/core/InputAdornment";

const validationSchema = Yup.object().shape({
  vendorName: Yup.string().required(<span className="error-color"><Error className="vendor_error-icon" />Vendor Name is required</span>),
  email: Yup.string().email(<span className="error-color"><Error className="vendor_error-icon" /> Please enter a correct Email Address</span>)
  .required(<span className="error-color"><Error className="vendor_error-icon" />Email Address is required</span>),
  phone: Yup.string(),
  website: Yup.string(),
  postCode: Yup.string().required(<span className="error-color"><Error className="vendor_error-icon" />Post Code is required</span>),
  city: Yup.string(),
  address: Yup.string(),
  benificiaryName: Yup.string().required(<span className="error-color"><Error className="vendor_error-icon" />Benificiary Name is required</span>),
  accountNumber: Yup.string().required(<span className="error-color"><Error className="vendor_error-icon" />Account Number is required</span>),
  sortCode: Yup.string().required(<span className="error-color"><Error className="vendor_error-icon" />Sort Code is required</span>),
  iban: Yup.string(),
});

const initialValues = {
  vendorName: "",
  email: "",
  phone: "",
  website: "",
  postCode: "",
  city: "",
  address: "",
  benificiaryName: "",
  accountNumber: "",
  sortCode: "",
  iban: "",
};

const VendorDetails = () => {
  const [filledFields, setFilledFields] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e, formik) => {
    const { name, value } = e.target;
    console.log(e.target);
    formik.setFieldValue(name, value);
    setFilledFields((prevFilledFields) => ({
      ...prevFilledFields,
      [name]: value.trim() !== "",
    }));
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values); // Handle form submission logic here
    resetForm();
    setFilledFields({});
    navigate(-1);
  };

  return (
    <Box className="vendor-details_container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const { values, resetForm } = props;

          return (
            <Form noValidate autoComplete="off" className="add-vendor_form">
              <Typography className="font-weight-600 sub-heading margin-bottom-1 font-family-Exo">
                Personal Details
              </Typography>
              <Grid>
                <Grid container spacing={10}>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    className={`vendor-details-textfield_bold ${
                      filledFields.vendorName ? "hide_label" : ""
                    }`}
                  >
                    <label className="input_label">
                      {filledFields.vendorName ? null : (
                        <span
                          className="asterisk"
                          style={{ color: "red", marginTop: "-3px" }}
                        >
                          *
                        </span>
                      )}
                      Vendor Name
                    </label>
                    <Field
                      sx={Styles.field_color}
                      InputProps={Styles.font_family()}
                      component={TextField}
                      name="vendorName"
                      variant="standard"
                      placeholder="Vendor Name"
                      onChange={(e) => handleInputChange(e, props)}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    className={`vendor-details-textfield_bold ${
                      filledFields.email ? "hide_label" : ""
                    }`}
                  >
                    <label className="input_label">
                      {filledFields.email ? null : (
                        <span
                          className="asterisk"
                          style={{ color: "red", marginTop: "-3px" }}
                        >
                          *
                        </span>
                      )}
                      Email Address
                    </label>
                    <Field
                      sx={Styles.field_color}
                      InputProps={Styles.font_family()}
                      component={TextField}
                      name="email"
                      variant="standard"
                      placeholder="Email Address"
                      type="email"
                      onChange={(e) => handleInputChange(e, props)}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    className="vendor-details-textfield_bold"
                  >
                    <label className="input_label">
                    {filledFields.vendorName ? null : (
                        <span
                          className="asterisk"
                          style={{ color: "white", marginTop: "-3px" }}
                        >*</span>
                      )}
                      Phone
                    </label>
                    <Field
                      sx={Styles.field_color}
                      InputProps={Styles.font_family()}
                      component={TextField}
                      name="phone"
                      variant="standard"
                      placeholder="Phone"
                      type="number"
                      onChange={(e) => handleInputChange(e, props)}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    className="vendor-details-textfield_bold"
                  >
                    <label className="input_label">
                    {filledFields.vendorName ? null : (
                        <span
                          className="asterisk"
                          style={{ color: "white", marginTop: "-3px" }}
                        >*</span>
                      )}  
                      Website
                    </label>
                    <Field
                      sx={Styles.field_color}
                      InputProps={Styles.font_family()}
                      component={TextField}
                      name="website"
                      variant="standard"
                      placeholder="Website"
                      onChange={(e) => handleInputChange(e, props)}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    className={`vendor-details-textfield_bold ${
                      filledFields.postCode ? "hide_label" : ""
                    }`}
                  >
                    <label className="input_label">
                      {filledFields.postCode ? null : (
                        <span
                          className="asterisk"
                          style={{ color: "red", marginTop: "-3px" }}
                        >
                          *
                        </span>
                      )}
                      Post Code
                    </label>
                    <Field
                      sx={Styles.field_color}
                      component={TextField}
                      name="postCode"
                      variant="standard"
                      placeholder="Post Code"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" color= "red">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z"
                                fill="#777777"
                              />
                              <path
                                d="M20.16 22.79C20.08 22.79 20 22.78 19.93 22.77C19.46 22.71 18.61 22.39 18.13 20.96C17.88 20.21 17.97 19.46 18.38 18.89C18.79 18.32 19.48 18 20.27 18C21.29 18 22.09 18.39 22.45 19.08C22.81 19.77 22.71 20.65 22.14 21.5C21.43 22.57 20.66 22.79 20.16 22.79ZM19.56 20.49C19.73 21.01 19.97 21.27 20.13 21.29C20.29 21.31 20.59 21.12 20.9 20.67C21.19 20.24 21.21 19.93 21.14 19.79C21.07 19.65 20.79 19.5 20.27 19.5C19.96 19.5 19.73 19.6 19.6 19.77C19.48 19.94 19.46 20.2 19.56 20.49Z"
                                fill="#777777"
                              />
                            </svg>
                          </InputAdornment>
                        ),
                        className: "font-family-Exo",
                      }}
                      onChange={(e) => handleInputChange(e, props)}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    className="vendor-details-textfield_bold"
                  >
                    <label className="input_label">
                    {filledFields.vendorName ? null : (
                        <span
                          className="asterisk"
                          style={{ color: "white", marginTop: "-3px" }}
                        >*</span>
                      )}
                      City
                    </label>
                    <Field
                      sx={Styles.field_color}
                      InputProps={Styles.font_family()}
                      component={TextField}
                      name="city"
                      variant="standard"
                      placeholder="City"
                      onChange={(e) => handleInputChange(e, props)}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    className="vendor-details-textfield_bold"
                  >
                    <label className="input_label">
                    {filledFields.vendorName ? null : (
                        <span
                          className="asterisk"
                          style={{ color: "white", marginTop: "-3px" }}
                        >*</span>
                      )}
                      Address
                    </label>
                    <Field
                      sx={Styles.field_color}
                      InputProps={Styles.font_family()}
                      component={TextField}
                      name="address"
                      variant="standard"
                      placeholder="Address"
                      onChange={(e) => handleInputChange(e, props)}
                    />
                  </Grid>
                </Grid>
                <Typography className="font-weight-600 sub-heading margin-bottom-1 margin-top-6 font-family-Exo">
                  Bank Details
                </Typography>
                <Grid container spacing={10}>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    className={`vendor-details-textfield_bold ${
                      filledFields.benificiaryName ? "hide_label" : ""
                    }`}
                  >
                    <label className="input_label">
                      {filledFields.benificiaryName ? null : (
                        <span
                          className="asterisk"
                          style={{ color: "red", marginTop: "-3px" }}
                        >
                          *
                        </span>
                      )}
                      Benificiary Name
                    </label>
                    <Field
                      sx={Styles.field_color}
                      InputProps={Styles.font_family()}
                      component={TextField}
                      name="benificiaryName"
                      variant="standard"
                      placeholder="Benificiary Name"
                      onChange={(e) => handleInputChange(e, props)}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    className={`vendor-details-textfield_bold ${
                      filledFields.accountNumber ? "hide_label" : ""
                    }`}
                  >
                    <label className="input_label">
                      {filledFields.accountNumber ? null : (
                        <span
                          className="asterisk"
                          style={{ color: "red", marginTop: "-3px" }}
                        >
                          *
                        </span>
                      )}
                      Account Number
                    </label>
                    <Field
                      sx={Styles.field_color}
                      InputProps={Styles.font_family()}
                      component={TextField}
                      name="accountNumber"
                      type="number"
                      variant="standard"
                      placeholder="Account Number"
                      onChange={(e) => handleInputChange(e, props)}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    className={`vendor-details-textfield_bold ${
                      filledFields.sortCode ? "hide_label" : ""
                    }`}
                  >
                    <label className="input_label">
                      {filledFields.sortCode ? null : (
                        <span
                          className="asterisk"
                          style={{ color: "red", marginTop: "-3px" }}
                        >
                          *
                        </span>
                      )}
                      Sort Code
                    </label>
                    <Field
                      sx={Styles.field_color}
                      InputProps={Styles.font_family()}
                      component={TextField}
                      name="sortCode"
                      variant="standard"
                      placeholder="Sort Code"
                      onChange={(e) => handleInputChange(e, props)}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    className="vendor-details-textfield_bold"
                  >
                    <label className="input_label">
                    {filledFields.vendorName ? null : (
                        <span
                          className="asterisk"
                          style={{ color: "white", marginTop: "-3px" }}
                        >*</span>
                      )}
                      IBAN
                    </label>
                    <Field
                      sx={Styles.field_color()}
                      InputProps={Styles.font_family()}
                      component={TextField}
                      name="iban"
                      variant="standard"
                      placeholder="IBAN"
                      onChange={(e) => handleInputChange(e, props)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className="vendor-details_btn" lg={12}>
                <Button
                  type="submit"
                  sx={{
                    background: "#2B2B33",
                    fontSize: "14px",
                    fontWeight: 400,
                    fontFamily: `'Exo 2', "Roboto" "sans-serif"`,
                    borderRadius: "8px",
                    gap: "10px",
                    px: "16px",
                    py: "10px",
                    color: "#fff",
                    textTransform: "capitalize",
                    "&:hover": {
                      background: "#2B2B33",
                    },
                  }}
                >
                  Update
                </Button>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default VendorDetails;

//Style
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
    "& input": {
      paddingLeft: "15px",
      pb: "10px",
    },
    "& .MuiInputBase-root:hover": {
      backgroundColor: "#F0F0F2",
    },
    "& :before": {
      borderBottom: "1.6px solid #C4C4CC !important",
    },
  }),
  font_family: (theme) => ({
    className: "font-family-Exo",
  }),
};
