"use client";

import { Box, Grid, Typography } from "@mui/material";
import { getStartedStyles } from "../get-started/get-started.styles";
import HorizontalTabs from "@root/components/tabs/horizontal-tabs/HorizontalTabs";
import { faqsTabsChildren, faqsTabsData } from "./faq.data";
import { useState } from "react";
import { FaqsItem } from "@root/components/faqs-item";
import Searchbar from "@root/components/searchbar";

const FAQs = () => {
  const [activeTab, setActiveTab] = useState<any>("General");

  return (
    <Grid container>
      <Grid item xs={12} sx={getStartedStyles.heroContainer}>
        <Typography variant="h1" color="common.main">
          Let's Get Started
        </Typography>
        <Typography variant="h6" color="common.light" maxWidth="799px">
          Welcome to Accounts Help Squad, your gateway to seamless
          communication. Whether you have questions, feedback, or simply want to
          get in touch, this is the place to do it. We're eager to hear from you
          and provide the information and assistance you need. Feel free to
          reach out, and we'll respond promptly to assist you in any way we can.
        </Typography>
        <Box sx={{ mt: "30px" }}>
          <Searchbar />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={10} xs={11}>
            <HorizontalTabs
              tabsDataArray={faqsTabsData}
              setActiveTab={setActiveTab}
            />
            {faqsTabsChildren[activeTab].map((item: any) => (
              <FaqsItem title={item.que} description={item.ans} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FAQs;
