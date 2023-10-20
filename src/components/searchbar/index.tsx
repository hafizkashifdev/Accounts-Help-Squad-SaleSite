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
          minWidth: { xs: "100%", md: 513 },
          maxWidth: 513,
          background: "#F0F0F2",
          borderRadius: "8px",
          "& fieldset": { border: "none" },
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
