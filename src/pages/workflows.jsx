import React from "react";
import { Outlet, useOutlet } from "react-router-dom";
import WorkflowPage from "../features/workflows-page/WorkflowPage";
import { getLocalStorage } from "../utils/localStorageHelpers";
import { WorkflowPayable } from "../features/workflows-page/workflow-payable/workflow-payable";
const selectWorkflowPage = {
  "Account Receivable": <WorkflowPage />,
  "Account Payable": <WorkflowPayable />
}
const Workflow = () => {
  const outlet = useOutlet();

  return <>{outlet ? <Outlet /> : selectWorkflowPage[getLocalStorage("pName")]}</>
};

export default Workflow;
