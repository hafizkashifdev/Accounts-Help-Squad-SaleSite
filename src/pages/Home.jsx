import React from "react";
import HomeLayout from "../homeLayout/HomeLayout";
import HomeHero from "../features/home-page/hero/HomeHero";
import AboutUsHero from "../features/home-page/about-us/AboutUsHero";
import WhatWeOffer from "../features/home-page/WhatWeOffer/WhatWeOffer";

const Home = () => {
  return (
    <>
      <HomeHero />
      <WhatWeOffer />
      <AboutUsHero />
    </>
  );
};

export default Home;
