import ProfileCard from "@root/components/profileCard";
import SectionHeading from "@root/components/sectionHeading";
import { teamData } from "./team.data";
import { Box, Grid } from "@mui/material";

const Team = () => {
  return (
    <Box px={{ xs: 1, md: 5 }}>
      <SectionHeading heading="Meet Our Team" />
      <Grid container spacing={4}>
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

export default Team;
