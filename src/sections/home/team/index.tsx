import ProfileCard from "@root/components/profileCard";
import SectionHeading from "@root/components/sectionHeading";
import React from "react";
import { teamData } from "./team.data";
import { Box } from "@mui/material";

const Team = () => {
  return (
    <Box px={{ xs: 1, md: 5 }}>
      <SectionHeading heading="Meet Our Team" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2.4,
          flexWrap: "wrap",
          mt: { xs: 2.4, md: 4.8, xl: 6.8 },
        }}
      >
        {teamData?.map(({ image, name, desgination }) => (
          <ProfileCard
            key={name + desgination}
            image={image}
            name={name}
            desgination={desgination}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Team;
