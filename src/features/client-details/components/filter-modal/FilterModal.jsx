import { Box, FormControlLabel, Grid, Radio, Typography } from "@mui/material";
import React, { useState } from "react";
import "./FilterModal.scss";
import { ReactComponent as Down } from "../../../../assests/svg/chev-bottom.svg";
import CustomInput from "../../../../components/CustomInput";

const FilterModal = () => {
  const [value, setValue] = useState("All");
  return (
    <Box className="filter-model-clients">
      <Typography variant="h5">Filtered By</Typography>

      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Box className="radio-box">
            <FormControlLabel
              value="All"
              checked={value === "All" ? true : false}
              style={{ background: value === "All" ? "transparent" : "white" }}
              control={<Radio />}
              onChange={(e) => setValue(e?.target?.value)}
              //   label="Female"
            />
            <span
              onClick={(e) => setValue("All")}
              className={`span ${value === "All" ? "active" : "not-active"}  `}
            >
              All
            </span>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box className="radio-box">
            <FormControlLabel
              value="Custom"
              style={{
                background: value === "Custom" ? "transparent" : "white",
              }}
              checked={value === "Custom" ? true : false}
              onChange={(e) => setValue(e?.target?.value)}
              control={<Radio />}
              //   label="Female"
            />
            <span
              onClick={(e) => setValue("Custom")}
              className={`span ${
                value === "Custom" ? "active" : "not-active"
              }  `}
            >
              Custom
            </span>
          </Box>{" "}
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: "32px" }}>
        {value === "All" ? (
          <>
            <Grid item lg={6}>
              <CustomInput
                required={false}
                type="select"
                label="Workflow"
                IconComponent={Down}
              />
            </Grid>
            <Grid item lg={6}>
              <CustomInput
                required={false}
                type="select"
                IconComponent={Down}
                label="Workflow Status"
              />
            </Grid>
            <Grid item lg={6}>
              <CustomInput required={false} label="Avg Payment Delay" />
            </Grid>
          </>
        ) : (
          <>
            <Grid item lg={6}>
              <CustomInput
                required={false}
                type="select"
                IconComponent={Down}
                label="Branch"
              />
            </Grid>
            <Grid item lg={6}>
              <CustomInput
                required={false}
                type="select"
                IconComponent={Down}
                label="Client"
              />
            </Grid>
            <Grid item lg={6}>
              <CustomInput
                required={false}
                type="select"
                IconComponent={Down}
                label="Workflow"
              />
            </Grid>
            <Grid item lg={6}>
              <CustomInput
                required={false}
                type="select"
                IconComponent={Down}
                label="Workflow Status"
              />
            </Grid>
            <Grid item lg={6}>
              <CustomInput required={false} label="Avg Payment Delay" />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default FilterModal;
