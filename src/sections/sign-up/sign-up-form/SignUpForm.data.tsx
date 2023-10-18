import { RHFTextField } from "@root/components/react-hook-form";
import * as Yup from "yup";

export const defaultValues = {
  firstname: "", //1
  lastname: "", //2
  businessname: "", //3
  businessemail: "", //4
  businessdomain: "", //5
  phonenumber: "", //6
  noofemployees: "", //7
  country: "", //8
  state: "", //9
  city: "", //10
};

export const validationSchema: any = Yup.object().shape({
  firstname: Yup.string().required("Please enter a First Name"),
  lastname: Yup.string().required("Please enter a Last Name"),
  businessname: Yup.string().required("Please enter a Business Name"),
  businessemail: Yup.string().required("Please enter a Business Email"),
  businessdomain: Yup.string().required("Please enter a Business Domain"),
  phonenumber: Yup.string().required("Please enter a Phone number"),
  noofemployees: Yup.string().required("Please enter a No of Employess"),
  country: Yup.string().required("Please enter a Country Name"),
  state: Yup.string().required("Please enter a State Name"),
  city: Yup.string().required("Please enter a City Name"),
});

export const dataArray = [
  {
    id: 1,
    component: RHFTextField,
    md: 6,
    componentProps: {
      name: "firstname",
      label: "First Name",
      placeholder: "Enter First Name",
    },
  },
  {
    id: 2,
    component: RHFTextField,
    md: 6,
    componentProps: {
      name: "lastname",
      label: "Last Name",
      placeholder: "Enter Last Name",
    },
  },
  {
    id: 3,
    component: RHFTextField,
    md: 6,
    componentProps: {
      name: "businessname",
      label: "Business Name",
      placeholder: "Enter Business Name",
    },
  },
  {
    id: 4,
    component: RHFTextField,
    md: 6,
    componentProps: {
      name: "businessemail",
      label: "Business Email",
      placeholder: "Enter Business Email",
    },
  },
  {
    id: 5,
    component: RHFTextField,
    md: 6,
    componentProps: {
      name: "businessdomain",
      label: "Business Domain",
      placeholder: "Enter Business Domain",
    },
  },
  {
    id: 6,
    component: RHFTextField,
    md: 6,
    componentProps: {
      name: "phonenumber",
      label: "Phone Number",
      placeholder: "Enter Phone Number",
    },
  },
  {
    id: 7,
    component: RHFTextField,
    md: 6,
    componentProps: {
      name: "noofemployees",
      label: "No. of Employees",
      placeholder: "Enter No. of Employees",
    },
  },
  {
    id: 8,
    component: RHFTextField,
    md: 6,
    componentProps: {
      name: "country",
      label: "Country",
      placeholder: "Enter Country",
    },
  },
  {
    id: 9,
    component: RHFTextField,
    md: 6,
    componentProps: {
      name: "state",
      label: "State",
      placeholder: "Enter State",
    },
  },
  {
    id: 10,
    component: RHFTextField,
    md: 6,
    componentProps: {
      name: "city",
      label: "City",
      placeholder: "Enter City",
    },
  },
];
