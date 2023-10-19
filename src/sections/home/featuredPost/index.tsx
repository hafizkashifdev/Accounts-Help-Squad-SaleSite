import ProfileCard from "@root/components/profileCard";
import SectionHeading from "@root/components/sectionHeading";
import React from "react";
import { featuredPostData } from "./FeaturedPost.data";
import { Box, Grid } from "@mui/material";

const FeaturedPost = () => {
  return (
    <Box px={{ xs: 1, md: 5 }}>
      <SectionHeading heading="Featured Blog Posts" />
      <Grid container spacing={4}>
        {featuredPostData?.map(({ image, title, text }) => (
          <ProfileCard
            key={title}
            image={image}
            name={title}
            desgination={text}
            textAlign="left"
          />
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedPost;
