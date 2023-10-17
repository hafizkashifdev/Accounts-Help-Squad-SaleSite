"use client";
import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/navigation";

const formContainerStyle = {
  background: "white",
  padding: '20px',
  borderRadius: '16px',
  boxShadow: '1px solid rgba(204, 204, 204, 0.50);',
  height: '465px',
  border: '1px solid rgba(204, 204, 204, 0.50);',
};

const WelcomeScreen = () => {
  const router = useRouter();


  return <>

    <Container maxWidth="sm" style={formContainerStyle}>
      <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Grid item>
          <Typography sx={{ whiteSpace: { xs: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" }, fontSize: "32px", fontWeight: 600, fontStyle: "normal", color: "#666" }}>Welcome to
            <span style={{ fontSize: "32px", fontWeight: 600, fontStyle: "normal", color: "#000" }}> AccountHelpSquad!</span></Typography>
          <Typography sx={{
            whiteSpace: "nowrap", fontSize: "14px", fontWeight: 400, fontStyle: "normal", display: "flex",
            justifyContent: "center", alignItems: "center", py: "13px", color: "#4C4C4C"
          }}>
            Let’s Get Started
          </Typography>
          <Grid item>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography sx={{ background: "#666", color: "#40404D" }}>
                Accounts Receivable
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography sx={{ background: "#666", color: "#40404D" }}>
                Accounts Payable              </Typography>
            </div>  <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography sx={{ background: "#666", color: "#40404D" }}>
                Cashflow              </Typography>
            </div>
          </Grid>
          <Button
            fullWidth
            sx={{ marginTop: 10, marginLeft: 2 }}
            type="submit"
            variant="contained"
            onClick={() => router.push("/signin")}
          >
            Next
          </Button>
        </Grid>

      </Grid>

    </Container>

  </>;
};

export default WelcomeScreen;
