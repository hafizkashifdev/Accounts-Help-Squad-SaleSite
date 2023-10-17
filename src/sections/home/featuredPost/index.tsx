import ProfileCard from "@root/components/profileCard";
import SectionHeading from "@root/components/sectionHeading";
import React from "react";
import { featuredPostData } from "./FeaturedPost.data";
import { Box } from "@mui/material";

const FeaturedPost = () => {
  return (
    <Box sx={{ px: { xs: 1.6, xl: 11.6 } }}>
      <SectionHeading heading="Meet Our Team" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2.4,
          flexWrap: "wrap",
          mt: 6.8,
        }}
      >
        {featuredPostData?.map(({ image, title, text }) => (
          <ProfileCard
            key={title}
            image={image}
            name={title}
            desgination={text}
            textAlign="left"
          />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedPost;
