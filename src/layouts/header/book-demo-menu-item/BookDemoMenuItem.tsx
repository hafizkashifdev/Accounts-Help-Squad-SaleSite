"use client";

import { Typography, MenuItem, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import LogoIcon from "@root/assets/layout/images/logo-icon.svg";

export const BookDemoMenuItem = ({
  itemOnClick,
  itemName,
  itemDescription,
  btnText,
  btnClick,
}: any) => {
  return (
    <MenuItem onClick={() => itemOnClick?.()}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
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
          <Box>
            <Typography
              fontWeight={500}
              sx={{ color: "#6B6B80", fontSize: "14px" }}
            >
              {itemName || "Book a Demo"}
            </Typography>
            <Typography
              fontWeight={500}
              sx={{ color: "#A6A6B3", fontSize: "14px" }}
            >
              {itemDescription || "Discover AccountHelpSquad with our experts"}
            </Typography>
          </Box>
        </Box>
        <Button variant="contained" onClick={() => btnClick?.()}>
          {btnText || "Request a Demo"}
        </Button>
      </Box>
    </MenuItem>
  );
};
