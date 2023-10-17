
import React, { useState } from 'react';
import { RHFTextField } from "@root/components/react-hook-form";
import * as Yup from "yup";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



export const requestADemoDefaultFormValues = {
  name: "",
  password: "",

};

export const requestADemoFormSchema: any = Yup.object().shape({
  name: Yup.string().required("Please enter a correct Email Address"),
  password: Yup.string().required("Please enter a correct Password"),
});

export const requestADemoDefaultFormValuesFunction = (
  data: any = requestADemoDefaultFormValues
) => {
  return {
    name: data?.name,
    password: data?.password,
  };
};

export const requestADemoFormFieldsDataFunction = (showPassword: any, setShowPassword: any, handleToggleVisibility: any) => [
  {
    id: 2,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "name",
      label: "Business Email",
      placeholder: "Enter Email",
      required: true,
    },
  },
  {
    id: 920,
    componentProps: {
      fullWidth: true,
      name: "password",
      label: "Create Password",
      placeholder: "Enter Password",
      type: showPassword ? "text" : "password",
      required: true,
      InputProps: {
        endAdornment: (
          <InputAdornment position="end" sx={{ py: 2 }}>
            <IconButton
              edge="end"
              onClick={handleToggleVisibility}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      },
    },
    gridLength: 12,
    component: RHFTextField,
  }
];
