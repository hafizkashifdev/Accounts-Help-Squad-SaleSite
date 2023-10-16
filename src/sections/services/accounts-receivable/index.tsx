import { Fragment } from "react";
import AccountsReceivableHero from "./hero";
import FormationBookServices from "./services";
import BlackSection from "./black-section";
import MoreFeatures from "./features";
import Innovation from "./innovation";

const AccountsReceivable = () => {
  return (
    <Fragment>
      <AccountsReceivableHero />

      <FormationBookServices />

      <BlackSection />

      <MoreFeatures />

      <Innovation />
    </Fragment>
  );
};

export default AccountsReceivable;
