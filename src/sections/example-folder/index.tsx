import {
  RHFDatePicker,
  RHFSelect,
  RHFTextField,
} from "@root/components/react-hook-form";
import * as Yup from "yup";

export const defaultValues = {
  textField: "",
  select: "",
  mulitSelect: [],
  datePicker: new Date(),
};

export const validationSchema = Yup.object().shape({
  textField: Yup.string().required("Required"),
  select: Yup.string().required("Required"),
  mulitSelect: Yup.mixed().required("Required"),
  datePicker: Yup.date().required("Required"),
});

export const dataArray = [
  {
    id: 1,
    componentProps: {
      name: "textField",
      label: "TextField",
      placeholder: "TextField",
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 2,
    componentProps: {
      name: "select",
      label: "Select",
      placeholder: "Select",
      options: ["BE", "BE1", "BE2"],
    },
    component: RHFSelect,
    md: 12,
  },
  {
    id: 3,
    componentProps: {
      name: "mulitSelect",
      label: "MulitSelect",
      multiple: true,
      options: ["BE", "BE1", "BE2"],
    },
    component: RHFSelect,
    md: 12,
  },
  {
    id: 4,
    componentProps: {
      name: "datePicker",
      label: "DatePicker",
    },
    component: RHFDatePicker,
    md: 12,
  },
];
