import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
// import { fTimestamp } from "@root/utils/formatTime";
import { useTheme } from "@mui/material";

export const useBasicInformationForm = () => {
  const theme = useTheme();

  const methods = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  // useEffect(() => {
  //   const subscription = watch((values) => {
  //     const newAge = dayjs().diff(dayjs(values["dob"]), "y");
  //     values.age !== newAge &&
  //       setValue("age", dayjs().diff(dayjs(values["dob"]), "y"));
  //   });
  //   return () => subscription.unsubscribe();
  // }, [watch, setValue]);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("data", data);
    // alert(
    //   JSON.stringify(
    //     {
    //       ...data,
    //       startDate: data.startDate && fTimestamp(data.startDate),
    //       endDate: data.endDate && fTimestamp(data.endDate),
    //     },
    //     null,
    //     2
    //   )
    // );
    reset();
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
  };
};
