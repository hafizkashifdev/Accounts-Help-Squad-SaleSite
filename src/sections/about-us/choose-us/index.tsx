import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import chooseimg from "@root/assets/about-us/why-choose-us.svg";
import Image from "next/image";
import { chooseUsData } from "./choose-us-data";

const ChooseUs = () => {
  return (
    <Box px={{ xs: 1, md: 5 }}>
      <Grid container spacing={0}>
        <Grid item lg={4} md={6} xs={12}>
          <Image
            src={chooseimg?.src}
            alt="choose us img"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>

        <Grid item lg={8} md={6} xs={12} margin={"auto"}>
          <Box bgcolor={"primary.main"} p={2}>
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "32px",
                fontWeight: 600,
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              A collage of client testimonials and achievements.{" "}
            </Typography>
            {chooseUsData.map((choose, index) => (
              <Box key={index} sx={{ mt: "24px" }}>
                <Typography component="span">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        marginRight: 2,
                        borderLeft: "4px solid #FFF",
                        paddingLeft: "4px",
                        height: "28px",
                      }}
                    ></span>
                    <Typography
                      sx={{
                        color: "#FFF",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      {choose.title}
                    </Typography>
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    mt: "8px",
                  }}
                >
                  {choose.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChooseUs;
