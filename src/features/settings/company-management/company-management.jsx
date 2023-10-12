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
import businessIcon from "../../../assests/images/settings/business-icon.png";
import editIcon from "../../../assests/images/settings/editIcon.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalButton from "../../../components/global-button/global-button";

const validationSchema = yup.object({
  businessName: yup.string().required("Business Name is required"),
  businessEmail: yup.string().required("Email is required"),
 
});

const Asterisk = styled("span")({
  color: "red",
});

const CompanyManagement= () => {

  const [editMode, setEditMode] = useState(false);
  const [emptyFields, setEmptyFields] = useState([]);

  const formik = useFormik({
    initialValues: {
      businessName: "",
      businessDescription: "",
      businessEmail: "",
      phone: "",
      currency: "",
      country: "",
      BusinessWebsite: "",
    
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Formik valuesdd:", values);
      const emptyFields = [];
      if (!values.businessName) emptyFields.push("businessName");
      if (!values.businessEmail) emptyFields.push("businessEmail");
   

      setEmptyFields(emptyFields);

      if (emptyFields.length === 0) {
      
        toast.success("Profile updated successfully!");
        setEditMode(false);
      }
    },
  });

  const handleEditClick = () => {
    setEditMode(true);
    console.log("true");
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


  return (
    <Grid container spacing={2}>
      <Grid xs={12} sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:7,ml:5,  "@media (max-width: 600px)": {
                    flexDirection: "column",
                    alignItems: "center",
                  },}}  >
       <Box sx={{display:'flex',alignItems:'center'}} gap={4}> 
        <Avatar
          src={businessIcon}
          alt="profile-img"
          sx={{ width: "80px", height: "80px" }}
        />
          <Typography
            variant="body1"
            className="font-family-exo2 primary-color heading-18" sx={{fontWeight:600}}
          >
      Business Name
          </Typography>
          </Box>
          <Box sx={{
             "@media (max-width: 600px)": {
              mt:5,
              width:'100%'
            },
          }}>
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
                  onClick={handleSubmit}
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
        
      </Grid>
      <Grid item xl={8} xs={12} >
        <form onSubmit={handleSubmit}>
          <Grid xs={12} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12 }>
                <Typography variant="h6" className="tertiary-color heading-18 font-family-exo2" sx={{fontWeight:600}}>Company Profile</Typography>
              </Grid>
              <Grid item xl={6} xs={12}sx={{mt:2}}>
                <label htmlFor="businessName" className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}}>
                  <Asterisk>*</Asterisk> Business Name
                </label>
                <TextField
                  id="businessName"
                  name="businessName"
                  size="small"
                  value={formik.values.businessName}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  // disabled={!editMode}
                  error={
                    formik.touched.businessName && Boolean(formik.errors.businessName)
                  }
                  helperText={
                    formik.touched.businessName && formik.errors.businessName
                  }
                  fullWidth
                  sx={{ height: "48px" }}
                />
              </Grid>
              <Grid item xs={12} sx={{mt:2}}>
                <label htmlFor="businessDescription" className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >
                 Business Description
                </label>
                <TextField
                  id="businessDescription"
                  name="businessDescription"
                  // size="small"
                  value={formik.values.businessDescription}
                  onChange={formik.handleChange}
                  // onBlur={handleBlur}
                  // disabled={!editMode}
                  // error={
                  //   formik.touched.businessDescription && Boolean(formik.errors.businessDescription)
                  // }
                  // helperText={formik.touched.businessDescription && formik.errors.businessDescription}
                  fullWidth
                />
              </Grid>
              <Grid item xl={6} xs={12} sx={{mt:2}}>
                <label htmlFor="businessEmail" className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >
                  <Asterisk>*</Asterisk>Business Email
                </label>
                <TextField
                  id="businessEmail"
                  name="businessEmail"
                  size="small"
                  value={formik.values.businessEmail}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  autoComplete={false}
                  // disabled={!editMode}
                  error={formik.touched.businessEmail && Boolean(formik.errors.businessEmail)}
                  helperText={formik.touched.businessEmail && formik.errors.businessEmail}
                  fullWidth
                  
                  sx={{
                   
                      ".MuiTextField-root": {
                       height:'12px',
                       border:'1px solid black'
                      },

                    

                  }}
                />
              </Grid>
              <Grid item xl={6} xs={12} sx={{mt:2}}>
                <label htmlFor="phone"  className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}} >Business Contact Number</label>
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
              <Grid item xl={6} xs={12} sx={{mt:2}}>
                <label htmlFor="BusinessWebsite" className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}}>Business Website</label>
                <TextField
                  id="BusinessWebsite"
                  name="BusinessWebsite"
                  size="small"
                  value={formik.values.BusinessWebsite}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  fullWidth
                
                />
              </Grid>
         

              <Grid item xl={6} xs={12} sx={{mt:2}}>
                <label htmlFor="country" className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}}>Country</label>
                <TextField
                  id="country"
                  name="country"
                  size="small"
                  select
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  // disabled={!editMode}
                  error={
                    formik.touched.country &&
                    Boolean(formik.errors.country)
                  }
                  helperText={
                    formik.touched.country && formik.errors.country
                  }
                  fullWidth
                >
                  <MenuItem value="uk" className="font-family-exo2">UK</MenuItem>
                  <MenuItem value="sweden" className="font-family-exo2">SWEDEN</MenuItem>
                </TextField>
              </Grid>
              <Grid item xl={6} xs={12} sx={{mt:2}}>
                <label htmlFor="currency" className="secondary-color primary-title font-family-exo2" sx={{fontWeight:400}}>Currency</label>
                <TextField
                  id="currency"
                  name="currency"
                  size="small"
                  select
                  value={formik.values.currency}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  // disabled={!editMode}
                  error={formik.touched.currency && Boolean(formik.errors.currency)}
                  helperText={formik.touched.currency && formik.errors.currency}
                  fullWidth
                >
                  <MenuItem value="uk" className="font-family-exo2">UK</MenuItem>
                  <MenuItem value="sweden" className="font-family-exo2">SWEDEN</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12} sx={{ p: 2 }}>
            <Grid container spacing={2}>
             
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid xs={4}></Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CompanyManagement;
