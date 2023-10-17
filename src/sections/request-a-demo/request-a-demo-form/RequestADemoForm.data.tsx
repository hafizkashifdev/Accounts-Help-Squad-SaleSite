import { RHFTextField } from "@root/components/react-hook-form";
import * as Yup from "yup";
export const requestADemoDefaultFormValues = {
  name: "",
  email: "",
  phoneNo: "",
  comments: "",
};

export const requestADemoFormSchema: any = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().required("Email is Required"),
  phoneNo: Yup.string().required("Phone No. is Required"),
  comments: Yup.string(),
});

export const requestADemoDefaultFormValuesFunction = (
  data: any = requestADemoDefaultFormValues
) => {
  return {
    name: data?.name,
    email: data?.email,
    phoneNo: data?.phoneNo,
    comments: data?.comments,
  };
};

export const requestADemoFormFieldsDataFunction = (isFieldDisable = false) => [
  {
    id: 2,
    component: RHFTextField,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "name",
      label: "Name",
      placeholder: "Enter Name",
      disabled: isFieldDisable,
    },
  },
  {
    id: 920,
    componentProps: {
      fullWidth: true,
      name: "email",
      label: "Email",
      placeholder: "Enter Email",
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 150,
    componentProps: {
      fullWidth: true,
      name: "phoneNo",
      label: "Phone No",
      placeholder: "Enter Phone No",
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 850,
    componentProps: {
      fullWidth: true,
      name: "comments",
      label: "Additional Comments (optional)",
      placeholder: "Enter your comments here",
      multiline: true,
      rows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
