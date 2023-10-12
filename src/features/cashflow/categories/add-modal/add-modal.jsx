import React, { useState } from "react";
import { SimpleDialog } from "../../../../components/modal/simple-dialog";
import { Box } from "@mui/material";
import GlobalButton from "../../../../components/global-button/global-button";

const AddModal = ({ openAdd = false, handleCloseAddModal }) => {
  const [note, setNote] = useState("");

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <SimpleDialog
      paperSx={{ maxWidth: "592px", width: "100%" }}
      open={openAdd}
      handleClose={handleCloseAddModal}
      title="Add Note"
      titleClass="edituser_header primary-color font-weight-600 heading-20"
    >
      <Box sx={{ px: "5px", mt: 2 }}>
        <textarea
          value={note}
          onChange={handleNoteChange}
          placeholder="This note will be added"
          style={{
            width: "100%",
            height: "236px",
            borderRadius: "8px",
            backgroundColor: "#F0F0F2",
            padding: "8px",
            fontSize: "16px",
            fontFamily: "Exo, sans-serif",
            color: "#000",
            resize: "none",
            border: "1px solid #F0F0F2",
            "&::placeholder": {
              color: "#000",
            },
            "&:focus": {
              outline: "none",
              border: "1px solid transparent",
            },
          }}
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
            mt: 2,
          }}
        >
          <GlobalButton btnType btnText="Cancel" onClick={handleCloseAddModal} />
          <GlobalButton btnText="Save" btnName="accent" onClick={handleCloseAddModal} />
        </Box>
      </Box>
    </SimpleDialog>
  );
};

export default AddModal;
