"use client";

import { FormProvider } from "@root/components/react-hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { Button, Grid } from "@mui/material";
import {
  validationSchema,
  defaultValues,
  dataArray,
} from "@root/sections/example-folder";

export default function Test() {
  const { enqueueSnackbar } = useSnackbar();
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    enqueueSnackbar("Ticket Updated Successfully", {
      variant: "success",
    });
  };

  return (
    <main>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {dataArray?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component {...item?.componentProps} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Grid>
      </FormProvider>
    </main>
  );
}
