import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import { teamData } from "./team-cards.data";

const TeamCards = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{}}
      spacing={2}
    >
      {teamData.map((team, index) => (
        <Grid item key={index} lg={4} md={6} xs={12}>
          <Card
            sx={{
              display: "flex",
              width: "100%",
              padding: "32px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              background: "#FFF",
              boxShadow: "0px 17px 30px 0px rgba(0, 0, 0, 0.02)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
                borderRadius: "12px 12px 0px 0px",
                background: "rgba(240, 240, 242, 0.40)",
              }}
            >
              <Image src={team.image} alt={team.title} />
            </Box>

            <CardContent>
              <Typography
                sx={{
                  color: "#2B2B33",
                  fontSize: "20px",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {team.title}
              </Typography>
              <Typography
                sx={{
                  color: "#2B2B33",
                  fontSize: "14px",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                {team.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamCards;
