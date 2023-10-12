import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { ReactComponent as Logo } from "../assests/home-page/home/form-logo.svg";
import CustomInput from "../components/CustomInput";
const FormFooter = () => {
  return (
    <Box className="footer-form margin-top-6">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Typography variant="h2">Want to Learn More about Us?</Typography>
            <Typography>
              Please enter the requested details and we will get back to you
              shortly
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Logo  className="logo-form"/>
            <Box className="form-box">
              <CustomInput
                label="Full Name"
                inputClass={"form-input"}
                parentClass={"input-parent"}
                labelClass={"form-label"}
              />

              <CustomInput
                label="Last Name"
                inputClass={"form-input"}
                parentClass={"input-parent"}
                labelClass={"form-label"}
              />

              <CustomInput
                label="Email"
                inputClass={"form-input"}
                parentClass={"input-parent"}
                labelClass={"form-label"}
              />
              <CustomInput
                type="select"
                label="Interested in"
                inputClass={"form-input"}
                parentClass={"input-parent"}
                labelClass={"form-label"}
              />
            </Box>
            <Button className="form-btn">Submit</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FormFooter;
