// MUI
import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

import { AUTOCOMPLETEINPUT, ListBoxPaper } from "./search-card-mui-style";
import { Link } from "react-router-dom";
import "./search-card.scss"
// Component Function Starts Here
const SearchCard = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  return (

    <Autocomplete
      open={toggleSearch}
      onOpen={() => setToggleSearch(true)}
      onBlur={() => setToggleSearch(false)}
      id="search-which-is-on-sidebar-already"
      sx={{ transition: 'all .25s linear', ".MuiInputBase-root": { pr: '10px !important' }, width: { sm: '300px', xs: '170px' } }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      ListboxProps={{ className: 'header-search-card', style: { maxHeight: "210px", paddingTop: 0, paddingBottom: 0 } }}
      size="small"
      PaperComponent={ListBoxPaper}
      renderOption={(props, option) => {
        return (
          <Link onClick={() => setToggleSearch(false)} key={option.id} href={option.path} className="search-item">
            <span {...props} className="secondary-title font-weight-400">{option.title}</span>
          </Link>
        );
      }}
      options={[1,2,2,2,2,2,2,2,2,2,2]}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          autoFocus {...params} sx={AUTOCOMPLETEINPUT}
          placeholder="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <></>
            ),
          }}
        />
      )}
    />

  );
};

export default SearchCard;