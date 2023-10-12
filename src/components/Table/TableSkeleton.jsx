import React from "react";
import { Box, Skeleton, useTheme } from "@mui/material";

const TableSkeleton = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <Box sx={{ mt: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {/* <CircularProgress sx={{ width: 90, height: 90 }} /> */}
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={50}
          sx={style.root(theme)}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={50}
          sx={style.root(theme)}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={50}
          sx={style.root(theme)}
        />
      </Box>
    </Box>
  );
};

export default TableSkeleton;

//style
const style = {
  root: (theme) => ({
    bgcolor: "#DFE3E8",
    borderRadius: "6px",
  }),
};
