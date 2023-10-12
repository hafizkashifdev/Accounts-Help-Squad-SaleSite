import { Box } from "@mui/material";
import React from "react";
import { CustomTabs } from "../../../components/custom-tabs/custom-tabs";
import RulesCategory from "./RulesCategory/RulesCategory";
import AddCategories from "./add-categories/add-categories";

const Categories = ({ outlet }) => {
  const BillsManagementTabsData = [
    {
      id: 0,
      name: "Cash Inflow",
      component: outlet ? <RulesCategory /> : <AddCategories />,
    },
    {
      id: 1,
      name: "Cash Outflow",
      component: "Cash Outflow",
    },
  ];
  // console.log(8.52 * 240);

  return (
    <Box>
      <Box
        style={{
          width: "102px",
          height: "28px",
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          marginBottom: "52px",
        }}
        className="tertiary-color font-weight-600"
      >
        Categories
      </Box>
      <Box>
        <CustomTabs tabsData={BillsManagementTabsData} />
      </Box>
    </Box>
  );
};

export default Categories;
