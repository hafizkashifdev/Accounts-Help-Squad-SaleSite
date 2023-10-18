import { RHFTextField } from "@root/components/react-hook-form";
import * as Yup from "yup";
export const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  phoneNo: "",
  officeAddress: "",
  subject: "",
  comments: "",
};

export const contactUsFormSchema: any = Yup.object().shape({
  first_name: Yup.string().required("Frist Name is Required"),
  last_name: Yup.string().required("Last Name is Required"),
  email: Yup.string().required("Email is Required"),
  phoneNo: Yup.string().required("Phone No. is Required"),
  officeAddress: Yup.string(),
  subject: Yup.string().required("Subject is Required"),
  comments: Yup.string(),
});

export const dataArray = [
  {
    id: 1,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "first_name",
      label: "First Name",
      placeholder: "Enter First Name",
    },
  },
  {
    id: 2,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "last_name",
      label: "Last Name",
      placeholder: "Enter Last Name",
    },
  },
  {
    id: 3,
    componentProps: {
      fullWidth: true,
      name: "email",
      label: "Email",
      placeholder: "Enter Email",
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      fullWidth: true,
      name: "phoneNo",
      label: "Phone No",
      placeholder: "Enter Phone No",
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 5,
    componentProps: {
      fullWidth: true,
      name: "subject",
      label: "Subject",
      placeholder: "Enter Subject",
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 6,
    componentProps: {
      fullWidth: true,
      name: "officeAddress",
      label: "Office Address",
      placeholder: "Enter Office Address",
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 7,
    componentProps: {
      fullWidth: true,
      name: "comments",
      label: "Additional Comments (optional)",
      placeholder: "Enter your comments here",
      multiline: true,
      rows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
