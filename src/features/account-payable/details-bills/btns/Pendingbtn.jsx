import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Pendingbtn = () => {
  return (
    <>
      <div className="margin-top-3 flex justify-end">
        <Button
          variant="outlined"
          sx={{
            color: "#6B6B80",
            borderColor: "#6B6B80",
            px: "15",
            py: "8",
            border: "2px solid #6B6B80",
            fontWeight: 400,
            fontSize: "12px",
            borderRadius: "8px",
            minWidth: "95px",
            textTransform: "capitalize",
            transition: "all 0.3s ease",
            "&:hover": {
              // borderColor: 'black',
              border: "2px solid black",
              //color:'black',
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.6)", // Add a box shadow on hover
              transform: "scale(1)",
            },
          }}
        >
          Add Credit Note{" "}
          <span style={{ marginLeft: "5px", marginTop: "4px" }}>
            <AddIcon fontSize="small" />
          </span>
        </Button>
      </div>
      <div className="margin-top-3 flex justify-end">
        <Button
          variant="contained"
          className="font-family-Exo  border-radius-8"
          color="primary"
          sx={{
            px: "25px",
            py: "10px",
            minWidth: "95px",
            background: "#2B2B33",
            "&:hover": {
              background: "#2B2B33",
            },
          }}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default Pendingbtn;
