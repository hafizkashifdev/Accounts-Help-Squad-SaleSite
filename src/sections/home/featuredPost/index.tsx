import ProfileCard from "@root/components/profileCard";
import SectionHeading from "@root/components/sectionHeading";
import React from "react";
import { featuredPostData } from "./FeaturedPost.data";
import { Box } from "@mui/material";

const FeaturedPost = () => {
  return (
    <Box px={{ xs: 1, md: 5 }}>
      <SectionHeading heading="Featured Blog Posts" />
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
