
import AboutHero from "./about-hero";
import OurStory from "./our-story";
import OurMission from "./our-mission";
import OurTeam from "./our-team";
import ChooseUs from "./choose-us";
import JoinUs from "./join-us";

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurMission />
      <div style={{ background: 'linear-gradient(0deg, rgba(246, 252, 255, 0.00) 0%, #F7F7F7 100%)' }}>
        <OurTeam />
        <ChooseUs/>
        <JoinUs/>
      </div>
    </>
  )
};

export default AboutUs;
