import {
  Box,
  Button,
  Checkbox,
  Grid,
  Menu,
  MenuItem,
  Modal,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as EditSvg } from "../../../assests/svg/workflow-edit.svg";
import editIcon from "../../../assests/images/settings/editIcon.png";
import { ReactComponent as Down } from "../../../assests/svg/chev-bottom.svg";
import { ReactComponent as Close } from "../../../assests/svg/model-close.svg";

import "./DocumentApprovalModel.scss";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../components/CustomInput";
import DeclineModel from "./DeclineModel";
import FullScreenModel from "./FullScreenModel";
import UploadTableModel from "./UploadTableModel";

function DocumentApprovalModel({ open, handleClose, type = 0 }) {
  const navigate = useNavigate();
  return (
    <div className="documentApprovalModel-model-parent">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        className="model documentApprovalModel-model-parent"
        aria-describedby="modal-modal-description"
      >
        {type === 0 ? (
          <DeclineModel handleClose={handleClose} />
        ) : type === 1 ? (
          <FullScreenModel handleClose={handleClose} />
        ) : type === 2 ?  <UploadTableModel  handleClose={handleClose}/>  : (
         <></>
        )}
      </Modal>
    </div>
  );
}

export default DocumentApprovalModel;
