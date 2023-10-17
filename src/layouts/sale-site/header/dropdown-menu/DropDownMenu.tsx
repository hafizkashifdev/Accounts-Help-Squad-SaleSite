"use client";

import { Menu, Button, Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { MenuItemCard } from "../menu-item-card/MenuItemCard";
import { menuItemsData } from "./DropDownMenu.data";
import { BookDemoMenuItem } from "../book-demo-menu-item/BookDemoMenuItem";
import { useRouter } from "next/navigation";

export const DropDownMenu = ({ setMenuClose }: any) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuClose?.(true);
  };

  return (
    <>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple
        endIcon={
          open ? (
            <KeyboardArrowUpIcon sx={{ color: "primary.main" }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ color: "primary.main" }} />
          )
        }
        sx={{
          color: "primary.main",
          fontsize: "18px",
          fontWeight: "600",
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
            maxWidth: { md: "600px" },
            borderRadius: "10px",
            padding: { xs: 0.1, md: 1 },
          },
        }}
      >
        <Grid container paddingBottom={1}>
          {menuItemsData?.map((x: any) => (
            <Grid key={x?.id} item xs={12} md={6}>
              <MenuItemCard
                itemName={x?.name}
                itemId={x?.id}
                itemOnClick={() => {
                  router.push(x?.link);
                  handleClose?.();
                }}
              />
            </Grid>
          ))}
        </Grid>
        <hr />
        <BookDemoMenuItem
          btnClick={() => {
            router.push("/request-a-demo");
            handleClose?.();
          }}
        />
      </Menu>
    </>
  );
};
