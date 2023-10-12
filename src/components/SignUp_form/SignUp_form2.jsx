import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  FormGroup,
} from "@mui/material";
import { withStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import ErrorIcon from "@mui/icons-material/Error";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./signUp.scss";

const validationSchema = Yup.object().shape({
  number: Yup.string()
    .matches(/^\d+$/, "Please enter digits only")
    .min(
      7,
      <span className="error-color font-family-Exo">
        <ErrorIcon className="signup_error-icon" />
        Please Enter Registration Number
      </span>
    )
    .max(30, "Maximum number limit exceeded")
    .required(
      <span className="error-color font-family-Exo">
        <ErrorIcon className="signup_error-icon" />
        Please Enter Registration Number
      </span>
    ),

  mobile: Yup.string()
    .min(
      7,
      <span className="error-color font-family-Exo">
        <ErrorIcon className="signup_error-icon" />
        Please Enter your Phone Number
      </span>
    )
    .max(30, "Maximum number limit exceeded")
    .required(
      <span className="error-color font-family-Exo">
        <ErrorIcon className="signup_error-icon" />
        Please Enter your Phone Number
      </span>
    ),
});

const initialValues = {
  number: "",
  mobile: "",
};

const MySignUpForm2 = () => {
  const [showNumber, setShowNumber] = useState(false);

  const handleClickshowNumber = () => {
    setShowNumber((show) => !show);
  };

  const handleMouseDownNumber = (event) => {
    event.preventDefault();
  };

  const [filledFields, setFilledFields] = useState({});

  const handleInputChange = (e, formik) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    setFilledFields((prevFilledFields) => ({
      ...prevFilledFields,
      [name]: value.trim() !== "",
    }));
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    setFilledFields({});
    handleSignUp();
  };

  const handleSignUp = () => {
    const toastText = "Form submit successfully Please Login";
    signUp();
    toast.success(toastText);
  };

  const signUp = () => {
    console.log("signUp");
  };

  const labelstyles = (theme) => ({
    root: {
      "& .MuiFormControlLabel-label": {
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: "Exo 2",
        color: "#4C4C4C",
      },
    },
  });

  const LabelStyle = withStyles(labelstyles)(FormControlLabel);

  const checkBoxStyles = (theme) => ({
    root: {
      "&$checked": {
        color: "black",
      },
    },
    checked: {},
  });

  const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

  return (
    <Grid
      container
      className="height-100vh align-center justify-center signup_container"
    >
      <Box
        sx={{
          width: 600,
          borderRadius: "16px",
          p: "25px",
          border: "1px solid rgba(204, 204, 204, 0.5)",
          filter: "dropShadow(0px 0px 4px rgba(204, 204, 204, 0.1))",
          borderRadius: "16px",
        }}
      >
        <div className="sign_heading">
          <span style={{ color: "#4C4C4C", marginRight: "10px" }}>
            Welcome to
          </span>
          Accountants Pact!
        </div>
        <div className="text-mute">Let’s Get Started</div>
        <div
          style={{
            fontFamily: "Exo 2",
            fontWeight: "400",
            color: "#7F7F7F",
            marginBottom: "10px",
          }}
        >
          Select Product
        </div>
        <div>
          <FormGroup aria-label="position" row sx={{ mb: "60px", gap: "33px" }}>
            <LabelStyle control={<CustomCheckbox />} label="Account Payable" />
            <LabelStyle
              control={<CustomCheckbox />}
              label="Account Receivable"
            />
            <LabelStyle control={<CustomCheckbox />} label="Cash Flow" />
          </FormGroup>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => {
            const { values, errors, touched, setFieldValue } = props;

            return (
              <Form>
                <Grid container spacing={7}>
                  <Grid
                    item
                    xs={12}
                    className={`textfield_bold ${
                      filledFields.number ? "hide_label" : ""
                    }`}
                    sx={{ height: "75px" }}
                  >
                    <label
                      className={`signup_label ${
                        touched.number && errors.number ? "error_label" : ""
                      }`}
                    >
                      {filledFields.number ? null : (
                        <span
                          className="asterisk error-color"
                          style={{
                            marginTop: "-5px",
                          }}
                        >
                          *
                        </span>
                      )}
                      Registration Number(CRN)
                    </label>
                    <Field
                      className="signinform_textfield"
                      component={TextField}
                      name="number"
                      variant="standard"
                      fullWidth
                      placeholder="Enter Registration Number"
                      onChange={(e) => handleInputChange(e, props)}
                      type={showNumber ? "text" : "password"}
                      sx={styles.field__color}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickshowNumber}
                              onMouseDown={handleMouseDownNumber}
                              edge="end"
                              sx={{
                                margin: 0.7,
                                pb: 2,
                                transform: "scaleX(-1)",
                              }}
                            >
                              {showNumber ? <RiEyeOffLine /> : <RiEyeLine />}
                            </IconButton>
                          </InputAdornment>
                        ),
                        className: "font-family-Exo",
                        fontSize: "14px",
                        paddingLeft: "20px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} className="margin-top-2 textfield_bold">
                    <label htmlFor="companyName" className="signup_label">
                      Company Name
                    </label>
                    <Field
                      component={TextField}
                      id="companyName"
                      variant="filled"
                      hiddenLabel
                      size="small"
                      fullWidth
                      margin="none"
                      name="companyName"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment sx={{ p: "15px", mb: "5px" }}>
                            -
                          </InputAdornment>
                        ),
                        variant: "standard",
                        disableUnderline: true,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`textfield_bold ${
                      filledFields.mobile ? "hide_label" : ""
                    }`}
                    sx={{ height: "75px" }}
                  >
                    <label
                      className={`signup_label ${
                        touched.mobile && errors.mobile ? "error_label" : ""
                      }`}
                    >
                      {filledFields.mobile ? null : (
                        <span
                          className="asterisk error-color"
                          style={{
                            marginTop: "-5px",
                          }}
                        >
                          *
                        </span>
                      )}
                      Phone Number
                    </label>
                    <Field
                      className="signinform_textfield"
                      component={TextField}
                      name="mobile"
                      variant="standard"
                      fullWidth
                      placeholder="Enter Phone Number"
                      onChange={(e) => handleInputChange(e, props)}
                      type="number"
                      sx={styles.field__color}
                      InputProps={styles.font_family()}
                    />
                  </Grid>
                  <Grid item xs={12} className="margin-top-2">
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      type="submit"
                      sx={{
                        borderRadius: "8px",
                        mt: 1,
                        background: "#2B2B33",
                        color: "white",
                        "&:hover": {
                          background: "black",
                          color: "white",
                          border: "1px solid black",
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Grid>
  );
};

export default MySignUpForm2;

const styles = {
  field__color: () => ({
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
    "&:before": {
      borderColor: "black",
    },
    "&:after": {
      borderColor: "black",
    },
    "& .MuiInputBase-root:hover": {
      backgroundColor: "#F0F0F2",
    },
  }),
  font_family: () => ({
    className: "font-family-Exo",
    fontSize: "14px",
    paddingLeft: "20px",
  }),
};
