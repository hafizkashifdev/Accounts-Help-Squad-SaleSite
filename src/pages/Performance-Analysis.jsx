import React from "react";
import WorkflowsComparison from "../features/performance-analysis/WorkflowsComparison/WorkflowsComparison";
import { Outlet, useOutlet } from "react-router-dom";

function PerformanceAnalysis() {
  const outlet = useOutlet();
  return <>{outlet ? <Outlet /> : <WorkflowsComparison />}</>;
}

export default PerformanceAnalysis;
