import { Fragment } from "react";
import Hero from "./hero";
import Services from "./services";
import BlackSection from "./black-section";
import MoreFeatures from "./features";
import Innovation from "./innovation";

const CashflowManagement = () => {
  return (
    <Fragment>
      <Hero />

      <Services />

      <BlackSection />

      <MoreFeatures />

      <Innovation />
    </Fragment>
  );
};

export default CashflowManagement;
