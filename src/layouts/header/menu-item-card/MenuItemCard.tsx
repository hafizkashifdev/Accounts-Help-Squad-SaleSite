"use client";

import { Typography, MenuItem, Box } from "@mui/material";
import Image from "next/image";
import LogoIcon from "@root/assets/layout/images/logo-icon.svg";
export const MenuItemCard = ({ itemOnClick, itemName, itemId }: any) => {
  return (
    <MenuItem key={itemId} onClick={() => itemOnClick?.()}>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Box
          width={"30px"}
          height={"30px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ backgroundColor: "#F0F0F2", borderRadius: "4px" }}
        >
          <Image src={LogoIcon} alt="brand-logo" width={20} height={20} />
        </Box>
        <Typography
          fontWeight={500}
          sx={{ color: "#6B6B80", fontSize: "14px" }}
        >
          {itemName}
        </Typography>
      </Box>
    </MenuItem>
  );
};
