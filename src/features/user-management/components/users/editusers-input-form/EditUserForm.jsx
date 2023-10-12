import React, { useState } from "react";
import { Grid, Button, MenuItem, Checkbox, InputAdornment } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField, Select } from "formik-material-ui";
import * as Yup from "yup";
import "./edituser.scss";
import { ReactComponent as Down } from '../../../../../assests/svg/chev-bottom.svg'

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string().email("Invalid email"),
  phone: Yup.number("Phone must be a `number` type"),
  company: Yup.string(),
  role: Yup.string(),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  role: "",
};

const companyOptions = [
  { value: "Mortgage Basket", label: "Mortgage Basket" },
  { value: "Share my Dine", label: "Share my Dine" },
  { value: "Identity Gram", label: "Identity Gram" },
  { value: "FosterApp", label: "FosterApp" },
];

const roleOptions = [
  { value: "Manager", label: "Manager" },
  { value: "Admin", label: "Admin" },
];

const EditUserForm = () => {
  const [filledFields, setFilledFields] = useState({});

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
  };

  const handleClear = (resetForm) => {
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
        const { values, resetForm } = props;

        return (
          <Form noValidate autoComplete="off" className="edituser_form">
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  First Name
                </label>
                <Field
                  sx={Styles.field_color}
                  component={TextField}
                  name="firstName"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo"
                  }}
                  placeholder="First Name"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Last Name
                </label>
                <Field
                  sx={Styles.field_color}
                  component={TextField}
                  name="lastName"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo"
                  }}
                  placeholder="Last Name"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Email
                </label>
                <Field
                  sx={Styles.field_color}
                  component={TextField}
                  name="email"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo"
                  }}
                  placeholder="Email"
                  type="email"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Phone
                </label>
                <Field
                  sx={Styles.field_color}
                  component={TextField}
                  name="phone"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo"
                  }}
                  placeholder="Phone"
                  type="number"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Company
                </label>
                <Field
                  sx={Styles.field_color}
                  component={Select}
                  name="company"
                  variant="standard"
                  IconComponent={Down}
                  onChange={(e) => handleInputChange(e, props)}
                  inputProps={{
                    className: "font-family-Exo"
                  }}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return <span style={{color:'#b8b8b8', fontFamily:'Exo 2', fontSize: "16px", fontWeight: 400}} shrink>Select</span>;
                    }
                    return selected;
                  }}
                >
                  {companyOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                        className="checkbox-hidden"
                        checked={option.value === values.company}
                        color="primary"
                      />
                      <span className="checkbox-label">{option.label}</span>
                    </MenuItem>
                  ))}
                </Field>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Role
                </label>
                <Field
                  sx={Styles.field_color}
                  component={Select}
                  name="role"
                  variant="standard"
                  IconComponent={Down}
                  onChange={(e) => handleInputChange(e, props)}
                  inputProps={{
                    className: "font-family-Exo",
                  }}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return <span style={{color:'#b8b8b8', fontFamily:'Exo 2', fontSize: "16px", fontWeight: 400}} shrink>Select</span>;
                    }
                    return selected;
                  }}
                >
                  {roleOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                        className="checkbox-hidden"
                        checked={option.value === values.role}
                        color="primary"
                      />
                      <span className="checkbox-label">{option.label}</span>
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
            </Grid>
            <Grid className="useredit_btn">
              <Button variant="outlined" onClick={() => handleClear(resetForm)}>
                Clear
              </Button>
              <Button variant="contained" type="submit">
                Update
              </Button>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EditUserForm;

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
    "& .MuiInputBase-input": {
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
      borderBottom: "1.6px solid #C4C4CC !important",
    },
    "&:after": {
      borderColor: "#2B2B33",
    },
  }),
};
