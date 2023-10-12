import React, { useRef } from "react";
import CustomSwitch from "../../../components/CustomSwtich/CustomSwtich";
import TableAction from "../../../components/Table/TableAction";
import { Box } from "@mui/material";
import CustomTable from "../../../components/Table/CustomTable";
import TableHeader from "../../../components/Table/TableHeader";
import DeletePrompt from "../../../components/Table/prompt/DeletePrompt";
import { useNavigate } from "react-router-dom";
import ViewPrompt from "../../../components/Table/prompt/ViewPrompt/ViewPrompt";
const payableWorkflowData = [
  {
    id: 1,
    name: "Xyz",
    description: "Default Workflow",
    rules: 20,
    status: true,
  },

  {
    id: 2,
    name: "Abc",
    description: "Default Workflow",
    rules: 20,
    status: false,
  },
  {
    id: 3,
    name: "Rst",
    description: "Default Workflow",
    rules: 20,
    status: false,
  },
  {
    id: 4,
    name: "Uvw",
    description: "Default Workflow",
    rules: 20,
    status: false,
  },
  {
    id: 5,
    name: "UwU",
    description: "Default Workflow",
    rules: 20,
    status: false,
  },
];
const payableWorkflowCoulmn = [
    {
        accessorFn: (row) => row.name,
        id: "name",
        cell: (info) => info.getValue(),
        header: "Workflow Name",
    },
    {
        accessorFn: (row) => row.description,
        id: "description",
        cell: (info) => info.getValue(),
        header: "Description",
    },
    {
        accessorFn: (row) => row.rules,
        id: "rules",
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Rules",
    },
    {
        accessorFn: (row) => row.status,
        id: "status",
        cell: (info) => (
            <CustomSwitch
            // checked={info.getValue()}
            />
        ),
        header: "Status",
    },
    {
        accessorFn: (row) => row.id,
        id: "Actions",
        cell: (info) => (
            <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                <DeletePrompt add_icon={true} children="This workflow will be deleted." onDeleteClick={()=>{}} />
                <TableAction type="edit" onClick={() => { }} />
                <ViewPrompt type="view" onViewClick={() => { }} />
            </Box>
        ),
        header: () => <div className="flex justify-center width-100">Actions</div>,
        isSortable: false,
    },
];
export const WorkflowPayable = () => {
  const tableHeaderRef = useRef();
  const navigate = useNavigate();
  return (
    <>
      <Box className="invoice-title">Workflows</Box>
      <TableHeader
        ref={tableHeaderRef}
        searchKey="search"
        showAddBtn
        addBtnTitle="Create New Workflow"
        onAdd={() => navigate("/workflows/create")}
      />
      <CustomTable
        data={payableWorkflowData}
        columns={payableWorkflowCoulmn}
        showSerialNo
        isSuccess={true}
        serialName="ID"
        showHeaderFilter={false}
      />
    </>
  );
};
