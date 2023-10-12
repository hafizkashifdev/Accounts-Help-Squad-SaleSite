import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}
export const CustomTabs = ({ tabsData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(+(searchParams.get("id") || 0));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "#F0F0F2" }}>
          <Tabs
            sx={{
              ".MuiTabs-indicator": { bgcolor: "#2B2B33", height: "1px" },
              ".Mui-selected": {
                color: "#40404D !important",
                fontWeight: "600 !important",
              },
            }}
            className="font-family-Exo"
            value={value}
            onChange={handleChange}
          >
            {tabsData.map((item) => (
              <Tab
                key={item.id}
                onClick={() =>
                  setSearchParams({ id: item.id, step: item.name })
                }
                label={item.name}
                {...a11yProps(item.name)}
                className="font-family-Exo primary-title font-weight-400 secondary-color text-transform"
              />
            ))}
          </Tabs>
        </Box>
        {tabsData.map((item) => (
          <TabPanel key={item.id} value={value} index={item.id}>
            {item.component}
          </TabPanel>
        ))}
      </Box>
    </>
  );
};
