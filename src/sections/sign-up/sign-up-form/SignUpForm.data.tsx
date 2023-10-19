import { RHFTextField } from "@root/components/react-hook-form";
import * as Yup from "yup";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export const defaultValues = {
  business_name: "Accountant Help Squad", //1
  first_name: "", //2
  last_name: "", //3
  email: "", //4
  password: "", //5
  password_confirmation: "", //6
};

export const validationSchema: any = Yup.object().shape({
  business_name: Yup.string(),
  first_name: Yup.string().required("First Name is Requried"),
  last_name: Yup.string().required("Last Name is Required"),
  email: Yup.string().required("Email is Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const dataArrayFunction = ({
  showPassword,
  togglePassword,
  showConfirmPassword,
  toggleConfirmPassword,
}: any) => [
  {
    id: 1,
    component: RHFTextField,
    componentProps: {
      name: "business_name",
      label: "Business Name",
      placeholder: "Enter Business Name",
      disabled: true,
    },
  },
  {
    id: 2,
    component: RHFTextField,
    componentProps: {
      name: "first_name",
      label: "First Name",
      placeholder: "Enter First Name",
    },
  },
  {
    id: 3,
    component: RHFTextField,
    componentProps: {
      name: "last_name",
      label: "Last Name",
      placeholder: "Enter Last Name",
    },
  },
  {
    id: 4,
    component: RHFTextField,
    componentProps: {
      name: "email",
      label: "Email",
      placeholder: "Enter Email",
    },
  },
  {
    id: 5,
    component: RHFTextField,
    componentProps: {
      name: "password",
      label: "Password",
      placeholder: "Enter Password",
      type: showPassword ? "text" : "password",
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={togglePassword}>
              {showPassword ? (
                <RemoveRedEyeOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </IconButton>
          </InputAdornment>
        ),
      },
    },
  },
  {
    id: 6,
    component: RHFTextField,
    componentProps: {
      name: "password_confirmation",
      label: "Confirm Password",
      placeholder: "Enter Confirm Password",
      type: showConfirmPassword ? "text" : "password",
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={toggleConfirmPassword}>
              {showConfirmPassword ? (
                <RemoveRedEyeOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </IconButton>
          </InputAdornment>
        ),
      },
    },
  },
];
