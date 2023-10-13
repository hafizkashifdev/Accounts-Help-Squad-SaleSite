"use client";

import { Menu, Button, Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { MenuItemCard } from "../menu-item-card/MenuItemCard";
import { menuItemsData } from "./DropDownMenu.data";
import { BookDemoMenuItem } from "../book-demo-menu-item/BookDemoMenuItem";

export const DropDownMenu = () => {
  //   const { ticketsActionDropdown } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple
        endIcon={
          open ? (
            <KeyboardArrowUpIcon sx={{ color: "#2B2B33" }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ color: "#2B2B33" }} />
          )
        }
        sx={{
          color: "#2B2B33",
          fontsize: "16px",
          fontWeight: "500",
          backgroundColor: "transparent",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        Services
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          ".MuiMenu-paper": {
            maxWidth: { md: "500px" },
            borderRadius: "10px",
          },
        }}
      >
        <Grid container>
          {menuItemsData.map((x: any) => (
            <Grid item xs={12} md={6}>
              <MenuItemCard itemName={x?.name} itemId={x?.id} />
            </Grid>
          ))}
        </Grid>
        <hr />
        <BookDemoMenuItem />
      </Menu>
    </div>
  );
};
