import { Box, Modal } from "@mui/material";

import "./CategoriesModel.scss";
import { useNavigate } from "react-router-dom";
import CategoriesEditModel from "./CategoriesEditModel";

function CategoriesModel({ open, handleClose, type = 0 }) {
  return (
    <Box className="CategoriesModel-model-parent">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        className="model CategoriesModel-model-parent"
        aria-describedby="modal-modal-description"
      >
        {type === 0 ? <CategoriesEditModel handleClose={handleClose} /> : ""}
      </Modal>
    </Box>
  );
}

export default CategoriesModel;
