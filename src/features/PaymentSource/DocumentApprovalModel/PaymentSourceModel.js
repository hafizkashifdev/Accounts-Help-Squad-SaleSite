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

import "./PaymentSourceModel.scss";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../components/CustomInput";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import GreatModel from "../../../components/modal/GreatModel";

function PaymentSourceModel({ open, handleClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const stepIncrease = () => {
    setStep(step + 1);
  };
  const stepDecrease = () => {
    setStep(step - 1);
  };
  return (
    <div className="PaymentSourceModel-model-parent">
      <Modal
        open={open}
        onClose={() => {
          setStep(1);
          handleClose();
        }}
        aria-labelledby="modal-modal-title"
        className="model PaymentSourceModel-model-parent"
        aria-describedby="modal-modal-description"
      >
        {step === 1 ? (
          <Step1
            handleClose={() => {
              setStep(1);
              handleClose();
            }}
            stepIncrease={stepIncrease}
          />
        ) : step === 2 ? (
          <Step2
            handleClose={() => {
              setStep(1);
              handleClose();
            }}
            stepIncrease={stepIncrease}
            stepDecrease={stepDecrease}
          />
        ) : step === 3 ? (
          <Step3
            handleClose={() => {
              setStep(1);
              handleClose();
            }}
            stepIncrease={stepIncrease}
            stepDecrease={stepDecrease}
          />
        ) : (
          <GreatModel
            handleClose={() => {
              setStep(1);
              handleClose();
            }}
          />
        )}
      </Modal>
    </div>
  );
}

export default PaymentSourceModel;
