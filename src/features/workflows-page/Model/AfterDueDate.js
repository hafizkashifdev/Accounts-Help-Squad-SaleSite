import { Box, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../../../components/CustomInput";
import { optionsDays, optionsTime } from "./Constants";
import GlobalButton from "../../../components/global-button/global-button";
import { useNavigate } from "react-router-dom";

const AfterDueDate = ({ edit, editIcon, item, id }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box className="tabbing-top">
        <Box className="tabbing-dropdowns">
          <CustomInput type="select" label="Days" options={optionsDays} />
          <CustomInput type="select" label="Time" options={optionsTime} />
        </Box>
      </Box>
      <Box className="tabbing-body">
        <Box className="tabbing-dropdowns">
          <CustomInput label="From" placeholder="Entered/Selected Value" />
          <CustomInput label="Subject" placeholder="Entered/Selected Value" />
        </Box>
        <Box className="tabbing-bottom">
          <Typography>Message</Typography>
          <Box className="tabbing-message-box">
            <Typography>Dear Client Name</Typography>

            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </Typography>

            <Typography>Sincerely,</Typography>
            <Typography>Company Name</Typography>
          </Box>
        </Box>
        {edit && (
          <Box sx={{ marginTop: "30px", textAlign: "end" }}>
            <GlobalButton
              variant="accent"
              btnName="accent"
              onClick={() =>
                navigate(`/workflows/form?step=${item?.step}&id=${id}`)
              }
              btnText="Edit "
              endIcon={
                <img src={editIcon} alt="Export Text" width={16} height={16} />
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AfterDueDate;
