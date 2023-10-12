import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Typography,
  Box,
  styled,
  TextField,
  MenuItem,
} from "@mui/material";
import profile from "../../../assests/images/settings/profile-img.png";
import editIcon from "../../../assests/images/settings/editIcon.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import GlobalButton from "../../../components/global-button/global-button";
import ChangeEmail from '../change-email/change-email'
import ChangePassword from '../change-password/change-password'

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  age: yup.string().required("Age is required"),
  email: yup.string().required("Email is required"),
  // phone: yup.string().required("Phone Nuumber is required"),
  // postalCode: yup.string().required('Postal Code is required'),
  // address: yup.string().required('Address is required'),
});

const Asterisk = styled("span")({
  color: "red",
});

const ProfileManagement = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [emptyFields, setEmptyFields] = useState([]);
  const [isFilled, setIsFilled] = useState(false);

  const [showChangeEmail, setShowChangeEmail] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleEmailClick = () => {
    setShowChangeEmail(true);
    setShowChangePassword(false);
  };

  const handlePasswordClick = () => {
    setShowChangeEmail(false);
    setShowChangePassword(true);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setIsFilled(!!inputValue); // Set isFilled to true if there is any input value
  };

  const formik = useFormik({
    initialValues: {
      firstName: "Nick",
      lastName: "John",
      dateofbirth: null,
      age: "20",
      gender: "",
      citizenship: "",
      email: "",
      phone: "",
      postalCode: "",
      address: "",
    },
    validationSchema,
    onSubmit: (values) => {
      values.dateofbirth = selectedDate
        ? selectedDate.toISOString().slice(0, 10)
        : null; // Update with selected date only
      console.log("Formik valuesdd:", values);
      // resetForm();

      // Check for empty fields
      const emptyFields = [];
      if (!values.firstName) emptyFields.push("firstName");
      if (!values.lastName) emptyFields.push("lastName");
      if (!values.email) emptyFields.push("email");
      // if (!values.phone) emptyFields.push("phone");

      setEmptyFields(emptyFields);

      if (emptyFields.length === 0) {
        // No empty fields, perform update
        toast.success("Profile updated successfully!");
        setEditMode(false);
      }
    },
  });

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    formik.resetForm();
    setEditMode(false);
  };

  const handleBlur = (event) => {
    formik.handleBlur(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit(event);
  };
  const handleDateChange = (date) => {
    formik.setFieldValue("dateOfBirth", date);
    formik.setFieldValue("age", calculateAge(date));
  };
  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return "";

    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const yearDiff = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    let age = yearDiff;

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <Grid item xs={12}>
        {showChangeEmail ? (
          <ChangeEmail />
        ) : showChangePassword ? (
          <ChangePassword />
        ) : (
          <>
    <Grid container spacing={2}>
      <Grid xl={5}  xs={12} sx={{ p: 5 ,display:'flex',alignItems:'center'}} gap={4}>
        <Avatar
          src={profile}
          alt="profile-img"
          sx={{ width: "160px", height: "160px" }}
        />
         <Typography
            variant="body1"
            className="font-family-exo2 primary-color heading-18" sx={{fontWeight:600}}
          >
            Nick John
          </Typography>
      </Grid>
      <Grid xl={7} xs={12} sx={{ mt: 10 ,'@media (max-width: 1536px)': {
          mt:0,
        },}}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" ,"@media (max-width: 600px)": {
                    justifyContent: "center",
                    ml:3
                  },}}>
          {editMode ? (
            <>
              <Box
                className="filter-below-btn"
                sx={{
                  display: "flex",
                  float: "right",
                  "@media (max-width: 600px)": {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width:'100%',
                    float: "none",
                  },
                }}
              >
                <Button
                  className="btn1 font-family-exo2"
                  onClick={handleCancelClick}
                  sx={{
                    marginRight: "8px",
                    "@media (max-width: 600px)": {
                      width: "100%",
                    },
                    "&:hover": {
                      borderColor: "#000000",
                      color: "#000000",
                    },
                  }}
                >
                  Cancel
                </Button>
                &nbsp;
                <Button
                  className="btn2"
                  type="submit"
                  onClick={handleSubmit} // Added onClick event handler for form submission
                  sx={{
                    color: "#FFFFFF",
                    background: "#000000",
                    "&:hover": {
                      background: "#000000",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Update
                </Button>
              </Box>
              {emptyFields.length > 0 && (
                <Typography variant="body2" color="error" sx={{mt:2}}>
                  Please fill in all required fields.
                </Typography>
              )}
            </>
          ) : (
            <GlobalButton
              variant="accent"
              btnName="accent"
              btnText="Edit Profile"
              onClick={handleEditClick}
              endIcon={
                <img src={editIcon} alt="Export Text" width={16} height={16} />
              }
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "flex-end",
            mt:4
          }}
        >
          <Typography
            variant="body1"
            className="font-family-exo2 primary-title"
            sx={{ color: "#166088",cursor:'pointer', fontSize: 16, fontWeight: 400}}
            onClick={handleEmailClick}
          >
            Change Email
          </Typography>
          <Typography
            variant="body1"
            className="font-family-exo2 primary-title"
            sx={{ color: "#166088",cursor:'pointer', fontSize: 16, fontWeight: 400}}
            onClick={handlePasswordClick}
          >
            Change Password
          </Typography>
        </Box>
      </Grid>
      <Grid item xl={8} xs={12} >
        <form onSubmit={handleSubmit}>
          <Grid xs={12} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" className="tertiary-color  heading-18 font-family-exo2" sx={{fontWeight:600}}>Personal Details</Typography>
              </Grid>
              <Grid item xl={6} xs={12}>
                <label htmlFor="firstName" className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}}>
                  <Asterisk>*</Asterisk> First Name
                </label>
                <TextField
                  id="firstName"
                  name="firstName"
                  size="small"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  disabled={!editMode}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  fullWidth
                  sx={{ height: "48px", marginRight: '89px' }}
                />
              </Grid>
              <Grid item xl={6} xs={12}>
                <label htmlFor="lastName" className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}}>
                  <Asterisk>*</Asterisk> Last Name
                </label>
                <TextField
                  id="lastName"
                  name="lastName"
                  size="small"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  disabled={!editMode}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  fullWidth
                />
              </Grid>
              <Grid item xl={6} xs={12}>
                <label htmlFor="dateofbirth"  className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >Date of Birth</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={formik.values.dateOfBirth}
                    onChange={handleDateChange}
                    disabled={!editMode}
                    size="small"
                    sx={{ width: "400px" , "@media (max-width: 1536px)": {
                      width: "100%",
                    },}}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xl={6} xs={12} sx={{ mt: 2 }}>
                <label htmlFor="age" className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >Age</label>
                <TextField
                  id="age"
                  name="age"
                  size="small"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  disabled={!editMode}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
                  fullWidth
                />
              </Grid>
              <Grid item xl={6} xs={12}>
                <label htmlFor="gender"  className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >Gender</label>
                <TextField
                  id="gender"
                  name="gender"
                  size="small"
                  select
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  // disabled={!editMode}
                  error={formik.touched.gender && Boolean(formik.errors.gender)}
                  helperText={formik.touched.gender && formik.errors.gender}
                  fullWidth
                  
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </TextField>
              </Grid>

              <Grid item xl={6} xs={12}>
                <label htmlFor="citizenship"  className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >Citizenship</label>
                <TextField
                  id="citizenship"
                  name="citizenship"
                  size="small"
                  select
                  value={formik.values.citizenship}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  // disabled={!editMode}
                
                  fullWidth
                >
                  <MenuItem value="option1">Uk</MenuItem>
                  <MenuItem value="option2">Sweden</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" className="tertiary-color  heading-18 font-family-exo2" sx={{fontWeight:600}}>Contact Details</Typography>
              </Grid>
              <Grid item xl={6} xs={12}>
                <label htmlFor="email"  className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >
                  <Asterisk>*</Asterisk> Email
                </label>
                <TextField
                  id="email"
                  name="email"
                  size="small"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  autoComplete={false}
                  // disabled={!editMode}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                  
                  sx={{
                   
                      ".MuiTextField-root": {
                       height:'12px',
                       border:'1px solid black'
                      },

                    

                  }}
                />
              </Grid>
              <Grid item xl={6} xs={12}>
                <label htmlFor="phone"  className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >Phone Number</label>
                <TextField
                  id="phone"
                  name="phone"
                  size="small"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                 
                  fullWidth
                  sx={{

                  }}
                
                />
              </Grid>
              {/* <Grid sx={{ mt: 2 }}> </Grid> */}
              <Grid item xl={6} xs={12}>
                <label htmlFor="postalCode"   className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >Postal Code</label>
                <TextField
                  id="postalCode"
                  name="postalCode"
                  size="small"
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  fullWidth
                
                />
              </Grid>
              <Grid item xl={6} xs={12}>
                <label htmlFor="address" className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >Address</label>
                <TextField
                  id="address"
                  name="address"
                  size="small"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  fullWidth
                
                />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid xs={4}></Grid>
      <ToastContainer />
       
    </Grid>
    </>)}
    </Grid>
  );
};

export default ProfileManagement;
