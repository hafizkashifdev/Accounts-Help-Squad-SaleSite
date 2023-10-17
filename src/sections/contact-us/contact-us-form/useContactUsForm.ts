"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  contactUsDefaultFormValuesFunction,
  contactUsFormFieldsDataFunction,
  contactUsFormSchema,
} from "./ContactUsForm.data";

export const useContactUsForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(contactUsFormSchema),
    defaultValues: contactUsDefaultFormValuesFunction(),
  });

  const { handleSubmit } = methods;
  const contactUsFormFieldsData = contactUsFormFieldsDataFunction();
  const submitContactUsForm: any = async (data: any) => {
    console.log(data);
  };
  return {
    methods,
    handleSubmit,
    submitContactUsForm,
    contactUsFormFieldsData,
  };
};
