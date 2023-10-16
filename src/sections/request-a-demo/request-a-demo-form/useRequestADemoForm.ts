"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  requestADemoDefaultFormValuesFunction,
  requestADemoFormFieldsDataFunction,
  requestADemoFormSchema,
} from "./RequestADemoForm.data";

export const useRequestADemoForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(requestADemoFormSchema),
    defaultValues: requestADemoDefaultFormValuesFunction(),
  });

  const { handleSubmit } = methods;
  const requestADemoFormFieldsData = requestADemoFormFieldsDataFunction();
  const submitRequestADemoForm: any = async (data: any) => {
    console.log(data);
  };
  return {
    methods,
    handleSubmit,
    submitRequestADemoForm,
    requestADemoFormFieldsData,
  };
};
