import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { missionData } from "./mission-data";
import MissionImage from "@root/assets/about-us/our-mission.svg";

const OurMission = () => {
  return (
    <Box px={{ xs: 1, md: 5 }}>
      <Grid container spacing={10}>
        <Grid item md={6} xs={12} margin={"auto"}>
          <Image
            src={MissionImage?.src}
            alt="mission us img"
            width={0}
            height={0}
            style={{ width: "80%", height: "80%" }}
          />
        </Grid>
        <Grid item md={6} xs={12} margin={"auto"}>
          <Typography
            sx={{
              color: "#1D293F",
              fontSize: "32px",
              fontWeight: 600,
              mt: "30px",
              textAlign: { lg: "start", xs: "center" },
            }}
          >
            Our Mission
          </Typography>
          <Typography
            sx={{
              color: "#898999",
              fontSize: "16px",
              fontWeight: 400,
              textAlign: { lg: "start", xs: "center" },
              mt: { lg: 0, xs: 2 },
            }}
          >
            Our mission is clear: to make financial management accessible,
            efficient, and beneficial for every business. We are committed to:
          </Typography>
          {missionData.map((mission, index) => (
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
                      borderLeft: "4px solid #2B2B33",
                      paddingLeft: "4px",
                      height: "28px",
                    }}
                  ></span>
                  <Typography
                    sx={{
                      color: "#2B2B33",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    {mission.title}
                  </Typography>
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#898999",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  mt: "8px",
                }}
              >
                {mission.description}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurMission;
