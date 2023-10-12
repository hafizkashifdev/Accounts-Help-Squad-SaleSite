import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import "./receivable.scss";
import { receivableData, cardData } from "./data";
import { Link } from "react-router-dom";
import GlobalButton from "../../../components/global-button/global-button";

const AccountReceivablePage = () => {
  return (
    <>
      <div className="account__receivable">
        <Grid
          container
          justifyContent={"center"}
          item
          spacing={1}
          sx={{
            // border:"1px solid red"
            mt: "90px",
            // display: 'flex',
            // justifyContent: 'center',
            // gap: '1rem'
          }}
        >
          <Grid
            fontSize={{ md: 55, xs: 40 }}
            item
            xl={3.6}
            md={4.8}
            xs={6}
          >
            <div className="account_receivable_heading">
              Online platform that helps you manage Accounting
            </div>
          </Grid>
          <Grid
            item
            xl={4}
            md={6}
            xs={10}
            // xs={6}
          >
            {receivableData?.map((ele) => (
              <Grid
                key={ele?.id}
                container
                justifyContent={ele?.justifyContent}
                margin={{
                  xl: ele?.margin,
                  md: ele?.margin,
                }}
                item
                xs={12}
                className="receivable__right"
              >
                <div className="custom__icon">
                  <div
                    className="custom__style"
                    style={{ backgroundColor: ele?.bgColor }}
                  ></div>
                </div>
                <Grid
                  item
                  className="receivable__text"
                  width={{ xl: ele?.width, md: ele?.width, xs: 230 }}
                >
                  {ele?.text}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>

      <Grid
        className="ar_cards_container"
        container
        direction={"column"}
        justifyContent={"center"}
        fontFamily={"Inter"}
      >
        <Grid
          item
          xs={12}
          display={"flex"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"#FBFAF8"}
          py={"50px"}
          width={"100%"}
        >
          <Typography
            sx={{ fontWeight: 500, fontSize: "26px", color: "#37352F" }}
          >
            We offer
          </Typography>
          <Typography
            className=" margin-auto-x center-text"
            sx={{ marginTop: "30px", maxWidth: "550px", color: "#666665" }}
          >
            Accounts Payable Software Automates All Aspects Of Payments,
            Reporting, And Approvals All Within One Online Platform
          </Typography>
          <Link to="/signin">
            <GlobalButton sx={{ mt: "30px" }} btnText="Sign in" />
          </Link>
        </Grid>

        <Grid
          className="flex flex-column justify-center align-center center-text"
          sx={{ marginTop: "5rem", width: "100%" }}
          item
          x={12}
        >
          <Typography
            sx={{ fontWeight: 700, fontSize: "36px", color: "#37352F" }}
          >
            Automation for finance teams
          </Typography>
          <Typography
            className="margin-top-1"
            sx={{
              fontWeight: 300,
              fontSize: "20px",
              lineHeight: "32px",
              maxWidth: "1146px",
              color: "#666665",
              mb: "3rem",
              font: "Inter",
              mx: "13px",
            }}
          >
            Account Receivable software automates all aspects of billing,
            collections, payments, reporting and forecasting all within one
            online platform.
          </Typography>
          <Grid container justifyContent="center" spacing={2}>
            {cardData?.map((item, index) => {
              return (
                <Grid item xl={8} lg={10} xs={11} className="center-text">
                  <Box
                    key={item?.id}
                    className="align-center flex"
                    sx={{
                      mt: "4rem",
                      bgcolor: item?.bgColor,
                      borderRadius: "16px",
                      transform: item?.scaleX,
                      py: { lg: "85px", md: "45px", xs: "15px" },
                      px: { lg: "130px", md: "45px", xs: "15px" },
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        item
                        className="flex align-center"
                        lg={6}
                        xs={12}
                        sx={{
                          justifyContent: { xs: "center" },
                          paddingRight: { xl: "80px", xs: item.img_padding },
                        }}
                      >
                        <img
                          src={item?.image}
                          alt="cashflow_1"
                          style={{
                            borderRadius: "50%",
                            transform: item?.scaleX,
                          }}
                        />
                      </Grid>
                      <Grid
                        sx={{
                          textAlign: "start",
                          transform: item?.scaleX,
                        }}
                        className="flex justify-center flex-column"
                        item
                        lg={6}
                        xs={12}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "32px",
                            color: "#37352F",
                          }}
                        >
                          {item?.label}
                        </Typography>
                        <div
                          style={{
                            height: "1.64px",
                            maxWidth: "434.06px",
                            backgroundColor: "#E5E5E5",
                            marginTop: "30px",
                            marginBottom: "30px",
                          }}
                        ></div>
                        <Typography
                          className="margin-top-1"
                          sx={{
                            fontWeight: 300,
                            fontSize: "20px",
                            color: "#666665",
                            lineHeight: "32px",
                          }}
                        >
                          {item?.description}
                          <ul>
                            {item?.ul &&
                              item?.ul.map((item1) => <li>{item1}</li>)}
                          </ul>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountReceivablePage;
