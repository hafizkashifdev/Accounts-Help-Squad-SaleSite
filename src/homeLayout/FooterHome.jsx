import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Logo from "../assests/home-page/home/footer-logo.svg";
import { ReactComponent as Facebook } from "../assests/home-page/social/fb.svg";
import { ReactComponent as Twitter } from "../assests/home-page/social/twiiter.svg";
import { ReactComponent as Youtube } from "../assests/home-page/social/youtube.svg";
import { ReactComponent as Linkedin } from "../assests/home-page/social/linkdin.svg";
import { ReactComponent as Instagram } from "../assests/home-page/social/insta.svg";

import "./HomeLayout.scss";
import { NavLink } from "react-router-dom";

const FooterHome = () => {
  const footerData = [
    {
      title: "Our Products",
      list: [
        {
          name: "Account Payable",
          route: "/",
        },
        {
          name: "Account Receivable",
          route: "/",
        },
        {
          name: "Cashflow",
          route: "/",
        },
      ],
    },
    {
      title: "Company",
      list: [
        {
          name: "About us",
          route: "/",
        },
        {
          name: "Media kit",
          route: "/",
        },
        {
          name: "Contact us",
          route: "/",
        },
      ],
    },
  ];
  const socialIcons = [
    {
      name: "facebook",
      icon: Facebook,
      link: "#",
    },

    {
      name: "Instagram",
      icon: Instagram,
      link: "#",
    },

    {
      name: "Linkedin",
      icon: Linkedin,
      link: "#",
    },

    {
      name: "Twitter",
      icon: Twitter,
      link: "#",
    },

    {
      name: "Youtube",
      icon: Youtube,
      link: "#",
    },
  ];
  const footerBottom = [
    {
      name: "English",
    },
    {
      name: "Cooking settings",
    },
    {
      name: " Do not sell my personal information",
    },
    {
      name: "Status",
    },
  ];
  return (
    <Box component={"footer"} className="footer-parent">
      <Container sx={{ borderTop: "1.29073px solid rgba(0, 0, 0, 0.1)" }}>
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "15px", marginBottom: "20px" }}
        >
          <Grid item xs={12} md={4}>
            <Box className="main-box">
              <img src={Logo} alt="logo" loading="lazy" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box className="main-box">
              <Typography variant="h4">{footerData[0]?.title}</Typography>
              <ul>
                {footerData[0]?.list?.map((item) => (
                  <NavLink key={item?.name} to={item.route}>
                    {item.name}
                  </NavLink>
                ))}
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box className="main-box">
              <Typography variant="h4">{footerData[1]?.title}</Typography>
              <ul>
                {footerData[1]?.list?.map((item) => (
                  <NavLink key={item?.name} to={item.route}>
                    {item.name}
                  </NavLink>
                ))}
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ borderTop: "1.29073px solid rgba(0, 0, 0, 0.1)" }}>
        <Grid container spacing={2} sx={{ marginTop: "15px" }}>
          <Grid item xs={12} md={6}>
            <Box className="down-box">
              {footerBottom?.map((e) => (
                <React.Fragment key={e?.name}>
                  <span>{e?.name}</span>
                </React.Fragment>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="social-icons">
              {socialIcons.map((item) => (
                <a
                  href={item.link}
                  key={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon />
                </a>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterHome;
