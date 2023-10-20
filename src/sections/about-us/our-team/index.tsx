import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import teamceo from "@root/assets/about-us/team-ceo.svg";
import Image from "next/image";
import { teamData } from "./team.data";
import ProfileCard from "@root/components/profileCard";

const OurTeam = () => {
  return (
    <Box px={{ xs: 1, md: 5 }}>
      <Box>
        <Typography variant="h2" textAlign={"center"}>
          Meet Our Team
        </Typography>
      </Box>

      <Grid
        container
        mt={2}
        sx={{
          borderRadius: 2,
          backgroundColor: "common.white",
          boxShadow: "0px 9px 32px 0px rgba(0, 0, 0, 0.02)",
        }}
      >
        <Grid item md={4} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "start" },
              p: 2,
            }}
          >
            <Image
              src={teamceo?.src}
              alt="team ceo"
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>

        <Grid
          item
          md={8}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#898999",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              pr: { lg: 20, xs: 0 },
              textAlign: { lg: "start", xs: "center" },
            }}
          >
            Usman Saeed, an ACCA-certified financial expert, is the visionary
            founder behind Accounts Help Squad. With a deep passion for finance
            and a commitment to simplifying complex financial processes, Usman
            embarked on this journey to empower businesses of all sizes.
          </Typography>
          <Typography
            sx={{
              color: " #2B2B33",
              fontSize: "20px",
              fontWeight: 600,
              mt: "20px",
              textAlign: { lg: "start", xs: "center" },
            }}
          >
            Usman Saeed
          </Typography>
          <Typography
            sx={{
              color: "#2B2B33",
              fontSize: "16px",
              fontWeight: 400,
              textAlign: { lg: "start", xs: "center" },
            }}
          >
            Founder
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} mt={2}>
        {teamData?.map(({ image, name, desgination }) => (
          <ProfileCard
            key={name + desgination}
            image={image}
            name={name}
            desgination={desgination}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default OurTeam;
