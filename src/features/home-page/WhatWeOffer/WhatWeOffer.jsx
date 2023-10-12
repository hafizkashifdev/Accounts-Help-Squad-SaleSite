import React from "react";
import File from "../../../assests/home-page/home/files.svg";
import Home from "../../../assests/home-page/home/home.svg";
import Deposit from "../../../assests/home-page/home/deposit.svg";
import Insurance from "../../../assests/home-page/home/insurance.svg";
import { Container, Grid, Box, Typography } from "@mui/material";
import "./WhatWeOffer.scss";

const WhatWeOffer = () => {
  const data = [
    {
      img: Home,
      name: "Account Payable",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
    },
    {
      img: File,
      name: "Workflow Automation",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
    },
    {
      img: Deposit,
      name: "Account Receivable",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
    },
    {
      img: Insurance,
      name: "Effortless invoicing and payments",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
    },
    {
      img: File,
      name: "Cashflow",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
    },
    {
      img: Home,
      name: "Trust And Security",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
    },
  ];
  return (
    <Box className="what-we-offer-parent">
      <Container>
        <Typography variant="h2">What We Offer</Typography>
        <Typography>
          Accountant Pact contains everything you need for faster Accounting
          journey of your company.
        </Typography>
        <Grid container spacing={2} rowSpacing={5} marginTop={4}>
          {data?.map((e, i) => (
            <Grid item xs={12} lg={4} md={6} key={i} sx={{ display: "flex" }}>
              <Box className="what-we-offer-box">
                <Box className="what-we-offer-img">
                  <img src={e.img} alt={e?.name} />
                </Box>
                <Box className="what-we-offer-text">
                  <Typography variant="h3">{e.name}</Typography>
                  <Typography>{e.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeOffer;
