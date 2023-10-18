"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { defaultValues, contactUsFormSchema } from "./contact-us-form.data";
import { useContactUsApiMutation } from "@root/services/contact-us/ContactUsApi";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";

export const useContactUsForm = () => {
  const [postContactUs] = useContactUsApiMutation();

  const router = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(contactUsFormSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const submitContactUsForm: any = async (data: any) => {
    const updatedData: any = {
      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email,
      phone_number: data?.phoneNo,
      officeAddress: data?.officeAddress,
      subject: data?.subject,
      message: data?.comments,
      business_name: "Accountant Help Squad",
    };

    try {
      await postContactUs(updatedData).unwrap();
      enqueueSnackbar("Message Sent Successfully!", {
        variant: "success",
      });
      router.push("/");
    } catch (e: any) {
      enqueueSnackbar("Something Went Wrong!", { variant: "error" });
    }
  };

  return {
    methods,
    handleSubmit,
    submitContactUsForm,
  };
};
