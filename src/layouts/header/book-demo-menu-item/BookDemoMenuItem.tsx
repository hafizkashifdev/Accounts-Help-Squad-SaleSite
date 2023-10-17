"use client";

import { Typography, MenuItem, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import BookADemo from "@root/assets/layout/images/book-a-demo.svg";

export const BookDemoMenuItem = ({
  itemOnClick,
  itemName,
  itemDescription,
  btnText,
  btnClick,
}: any) => {
  return (
    <MenuItem
      onClick={() => itemOnClick?.()}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 2,
        paddingY: 1,
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        flex={1}
        gap={1}
        // flexWrap={"wrap"}
      >
        <Box
          width={"30px"}
          height={"30px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            backgroundColor: "common.ghost",
            borderRadius: "4px",
            padding: 1.5,
          }}
        >
          <Image src={BookADemo} alt="book-a-demo" width={20} height={20} />
        </Box>
        <Box>
          <Typography
            sx={{ color: "primary.main", fontsize: "16px", fontWeight: "600" }}
          >
            {itemName || "Book a Demo"}
          </Typography>
          <Typography
            sx={{
              color: "primary.lighter",
              fontsize: "14px",
              fontWeight: "500",
              // wordBreak: "break-all",
              whiteSpace: "wrap",
            }}
          >
            {itemDescription || "Discover AccountHelpSquad with our experts"}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Button
          variant="contained"
          type="button"
          onClick={() => btnClick?.()}
          sx={{ borderRadius: "10px" }}
        >
          {btnText || "Request a Demo"}
        </Button>
      </Box>
    </MenuItem>
  );
};
