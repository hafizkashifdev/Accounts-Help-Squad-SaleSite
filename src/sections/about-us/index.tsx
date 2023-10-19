import AboutHero from "./about-hero";
import OurStory from "./our-story";
import OurMission from "./our-mission";
import OurTeam from "./our-team";
import ChooseUs from "./choose-us";
import JoinUs from "./join-us";
import OurValues from "./our-values";
import { Stack } from "@mui/material";

const AboutUs = () => {
  return (
    <Stack rowGap={10}>
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurTeam />
      <OurValues />
      <ChooseUs />
      <JoinUs />
    </Stack>
  );
};

export default AboutUs;
