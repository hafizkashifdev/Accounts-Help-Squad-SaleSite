import React from "react";
import Box from "@mui/material/Box";
import TableAction from "../TableAction";
import DeleteModel from "../../modal/DeleteModel";
const DeletePrompt = (props) => {
  //---usestate handlers and themes
  const {add_icon, children, onDeleteClick} = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <TableAction size="small" type="delete" onClicked={handleOpen} />
      {open && (
        <DeleteModel
          open={open}
          handleClose={handleClose}
          onDeleteClick={onDeleteClick}
          children={children}
          add_icon={add_icon}
        />
      )}
    </Box>
  );
};

export default DeletePrompt;
