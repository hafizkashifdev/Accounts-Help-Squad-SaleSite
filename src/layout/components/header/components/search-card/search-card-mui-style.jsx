import { Paper } from "@mui/material";

export const ListBoxPaper = (props) => {
  return <Paper {...props} sx={SELECTPAPER} />;
};

export const AUTOCOMPLETEINPUT = {
  "& .MuiOutlinedInput-root": {
    height: '40px',
    "& > fieldset": {
      border: '1px solid #EEEEEE !important',borderRadius:'5px !important'
    },
    "& > input": {
      borderColor: '#E2E2E2',
      color:'#40404D',
      fontFamily:"\"Exo 2\"",
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'black' 
      }
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: '#EEEEEE'
    }
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: '#EEEEEE'
    }
  },
}
export const SELECTPAPER = {
  mt:'15px',
  "& a": {
    display:'inline-block',
    width:'100%',
    height:'100%',
    color: '#4E4B66',
    fontSize: '14px',
    p:'10px'
  },
  "& a:hover ": {
    textDecoration: "none",
  },
  "& a:hover": {
    backgroundColor: "#E5E5E5 !important"
  },
}