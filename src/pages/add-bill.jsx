import React from "react";
import { AddBillFeature } from "../features/add-bill-feature/add-bill-feature";
import { dashboardStyle } from "./dashboard/dashboard-receivable";

export const AddBill = () => {
  return (
    <>
      <div style={{ ...dashboardStyle, fontWeight: 600 }}>Add Bill</div>
      <AddBillFeature />
    </>
  );
};
