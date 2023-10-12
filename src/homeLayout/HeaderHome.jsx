import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
import Logo from "../assests/home-page/home/logo-home.svg";
import "./HomeLayout.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useWindowDimensions } from "../hooks/useWindowDiemnsions";
import MobileHeader from "./MobileHeader";
const HeaderLayout = () => {
  const path = [
    {
      route: "/home",
      name: "Home",
      isSubMenu: false,
      list: null,
    },
    {
      route: "/account-payable",
      name: "Account Payable",
      isSubMenu: false,
      list: null,
    },
    {
      route: "/account-receivable",
      route: "/account-receivable",
      name: "Account Receivable",
      isSubMenu: false,
      list: null,
    },
    {
      route: "/account-receivable",
      route: "/cashflow",
      name: "Cashflow",
      isSubMenu: false,
      list: null,
    },
    {
      route: "/",
      name: "Resources",
      isSubMenu: true,
      list: [],
    },
  ];
  const [active, setActive] = useState(false);

  const { width } = useWindowDimensions();
  const isMobile = width < 900;
  const navigate = useNavigate();

  return (
    <Box component={"nav"} className="navbar-parent">
      <Container>
        <Box className="navbar-box">
          <Box className="image-box">
            <img src={Logo} alt="logo" loading="lazy" />
          </Box>
          {!isMobile && (
            <>
              <Box className="navbar-list-parent">
                <ul className="navbar-list">
                  {path?.map((e) => (
                    <React.Fragment key={e?.name}>
                      <NavLink to={e?.route}>{e?.name}</NavLink>
                    </React.Fragment>
                  ))}
                </ul>
              </Box>
              <Box className="navbar-btn-parent">
                <Button
                  endIcon={<ArrowForwardIosIcon fontSize="12" />}
                  onClick={() => navigate("/signin")}
                >
                  Sign In
                </Button>
              </Box>
            </>
          )}
          {isMobile && <MobileHeader path={path} />}
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderLayout;
