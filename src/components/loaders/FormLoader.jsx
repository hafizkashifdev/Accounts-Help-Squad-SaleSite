import { Box } from "@mui/material";
import IsFetching from "./IsFetching";

const FormLoader = ({ children }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <IsFetching isFetching />
      {children}
    </Box>
  );
};

export default FormLoader;
