"use client";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  requestADemoDefaultFormValuesFunction,
  requestADemoFormFieldsDataFunction,
  requestADemoFormSchema,
} from "./SignUpForm.data";

export const useSignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const methods: any = useForm({
    resolver: yupResolver(requestADemoFormSchema),
    defaultValues: requestADemoDefaultFormValuesFunction(),
  });

  const { handleSubmit } = methods;
  const requestADemoFormFieldsData = requestADemoFormFieldsDataFunction(
    showPassword,
    setShowPassword,
    handleToggleVisibility
  );
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
