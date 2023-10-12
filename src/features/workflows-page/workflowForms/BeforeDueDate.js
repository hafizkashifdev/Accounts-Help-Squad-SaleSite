import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomInput from "../../../components/CustomInput";
import { optionsDays, optionsTime } from "../Model/Constants";
import GlobalButton from "../../../components/global-button/global-button";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { ReactComponent as View } from "../../../assests/svg/add-form-view.svg";
import { ReactComponent as Edit } from "../../../assests/svg/add-form-edit.svg";

const BeforeDueDate = ({ edit, editIcon, item, id }) => {
  const [checkbox, setCheckbox] = useState(false);
  const [saveBtn, setSaveBtn] = useState(true);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [saveBtn]);

  return (
    <Box className="form-main-body">
      <Grid container spacing={2}>
        {!saveBtn && (
          <Grid item xs={12} lg={4}>
            <Box className="tabbing">
              <Box
                sx={{
                  marginBottom: "20px",
                }}
              >
                <Box className={`tabbing-item active`}>
                  <Box className="first-item">
                    <h5>Email Template 1</h5>
                    <p>Last updated: 01/03/2023</p>
                  </Box>
                  <Box>
                    <View />
                    <Edit style={{ marginLeft: "8px" }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        )}
        <Grid item xs={12} lg={saveBtn ? 12 : 8}>
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
              label={"Days"}
              options={optionsDays}
              type="select"
              labelClass={"label-time"}
            />
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
              <CustomInput
                label="Subject"
                placeholder="Entered/Selected Value"
              />
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
              <GlobalButton
                variant="accent"
                btnName="accent"
                btnText="Save"
                onClick={() => setSaveBtn(!saveBtn)}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BeforeDueDate;
