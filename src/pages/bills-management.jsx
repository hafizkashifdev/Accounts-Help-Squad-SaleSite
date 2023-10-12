import React from "react";
import { CustomTabs } from "../components/custom-tabs/custom-tabs";
import { BillManagement } from "../features/bill-management/bill-management";
import { dashboardStyle } from "./dashboard/dashboard-receivable";
import DocumentApproval from "../features/DocumentApproval/DocumentApproval";
const BillsManagementTabsData = [
  {
    id: 0,
    name: "Bill Management",
    component: <BillManagement />,
  },
  {
    id: 1,
    name: "Documents Approval",
    component: <DocumentApproval />,
  },
];
export const BillsManagement = () => {
  return (
    <>
      <div style={{ ...dashboardStyle, fontWeight: 600 }}>Bills</div>
      <CustomTabs tabsData={BillsManagementTabsData} />
    </>
  );
};
