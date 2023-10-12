import { Box, Checkbox } from "@mui/material";
import React, { useState } from "react";
import CustomInput from "../../../components/CustomInput";

import GlobalButton from "../../../components/global-button/global-button";
import { useNavigate } from "react-router-dom";
import { optionsTime } from "../Model/Constants";

const InvoiceCreationDate = ({ edit, editIcon, id, item }) => {
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();
  return (
    <Box className="form-main-body">
      <Box className="top-section">
        <Box className="attachment-box">
          <p>Attachment</p>
          <Box className="attachment-checkbox">
            <Checkbox
              defaultChecked={false}
              value={checkbox}
              onChange={() => setCheckbox(!checkbox)}
              checked={checkbox}
              sx={{
                marginRight: "-12px",
                padding: "0px",
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
            <Box
              className={`span  ${checkbox ? "active" : "not-active"}`}
              onClick={() => setCheckbox(!checkbox)}
            >
              Invoice File
            </Box>
          </Box>
        </Box>

        <CustomInput
          label={"Time"}
          options={optionsTime}
          type="select"
          labelClass={"label-time"}
        />
      </Box>
      <Box className="body-section">
        <Box className="tabbing-dropdowns">
          <CustomInput label="From" placeholder="Entered/Selected Value" />
          <CustomInput label="Subject" placeholder="Entered/Selected Value" />
        </Box>
        <Box className="tabbing-created-at">
          <p>Create Date: </p>
          <Box className="date-box">10/02/2023</Box>
        </Box>
        <Box className="tabbing-message-box">
          <CustomInput
            required={false}
            label="Message"
            type="textarea"
            placeholder="Entered/Selected Value"
            inputClass="message-input"
          />
        </Box>
      </Box>
      <Box className="tabbing-form-button">
        <Box
          sx={{
            marginTop: "16px",
            justifyContent: "flex-end",
            display: "flex",
            flex: "1 1 auto",
            flexWrap: "wrap",
            rowGap: "10px",
          }}
        >
          <GlobalButton variant="accent" btnName="accent" btnText="Save" />
        </Box>
      </Box>
    </Box>
  );
};

export default InvoiceCreationDate;
