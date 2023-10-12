import React, { useEffect, useState } from "react";
import { tabbing_data } from "./Constants";
import { Box, Checkbox, Tab, Tabs } from "@mui/material";
import "./MainPage.scss";
import CustomInput from "../../../components/CustomInput";
import { optionsTime } from "../Model/Constants";
import GlobalButton from "../../../components/global-button/global-button";
import InvoiceCreationDate from "./InvoiceCreationDate";
import BeforeDueDate from "./BeforeDueDate";
import OnDueDate from "./OnDueDate";
import OnPaymentCollectionDate from "./OnPaymentCollectionDate";
import AfterDueDate from "./AfterDueDate";

const MainPage = ({ searchParams, setSearchParams, children }) => {
  const step = searchParams.get("step");
  const id = searchParams.get("id");
  const [stepperValue, setStepperValue] = useState(id.toString() || "1");
  const [pageName, setPageName] = useState("");
  function getPageData(id) {
    const data = tabbing_data.find((e) => e?.id.toString() === id.toString());
    return data;
  }
  useEffect(() => {
    const data = getPageData(id);
    setPageName(data);
  }, [step, id]);
  const handleChange = (e, newValue) => {
    // console.log(newValue);
    setStepperValue(newValue);
    const data = getPageData(newValue);
    setSearchParams({ id: data?.id, step: data?.step });
  };
  return (
    <Box className="form-parent">
      <Box className="invoice-title"> {pageName?.label}</Box>
      <Box
        className="tabbing-forms"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          className="tabbing-list"
          value={stepperValue}
          onChange={handleChange}
          allowScrollButtonsMobile={true}
          scrollButtons={true}
          aria-label="basic tabs example"
        >
          {tabbing_data?.map((e) => (
            <Tab
              label={e?.label}
              value={e?.id}
              key={`${e?.label}${e?.id}`}
              className={`tabbing-item ${
                e?.id.toString() === id.toString() ? "active" : ""
              }`}
            />
          ))}
        </Tabs>
      </Box>

      {step === "1" ? (
        <InvoiceCreationDate />
      ) : step === "3" ? (
        <OnDueDate />
      ) : step === "5" ? (
        <OnPaymentCollectionDate />
      ) : step === "2" ? (
        <BeforeDueDate />
      ) : step === "4" ? (
        <AfterDueDate />
      ) : (
        ""
      )}
    </Box>
  );
};

export default MainPage;
