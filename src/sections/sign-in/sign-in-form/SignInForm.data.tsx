import { RHFTextField } from "@root/components/react-hook-form";
import * as Yup from "yup";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export const requestADemoDefaultFormValues = {
  email: "",
  password: "",
};

export const requestADemoFormSchema: any = Yup.object().shape({
  email: Yup.string().required("Email is Required"),
  password: Yup.string().required("Password is required"),
});

export const requestADemoDefaultFormValuesFunction = (
  data: any = requestADemoDefaultFormValues
) => {
  return {
    email: data?.email,
    password: data?.password,
  };
};

export const requestADemoFormFieldsDataFunction = (
  showPassword: any,
  handleToggleVisibility: any
) => [
  {
    id: 2,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      name: "email",
      label: "Business Email",
      placeholder: "Enter Email",
    },
  },
  {
    id: 920,
    componentProps: {
      name: "password",
      label: "Create Password",
      placeholder: "Enter Password",
      type: showPassword ? "text" : "password",
      InputProps: {
        endAdornment: (
          <InputAdornment position="end" sx={{ py: 2 }}>
            <IconButton edge="end" onClick={handleToggleVisibility}>
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
    gridLength: 12,
    component: RHFTextField,
  },
];
