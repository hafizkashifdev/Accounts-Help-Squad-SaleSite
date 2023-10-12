import React, { useState } from 'react';
import { Avatar, Grid, Typography, Box, Paper, Tabs, Tab, Divider } from "@mui/material";
import ProfileManagement from './profile-management/profile-management';
import CompanyManagement from './company-management/company-management';
import BanksIntegration from './banks-integration/banks-integration';

const TabData = [
    { label: "Profile Management", content: <ProfileManagement /> },
    { label: "Company Management", content: <CompanyManagement /> },
    { label: "Integration", content: <BanksIntegration /> },
  ];

const Settings = () => {
  
   
      
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event,newValue) => {
    setActiveTab(newValue);
  };

  // Check if activeTab is within the valid range
  if (activeTab < 0 || activeTab >= TabData.length) {
    return <div>Error: Invalid activeTab value</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid xl={10} xs={12}>
        <div style={{ padding: '5px', marginTop: '10px' }}>
          <div style={{ overflow: "hidden" }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#40404D",
                  textTransform: 'capitalize',
                },
               
              }}
              className="font-family-exo2"
            >
              {TabData.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  sx={{
                    "&.Mui-selected": {
                      color: "#40404D",
                      fontSize: '16px',
                      fontWeight: '400',
                      textTransform: 'capitalize',
                    },
                  }}
                  className="font-family-exo2"
                />
              ))}
            </Tabs>
            <Divider sx={{ backgroundColor: "#000000" }} />
          </div>
        </div>
        <div style={{ padding: '5px', marginTop: '5px' }}>{TabData[activeTab].content}</div>
      </Grid>
      <Grid xs={2}></Grid>
    </Grid>
  );
};

export default Settings;
