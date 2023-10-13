import {
  RHFCheckbox,
  RHFDatePicker,
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/react-hook-form";
import * as Yup from "yup";

export const defaultValues = {
  textField: "",
  select: "",
  mulitSelect: [],
  datePicker: new Date(),
  radioGroup: "",
  checkbox: false,
};

export const validationSchema = Yup.object().shape({
  textField: Yup.string().required("Required"),
  select: Yup.string().required("Required"),
  mulitSelect: Yup.mixed().required("Required"),
  datePicker: Yup.date().required("Required"),
  radioGroup: Yup.string().required("Required"),
  checkbox: Yup.boolean().oneOf([true], "Required"),
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
  {
    id: 5,
    componentProps: {
      name: "radioGroup",
      label: "RadioGroup",
      options: [
        { label: "Level 1", value: "Level 1" },
        { label: "Level 2", value: "Level 2" },
      ],
    },
    component: RHFRadioGroup,
    md: 12,
  },
  {
    id: 5,
    componentProps: {
      name: "checkbox",
      label: "Checkbox",
    },
    component: RHFCheckbox,
    md: 12,
  },
];
