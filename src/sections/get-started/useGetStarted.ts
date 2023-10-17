"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  getStartedDefaultFormValuesFunction,
  getStartedFormFieldsDataFunction,
  getStartedFormSchema,
} from "./GetStarted.data";

export const useGetStarted = () => {
  const methods: any = useForm({
    resolver: yupResolver(getStartedFormSchema),
    defaultValues: getStartedDefaultFormValuesFunction(),
  });

  const { handleSubmit } = methods;
  const getStartedFormFieldsData = getStartedFormFieldsDataFunction();
  const submitGetStartedForm: any = async (data: any) => {
    console.log(data);
  };
  return {
    methods,
    handleSubmit,
    submitGetStartedForm,
    getStartedFormFieldsData,
  };
};
