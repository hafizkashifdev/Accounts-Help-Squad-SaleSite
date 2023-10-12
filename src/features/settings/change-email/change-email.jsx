import React, { useState ,useEffect} from "react";
import { Grid, Typography,styled, TextField,InputAdornment } from '@mui/material'
import { useFormik } from "formik";
import * as yup from "yup";
import ProfileManagement from "../profile-management/profile-management";
import GlobalButton from "../../../components/global-button/global-button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EmailForm from "../email-form/email-form";
const validationSchema = yup.object({
   
  password: yup.string().required("Password is required"),
  email: yup.string().required("Email is required"),
  
  });
  


const ChangeEmail = () => {

    const [emptyFields, setEmptyFields] = useState([]);
    const [emailTemplate,setEmailTemplate]=useState(false);

    const[ProfileManage,setProfileMange]=useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const[ConfirmPassword,setConfirmPassword]=useState(true);
    const [showEmailForm,setShowEmailForm]=useState(false);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (event) => {
      if (formik.values.email.trim() !== "") {
        setOpen(true);
      }
    };
    
    const handleClose = () => {
      setOpen(false);
    };


    const handleClickUserProfile=()=>{
      setProfileMange(true);
    }

    const handleUpdateEmail = () => {
      // Display timer for 10 seconds
      // setShowEmailForm(true);
      setTimeout(() => {
        setEmailTemplate(true);
      }, 10000);
    };

    const formik = useFormik({
        initialValues: {
          password:"Abc123456789",
          email: "",
        },
        validationSchema,
        onSubmit: (values) => {
         
          console.log("Formik valuesdd:", values);
          
        },
      });

      const handleBlur = (event) => {
        formik.handleBlur(event);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
      
        // Check for empty field based on current state
        const fieldName = ConfirmPassword ? "password" : "email";
        const fieldValue = formik.values[fieldName];
      
        if (!fieldValue) {
          formik.setFieldError(fieldName, `${fieldName} is required`);
          return; // Exit the function without submitting the form
        }
      
        // Submit the form
        await formik.handleSubmit(event);
      
        if (ConfirmPassword) {
          setConfirmPassword(false);
        }
      };
      
      useEffect(() => {
        if (open) {
          const timer = setTimeout(() => {
            handleClose();
          }, 10000);
      
          return () => clearTimeout(timer); 
        }
      }, [open]);
     
  return (
    <>
    {ProfileManage ? <ProfileManagement/>:(<Grid container spacing={2}>
        <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between', mt:10,ml:5}} >
            <Typography>
                Update Email
            </Typography>
            <Typography sx={{cursor:'pointer',color:'#166088'}} className="primary-title font-family-exo2" onClick={handleClickUserProfile}>
                User Profile
            </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
       {ConfirmPassword && 
       <Grid item xl={12} xs={12} sx={{ p: 5 }}>
      <label
        htmlFor="password"
        className="secondary-color primary-title font-family-exo2"
        sx={{ fontWeight: 400 }}
      >
        Current Password
      </label>
      <TextField
  id="password"
  name="password"
  size="small"
  value={formik.values.password}
  onChange={formik.handleChange}
  onBlur={handleBlur}
  autoComplete={false}
  error={formik.touched.password && Boolean(formik.errors.password)}
  helperText={formik.touched.password && formik.errors.password}
  fullWidth
  type={showPassword ? 'text' : 'password'}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        {showPassword ? (
          <VisibilityIcon
            onClick={() => setShowPassword(false)}
            sx={{ cursor: 'pointer' }}
          />
        ) : (
          <VisibilityOffIcon
            onClick={() => setShowPassword(true)}
            sx={{ cursor: 'pointer' }}
          />
        )}
      </InputAdornment>
    ),
  }}
  sx={{
    '.MuiTextField-root': {
      height: '12px',
      border: '1px solid black',
    },
  }}
/>

    </Grid>} 

    {!ConfirmPassword && (
  <Grid item xl={12} xs={12} sx={{ p: 5 }}>
    <label
      htmlFor="email"
      className="secondary-color primary-title font-family-exo2"
      sx={{ fontWeight: 400 }}
    >
      New Email
    </label>
    <TextField
      id="email"
      name="email"
      size="small"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={handleBlur}
      autoComplete={false}
      error={formik.touched.email && Boolean(formik.errors.email)}
      helperText={formik.touched.email && formik.errors.email}
      fullWidth
      sx={{
        ".MuiTextField-root": {
          height: "12px",
          border: "1px solid black",
        },
      }}
    />
  </Grid>
)}

 
        </form>
       
       
        <Grid xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      {ConfirmPassword ? (
        <GlobalButton
          variant="accent"
          btnName="accent"
          btnText="Next"
          sx={{ width: '91px', height: '48px' }}
          onClick={handleSubmit} 
        />
      ) : (
        <GlobalButton
          variant="accent"
          btnName="accent"
          btnText="Update"
          sx={{ width: '91px', height: '48px' }}
          onClick={handleClickOpen}
        />
      )}
    </Grid>
    
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    sx={{justifyContent:'center',p:2}}
  >
    <DialogTitle id="alert-dialog-title" className="secondary-heading primary-color font-family-exo2" sx={{ fontWeight: 600,display:'flex' ,justifyContent:'center',mt:2}}>
      {" Let’s Get You Verified"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description" sx={{display:'flex' ,justifyContent:'center'}}>
      {<EmailForm/>}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
     
    </DialogActions>
  </Dialog>
  {/* } */}
             
             
    </Grid>
    )}
    
    </>
  )
}

export default ChangeEmail
