import {
  Box,
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

import "./WorkflowModel.scss";
import { useNavigate } from "react-router-dom";

function WorkflowModel({
  open,
  handleClose,
  Tabbing_data,
  value,
  handleChange,
  edit,
}) {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <div className="model-parent">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        className="model model-parent"
        aria-describedby="modal-modal-description"
      >
        <Box className="model-body">
          <Box className="workflow-model">
            <Box className="top-section">
              <Typography variant="h2">Workflow Details</Typography>
              <Close
                onClick={handleClose}
                style={{ cursor: "pointer", zIndex: 200 }}
              />
            </Box>
            <Grid container spacing={2}>
              <Grid xs={12} lg={5} item>
                {" "}
                <Box className="top-section">
                  <Box className="attachment-box">
                    <p>Attachment</p>
                    <Box className="attachment-checkbox">
                      <Checkbox
                        defaultChecked={false}
                        sx={{
                          marginRight: "-12px",
                          padding: "0px",
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />
                      <Box className="span">Invoice File</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="tabbing-section">
                  <Typography sx={{ marginBottom: "20px" }} variant="h3">
                    Rules List
                  </Typography>
                  <Box className="tabbing">
                    {Tabbing_data?.map((e) => (
                      <Box
                        sx={{
                          display: edit ? "flex" : "block",
                          alignItems: edit ? "center" : "initial",
                          gap: edit ? "10px" : "0px",
                          marginBottom: "20px",
                        }}
                      >
                        <Box sx={{ width: "100%" }}>
                          <Box
                            className={`tabbing-item ${
                              value === e?.id ? "active" : ""
                            }`}
                            onClick={(event) => {
                              handleChange(event, e?.id);
                              setMenu(!menu);
                            }}
                            label={e.label}
                            key={e.id}
                            value={e?.id}
                          >
                            {e.label}
                            {e?.template && (
                              <Down
                                className={`${value === e?.id ? "active" : ""}`}
                                onClick={() => setMenu(!menu)}
                              />
                            )}
                          </Box>
                          {e?.template && menu && e?.id === value && (
                            <Box className="template-list">
                              <ul className="template-listing">
                                <li className="template-item">template #1</li>
                              </ul>
                            </Box>
                          )}
                        </Box>

                        {edit && (
                          <EditSvg
                            cursor={"pointer"}
                            className="edit-icon"
                            onClick={() =>
                              navigate(
                                `/workflows/form?step=${e?.step}&id=${e?.id}`
                              )
                            }
                          />
                        )}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} lg={7} item>
                <Box sx={{ marginTop: "24px" }}>
                  {Tabbing_data?.map(
                    ({ id, component: Component, ...item }) =>
                      id === value && (
                        <>
                          {" "}
                          <Component
                            edit={edit}
                            editIcon={editIcon}
                            item={item}
                            id={id}
                          />
                        </>
                      )
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default WorkflowModel;
