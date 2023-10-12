import React, { useState } from "react";
import { Grid, Button, IconButton, InputAdornment, Input } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField, Select } from "formik-material-ui";
import * as Yup from "yup";
import "./signin.scss";
import { Error } from '@mui/icons-material';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';


const validationSchema = Yup.object().shape({
  email: Yup.string().email(<span style={{ color: "rgba(255, 85, 85, 1)" }}><Error style={{ marginRight: "7px", marginBottom: "-3px", fontSize: "medium", color: "rgba(255, 85, 85, 1)", transform: "rotate(180deg)" }} /> Please enter a correct Email Address</span>)
    .required(<span style={{ color: "rgba(255, 85, 85, 1)" }}><Error style={{ marginRight: "7px", marginBottom: "-3px", fontSize: "medium", color: "rgba(255, 85, 85, 1)", transform: "rotate(180deg)" }} /> Please enter a correct Email Address</span>),
  password: Yup.string()
    .required(<span style={{ color: "rgba(255, 85, 85, 1)" }}><Error style={{ marginRight: "7px", marginBottom: "-3px", fontSize: "medium", color: "rgba(255, 85, 85, 1)", transform: "rotate(180deg)" }} /> Please enter a correct password</span>)
    .min(6, <span style={{ color: "rgba(255, 85, 85, 1)" }}><Error style={{ marginRight: "7px", marginBottom: "-3px", fontSize: "medium", color: "rgba(255, 85, 85, 1)", transform: "rotate(180deg)" }} /> Password must be at least 6 characters</span>),
});

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
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

  const handleSubmit = (values, { resetForm }) => {
    console.log(values); // Handle form submission logic here
    resetForm();
    setFilledFields({});
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => {
        const { values, errors, touched } = props;

        return (
          <Form noValidate autoComplete="off" className="signin_form">
            <Grid className="signin_forminputs">
              <Grid item xs={6} className={`textfield_bold ${filledFields.email ? "hide_label" : ""}`} sx={{ marginTop: "3rem", height: "75px" }}>
                <label className={`input_label ${touched.email && errors.email ? "error_label" : ""}`}>
                  {filledFields.email ? null : <span className="asterisk" style={{ color: "rgba(255, 85, 85, 1)", marginTop: "-5px" }}>*</span>}
                  Business Email
                </label>
                <Field
                  className="signinform_textfield"
                  component={TextField}
                  name="email"
                  variant="standard"
                  placeholder="Enter Email"
                  type="email"
                  onChange={(e) => handleInputChange(e, props)}
                  InputProps={{
                    style: {
                      paddingLeft: '20px'
                    }
                  }}
                  sx={{
                    '& label': {
                      color: 'black',
                    },
                    '& label.Mui-focused': {
                      color: 'black',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'black',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'black',
                      },
                      '&:hover fieldset': {
                        borderColor: 'black',
                        borderWidth: '0.15rem',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'black',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6} className={`textfield_bold ${filledFields.password ? "hide_label" : ""}`} sx={{ marginTop: "3rem", height: "75px" }}>
                <label className={`input_label ${touched.password && errors.password ? "error_label" : ""}`}>
                  {filledFields.password ? null : <span className="asterisk" style={{ color: "rgba(255, 85, 85, 1)", marginTop: "-5px" }}>*</span>}
                  Create Password
                </label>
                <Field
                  className="signinform_textfield"
                  component={TextField}
                  name="password"
                  variant="standard"
                  placeholder="Enter Password"
                  onChange={(e) => handleInputChange(e, props)}
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  sx={{
                    '& label': {
                      color: 'black',
                    },
                    '& label.Mui-focused': {
                      color: 'black',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'black',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'black',
                      },
                      '&:hover fieldset': {
                        borderColor: 'black',
                        borderWidth: '0.15rem',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'black',
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <RiEyeLine /> : <RiEyeOffLine className="rotate_icon" />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: {
                      paddingLeft: '20px',
                    }
                  }}
                />

              </Grid>

              <Button
                className="signin_btn"
                size="large"
                sx={{
                  backgroundColor: "#666666",
                  color: "#fff",
                  marginTop: "5rem",
                  "&:hover": {
                    backgroundColor: "black",
                    '&:hover': {
                      background: 'black',
                      color: 'white',
                      border: '1px solid black',
                    },
                  },
                }}
                type="submit"
              >
                Sign In
              </Button>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;

