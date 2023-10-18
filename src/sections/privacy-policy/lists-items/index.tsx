"use client";
import { Box } from "@mui/material";

export const ListsItems = ({ items, ...props }: any) => {
  return (
    <Box
      marginLeft={2}
      sx={{ fontSize: ".9rem", fontWeight: 500, color: "primary.lighter" }}
    >
      <ul>
        {items?.map((x: any, index: any) => {
          return (
            <li key={x?.id + index} style={{ marginBottom: 8 }}>
              {x?.value}
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
