import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import VendorDetails from "./vendor-details/VendorDetails";
import VendorDocuments from "./vendor-documents/VendorDocuments";
import { CustomTabs } from "../../../../components/custom-tabs/custom-tabs";

const TabData = [
  {
    id: 0,
    name: "Details",
    component: <VendorDetails />,
  },
  {
    id: 1,
    name: "Documents",
    component: <VendorDocuments />,
  },
];

const VendorAction = () => {
  return (
    <Grid container>
      <Grid
        container
        className="justify-space-between"
        xl={10}
        lg={10}
        md={10}
        xs={12}
      >
        <Grid itam>
          <Typography className="font-weight-600 heading-20 font-family-Exo">
            AA Traders
          </Typography>
        </Grid>
        <Grid
          item
          className="flex"
          sx={{
            gap: "3rem",
            "@media (max-width: 512px)": { marginTop: "1rem", gap: "2rem" },
          }}
        >
          <Box>
            <Typography className="font-weight-400 secondary-title font-family-Exo secondary-color">
              Next Payment
            </Typography>
            <Typography className="font-weight-600 sub-heading margin-bottom-1 font-family-Exo tertiary-color"
            sx={{
              textAlign: "end",
              "@media (max-width: 900px)": {
                textAlign: "center",
              },
            }}>
              10 Feb
            </Typography>
          </Box>
          <Box
          >
            <Typography className="font-weight-400 secondary-title font-family-Exo secondary-color">
              Total Documents
            </Typography>
            <Typography
              className="font-weight-600 sub-heading margin-bottom-1 font-family-Exo tertiary-color"
              sx={{
                textAlign: "end",
                "@media (max-width: 900px)": {
                  textAlign: "center",
                },
              }}
            >
              4
            </Typography>
          </Box>
          <Box>
            <Typography className="font-weight-400 secondary-title font-family-Exo secondary-color">
              Amount Owed
            </Typography>
            <Typography
              className="font-weight-600 sub-heading margin-bottom-1 font-family-Exo tertiary-color"
              sx={{
                textAlign: "end",
                "@media (max-width: 900px)": {
                  textAlign: "center",
                },
              }}
            >
              £500.00
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid xl={10} lg={10} md={10} xs={12}>
        <CustomTabs tabsData={TabData} />
      </Grid>
    </Grid>
  );
};

export default VendorAction;
