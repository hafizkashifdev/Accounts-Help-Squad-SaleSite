import React, { useRef, useState } from "react";
import { SimpleDialog } from "../../components/modal/simple-dialog";
import { Box, Grid } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactComponent as InflowIcon } from "../../assests/svg/import-transactions/down-arrow.svg";
import { ReactComponent as OutflowIcon } from "../../assests/svg/import-transactions/up-arrow.svg";

const importModalData = [
  {
    id: "1",
    title: "Cash Inflow",
    svg: <InflowIcon />,
  },
  {
    id: "2",
    title: "Cash Outflow",
    svg: <OutflowIcon />,
  },
];

export const ImportModal = ({open, handleClose }) => {

  const fileInputRef = useRef(null);

  const handleImportButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    handleClose();
    toast.success("File Imported Sucessfully");
  };

  return (
    <>
      <SimpleDialog
        open={open}
        paperSx={{ maxWidth: "608px", width: "100%", borderRadius: "8px" }}
        handleClose={handleClose}
        title="Select"
      >
        <Grid mt="30px" container spacing={3}>
          {importModalData?.map((item) => (
            <Grid key={item.id} item xs={6}>
              <Box
                className="border-radius-8 flex align-center flex-column cursor-pointer"
                sx={{
                  bgcolor: "#F3F3F3",
                  height: "298px",
                  justifyContent: "space-evenly",
                }}
                onClick={handleImportButtonClick}
              >
                {item.svg}
                <div className="sub-heading primary-color">{item.title}</div>
                {/* {item.btn} */}
              </Box>
            </Grid>
          ))}
        </Grid>
      </SimpleDialog>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange} // Add the event listener for file input change
      />
    </>
  );
};
