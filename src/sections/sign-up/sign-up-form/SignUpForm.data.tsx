
import { RHFTextField } from "@root/components/react-hook-form";
import * as Yup from "yup";


export const requestADemoDefaultFormValues = {
  firstname: "",
  lastname: "",
  businessname: "",
  businessemail: "",
  businessdomain: "",
  phonenumber: "",
  noofemployees: "",
  country: "",


};

export const requestADemoFormSchema: any = Yup.object().shape({
  firstname: Yup.string().required("Please enter a First Name"),
  lastname: Yup.string().required("Please enter a Last Name"),
  businessname: Yup.string().required("Please enter a Business Name"),
  businessemail: Yup.string().required("Please enter a Business Email"),
  businessdomain: Yup.string().required("Please enter a Business Domain"),
  phonenumber: Yup.string().required("Please enter a Phone number"),
  noofemployees: Yup.string().required("Please enter a No of Employess"),
  country: Yup.string().required("Please enter a Country Name"),

});

export const requestADemoDefaultFormValuesFunction = (
  data: any = requestADemoDefaultFormValues
) => {
  return {
    firstname: data?.firstname,
    lastname: data?.lastname,
    businessname: data?.businessname,
    businessemail: data?.businessemail,
    businessdomain: data?.businessdomain,
    phonenumber: data?.phonenumber,
    noofemployees: data?.noofemployees,
    country: data?.country,

  };
};

export const requestADemoFormFieldsDataFunction = (showPassword: any, setShowPassword: any, handleToggleVisibility: any) => [
  {
    id: 1,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "firstname",
      label: "First Name",
      placeholder: "Enter First Name",
      required: true,
    },
  },
  {
    id: 2,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "lastname",
      label: "Last Name",
      placeholder: "Enter Last Name",
      required: true,
    },

  },
  {
    id: 3,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "businessname",
      label: "Business Name",
      placeholder: "Enter Business Name",
      required: true,
    },
  },
  {
    id: 4,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "businessemail",
      label: "Business Email",
      placeholder: "Enter Business Email",
      required: true,
    },
  },
  {
    id: 5,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "businessdomain",
      label: "Business Domain",
      placeholder: "Enter Business Domain",
      required: true,
    },
  },
  {
    id: 6,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "phonenumber",
      label: "Phone Number",
      placeholder: "Enter Phone Number",
      required: true,
    },
  },
  {
    id: 7,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "noofemployees",
      label: "No. of Employees",
      placeholder: "Enter No. of Employees",
      required: true,
    },
  },
  {
    id: 8,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "country",
      label: "Country",
      placeholder: "Enter Country",
      required: true,
    },
  }
];
