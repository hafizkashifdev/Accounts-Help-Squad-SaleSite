// "use client";

// import { FormProvider } from "@root/components/react-hook-form";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useSnackbar } from "notistack";
// import { Button, Grid } from "@mui/material";
// import {
//   validationSchema,
//   defaultValues,
//   dataArray,
// } from "@root/sections/example-folder";

// export default function Test() {
//   const { enqueueSnackbar } = useSnackbar();
//   const methods: any = useForm({
//     resolver: yupResolver(validationSchema),
//     defaultValues,
//   });

//   const { handleSubmit } = methods;

//   const onSubmit = async (data: any) => {
//     console.log(data);
//     enqueueSnackbar("Ticket Updated Successfully", {
//       variant: "success",
//     });
//   };

//   return (
//     <main>
//       <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={4}>
//           {dataArray?.map((item: any) => (
//             <Grid item xs={12} md={item?.md} key={item?.id}>
//               <item.component {...item?.componentProps} />
//             </Grid>
//           ))}
//         </Grid>
//         <Grid item xs={12}>
//           <Button type="submit" variant="outlined">
//             Submit
//           </Button>
//         </Grid>
//       </FormProvider>
//     </main>
//   );
// }

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
    id: 6,
    componentProps: {
      name: "checkbox",
      label: "Checkbox",
    },
    component: RHFCheckbox,
    md: 12,
  },
];
