import * as Yup from "yup";
// import { fData } from "@root/utils/formatNumber";
import {
  RHFCheckbox,
} from "../../../../components/hook-form";
import {
  RHFTextField,
} from "../../../../components/hook-form";
import {
  RHFSelect,
} from "../../../../components/hook-form";
// import { FormHelperText, Hidden } from "@mui/material";
// import FileUploadIcon from "@mui/icons-material/FileUpload";
// import { useFormContext, Controller } from "react-hook-form";
// import RHFDatePicker from "../../../../components/hook-form/RHFDatePicker";
// import dayjs from "dayjs";
import { COMPANYDROPDOWNDATA, ROLEDROPDOWNDATA } from "../../../../mock-data";

// const todayDate = dayjs().format("DD/MM/YYYY");
// const ageOf16Years = dayjs().subtract(19, "year").format("DD/MMM/YYYY");

export const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile:"",
  company: "",
  role:""
};

// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb

// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")

    .min(3, "Mininum 6 characters")

    .max(10, "Maximum 15 characters"),
  lastName: Yup.string()

    .required("Last Name is required")

    .min(3, "Mininum 6 characters")

    .max(10, "Maximum 15 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  phone: Yup.string()
  .required("Phone No is required")
  .min(4, "Mininum 4 characters")
  .max(15, "Maximum 15 characters"),
  company: Yup.string().trim().required("Company is required"),
  role: Yup.string().trim().required("Role is required"),
});

// export const formDataAreaoffice = [
//   {
//     gridLength: 6,
//     componentProps: {
//       name: "areaOffice",
//       label: "Area Office",
//       fullWidth: true,
//       select: true,
//     },
//     options: [
//       { value: "Pakistan", label: "Pakistan" },
//       { value: "India", label: "India" },
//     ],
//     component: RHFSelect,
//   },
// ];
export const formDataAreaPersonalInfo = [
  {
    gridLength: 6,
    componentProps: { name: "firstName", label: "First Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: { name: "lastName", label: "Last Name", fullWidth: true },
    component: RHFTextField,
  },

  {
    gridLength: 6,
    componentProps: { name: "email", label: "Email", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: { name: "phone", label: "Phone", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "company",
      label: "Company",
      fullWidth: true,
      select: true,
    },
    options: COMPANYDROPDOWNDATA,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "role",
      label: "Role",
      fullWidth: true,
      select: true,
    },
    options: ROLEDROPDOWNDATA,
    component: RHFSelect,
  },

];

export { default as BasicInformationForm } from "./BasicInformationForm";

// function RHFUploadFile(props) {
//   const { disabled, name, ...other } = props;
//   const { control } = useFormContext();

//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field, fieldState: { error } }) => {
//         const checkError = !!error && !field.value;
//         return (
//           <>
//             <label
//               htmlFor={name}
//               style={{
//                 height: "40px",
//                 borderRadius: "4px",
//                 // border: `1px solid #A3A6BB`,
//                 border: `1px solid ${other?.formState?.errors?.[`${name}`] ? "red" : "#E5E8EB"
//                   }`,
//                 width: "100% !important",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 cursor: `${disabled ? "" : "pointer"}`,
//               }}
//             >
//               <div style={{ paddingLeft: "10px", color: "#A3A6BB" }}>
//                 {field?.value?.name || "Upload Image"}
//               </div>
//               <FileUploadIcon
//                 sx={{
//                   color: "#A3A6BB",
//                   marginRight: "10px",
//                 }}
//               />
//             </label>
//             <input
//               type="file"
//               disabled={disabled}
//               name={name}
//               id={name}
//               onChange={(e) => {
//                 const file = e.target.files?.[0];
//                 field.onChange({ target: { value: file, name: field.name } });
//               }}
//               style={{ display: "none" }}
//             />
//             {checkError && (
//               <FormHelperText error sx={{ px: 2 }}>
//                 {error.message}
//               </FormHelperText>
//             )}
//           </>
//         );
//       }}
//     />
//   );
// }
