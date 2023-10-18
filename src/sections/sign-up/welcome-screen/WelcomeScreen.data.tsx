import { RHFCheckbox } from "@root/components/react-hook-form";
import * as Yup from "yup";

export const validationSchema: any = Yup.object().shape({
  products1: Yup.string(),
  products2: Yup.string(),
  products3: Yup.string(),
});

export const defaultValues = { product1: "", product2: "", product3: "" };

export const dataArray = [
  {
    id: 1,
    component: RHFCheckbox,
    componentProps: {
      name: "products1",
      label: "Accounts Receivable",
    },
  },
  {
    id: 2,
    component: RHFCheckbox,
    componentProps: {
      name: "product2",
      label: "Accounts Payable",
    },
  },
  {
    id: 1,
    component: RHFCheckbox,
    componentProps: {
      name: "product3",
      label: "Cashflow",
    },
  },
];
