import { InputAdornment, TextField } from "@mui/material";
import { RefreshIcon, SearchIcon } from "@root/assets/export";

const Searchbar = () => {
  return (
    <TextField
      placeholder="Search here"
      InputProps={{
        sx: {
          height: 32,
          width: "100%",
          minWidth: { xs: "100%", lg: 513 },
          maxWidth: 513,

          background: "#F0F0F280",
          opacity: ".5",
        },
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <RefreshIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Searchbar;
