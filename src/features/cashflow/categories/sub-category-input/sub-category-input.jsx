import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, TextField } from "@mui/material";
import GlobalButton from "../../../../components/global-button/global-button";

const SubCategoryInput = ({ onSaveSubCategory,toastMessage }) => {
  const handleSaveSubCategory = () => {
    // Logic for saving the subcategory

    // Display toast message
    toast.success(toastMessage);

    // Call the callback to close the SubCategoryInput component
    onSaveSubCategory();
  };

  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between",backgroundColor: "#FFFFFF",
    boxShadow: "0px 0px 9px rgba(0,0,0,0.1)",
    border: "1px solid rgba(107, 107, 128, 0.1)",
    borderRadius: "8px",
    p: 2.5,
    position: "relative", }}>
      <TextField
        size="small"
        sx={{
          width: { sm: "154px", xs: "100%" },
          mr:{sm:0,xs:2},
          backgroundColor: "#F0F0F2",
          fontSize: "10px",
          lineHeight: "12px",
          borderBottom: "none",
          borderColor: "#F0F0F2",
        }}
        inputProps={{
          style: {
            height: "100%",
            padding: "4px 8px",
          },
        }}
      />
      <GlobalButton btnText="Save" btnName="accent" onClick={handleSaveSubCategory} />
    </Box>
  );
};

export default SubCategoryInput;
