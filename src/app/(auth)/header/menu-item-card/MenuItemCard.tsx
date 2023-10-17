"use client";

import { Typography, MenuItem, Box } from "@mui/material";
import Image from "next/image";
import LogoIcon from "@root/assets/layout/images/logo-icon.svg";
export const MenuItemCard = ({ itemOnClick, itemName }: any) => {
  return (
    <MenuItem
      onClick={() => {
        itemOnClick?.();
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={2}
        onClick={() => itemOnClick?.()}
      >
        <Box
          width={"30px"}
          height={"30px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ backgroundColor: "common.ghost", borderRadius: "4px" }}
        >
          <Image src={LogoIcon} alt="brand-logo" width={20} height={20} />
        </Box>
        <Typography
          fontWeight={500}
          sx={{ color: "primary.lighter", fontsize: "14px", fontWeight: 500 }}
        >
          {itemName}
        </Typography>
      </Box>
    </MenuItem>
  );
};
