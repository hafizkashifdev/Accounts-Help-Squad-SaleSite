import React, { useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import MainPage from "../features/workflows-page/workflowForms/MainPage";

const WorkflowsForms = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  if (searchParams.size === 0) {
    return <Navigate to={"/workflows/form?step=1&id=1"} replace />;
  }
  return (
    <>
      <MainPage searchParams={searchParams} setSearchParams={setSearchParams} />
    </>
  );
};

export default WorkflowsForms;
