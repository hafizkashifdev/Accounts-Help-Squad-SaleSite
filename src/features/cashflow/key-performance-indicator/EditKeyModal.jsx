import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import GlobalButton from "../../../components/global-button/global-button";
import { DashboardSelect } from "../../dashboard-select/dashboard-select";
import { TextareaAutosize } from "@mui/base";
import { SimpleDialog } from "../../../components/modal/simple-dialog";

const EditKey = ({ open, handleClose }) => {
  const [category, setCategory] = useState("");
  const [indcator, setIndicator] = useState("");
  const [account, setAccount] = useState("");
  return (
    <SimpleDialog
      open={open}
      handleClose={handleClose}
      title={
        <Typography className="font-weight-600 heading-20 font-family-Exo">
          Edit the formula{" "}
          <span className="secondary-color">
            Gross cash burn (total Cashflows)
          </span>
        </Typography>
      }
      paperSx={{maxWidth: "980px", width: "100%", borderRadius: "8px"}}
    >
      <Box>
        <Typography
          sx={{ my: 4 }}
          className="sub-heading font-weight-400 font-family-Exo primary-color"
        >
          Indicator's Computation Formula
        </Typography>
        <Box className="flex justify-space-between">
          <Grid container className="flex" gap="2rem">
            <Grid item maxWidth="200px" className="margin-bottom-1 width-100">
              <DashboardSelect
                id="Document Type"
                placeholder="Categories"
                fullWidth={true}
                MenuSx={{
                  ".MuiMenuItem-root": {
                    color: "#6B6B80",
                    fontSize: "14px",
                    fontWeight: 400,
                  },
                  marginTop: "10px",
                  boxShadow: "0px 6px 6px 6px #DEDEDE40",
                  borderRadius: "8px",
                  ".MuiList-root": { p: "0" },
                  ".Mui-selected": { bgcolor: "#F0F0F2 !important" },
                  ".Mui-selected:hover": { bgcolor: "#F0F0F2" },
                }}
                selectSx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderBottom: "1.6px solid #C4C4CC !important",
                  },
                  ".MuiSelect-select": {
                    p: "10.5px 14px",
                    fontWeight: "400",
                    color: "#40404D",
                    fontSize: "15px",
                  },
                  ".MuiSelect-icon": { top: "40%" },
                }}
                selectVal={category}
                setSelectVal={setCategory}
                data={["Category 1", "Category 2"]}
              />
            </Grid>

            <Grid item maxWidth="200px" className="margin-bottom-1 width-100">
              <DashboardSelect
                id="Document Type"
                placeholder="Indicator"
                fullWidth={true}
                MenuSx={{
                  ".MuiMenuItem-root": {
                    color: "#6B6B80",
                    fontSize: "14px",
                    fontWeight: 400,
                  },
                  marginTop: "10px",
                  boxShadow: "0px 6px 6px 6px #DEDEDE40",
                  borderRadius: "8px",
                  ".MuiList-root": { p: "0" },
                  ".Mui-selected": { bgcolor: "#F0F0F2 !important" },
                  ".Mui-selected:hover": { bgcolor: "#F0F0F2" },
                }}
                selectSx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderBottom: "1.6px solid #C4C4CC !important",
                  },
                  ".MuiSelect-select": {
                    p: "10.5px 14px",
                    fontWeight: "400",
                    color: "#40404D",
                    fontSize: "15px",
                  },
                  ".MuiSelect-icon": { top: "40%" },
                }}
                selectVal={indcator}
                setSelectVal={setIndicator}
                data={["Indicator 1", "Indicator 2"]}
              />
            </Grid>

            <Grid item maxWidth="200px" className="margin-bottom-1 width-100">
              <DashboardSelect
                id="Document Type"
                placeholder="Account"
                fullWidth={true}
                MenuSx={{
                  ".MuiMenuItem-root": {
                    color: "#6B6B80",
                    fontSize: "14px",
                    fontWeight: 400,
                  },
                  marginTop: "10px",
                  boxShadow: "0px 6px 6px 6px #DEDEDE40",
                  borderRadius: "8px",
                  ".MuiList-root": { p: "0" },
                  ".Mui-selected": { bgcolor: "#F0F0F2 !important" },
                  ".Mui-selected:hover": { bgcolor: "#F0F0F2" },
                }}
                selectSx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    borderBottom: "1.6px solid #C4C4CC !important",
                  },
                  ".MuiSelect-select": {
                    p: "10.5px 14px",
                    fontWeight: "400",
                    color: "#40404D",
                    fontSize: "15px",
                  },
                  ".MuiSelect-icon": { top: "40%" },
                }}
                selectVal={account}
                setSelectVal={setAccount}
                data={["Account 1", "Account 2"]}
              />
            </Grid>
          </Grid>

          <Box>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.425 39.8125H12.075C5.2325 39.8125 2.1875 36.7675 2.1875 29.925V22.575C2.1875 15.7325 5.2325 12.6875 12.075 12.6875H19.425C26.2675 12.6875 29.3125 15.7325 29.3125 22.575V29.925C29.3125 36.7675 26.2675 39.8125 19.425 39.8125ZM12.075 15.3125C6.65 15.3125 4.8125 17.15 4.8125 22.575V29.925C4.8125 35.35 6.65 37.1875 12.075 37.1875H19.425C24.85 37.1875 26.6875 35.35 26.6875 29.925V22.575C26.6875 17.15 24.85 15.3125 19.425 15.3125H12.075Z"
                fill="#2B2B33"
              />
              <path
                d="M29.925 29.3125H28C27.2825 29.3125 26.6875 28.7175 26.6875 28V22.575C26.6875 17.15 24.85 15.3125 19.425 15.3125H14C13.2825 15.3125 12.6875 14.7175 12.6875 14V12.075C12.6875 5.2325 15.7325 2.1875 22.575 2.1875H29.925C36.7675 2.1875 39.8125 5.2325 39.8125 12.075V19.425C39.8125 26.2675 36.7675 29.3125 29.925 29.3125ZM29.3125 26.6875H29.925C35.35 26.6875 37.1875 24.85 37.1875 19.425V12.075C37.1875 6.65 35.35 4.8125 29.925 4.8125H22.575C17.15 4.8125 15.3125 6.65 15.3125 12.075V12.6875H19.425C26.2675 12.6875 29.3125 15.7325 29.3125 22.575V26.6875Z"
                fill="#2B2B33"
              />
            </svg>
          </Box>
        </Box>

        <Box>
          <div
            contentEditable={true}
            style={{ ...Styles.textArea(), height: "219px" }}
          >
            <div className="flex align-center">
              Value (
              <Button
                contentEditable={false}
                sx={{
                  bgcolor: "#0084AD",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  height: "32px",
                  color: "#fff",
                  "&:hover": {
                    borderLeft: "1px solid #0084AD",
                    borderRight: "1px solid #0084AD",
                    bgcolor: "#0084AD",
                  },
                }}
                endIcon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99967 15.1673C4.04634 15.1673 0.833008 11.954 0.833008 8.00065C0.833008 4.04732 4.04634 0.833984 7.99967 0.833984C11.953 0.833984 15.1663 4.04732 15.1663 8.00065C15.1663 11.954 11.953 15.1673 7.99967 15.1673ZM7.99967 1.83398C4.59967 1.83398 1.83301 4.60065 1.83301 8.00065C1.83301 11.4007 4.59967 14.1673 7.99967 14.1673C11.3997 14.1673 14.1663 11.4007 14.1663 8.00065C14.1663 4.60065 11.3997 1.83398 7.99967 1.83398Z"
                      fill="white"
                    />
                    <path
                      d="M6.11357 10.3869C5.9869 10.3869 5.86023 10.3402 5.76023 10.2402C5.5669 10.0469 5.5669 9.7269 5.76023 9.53357L9.53357 5.76023C9.7269 5.5669 10.0469 5.5669 10.2402 5.76023C10.4336 5.95357 10.4336 6.27357 10.2402 6.4669L6.4669 10.2402C6.37357 10.3402 6.24023 10.3869 6.11357 10.3869Z"
                      fill="white"
                    />
                    <path
                      d="M9.8869 10.3869C9.76023 10.3869 9.63357 10.3402 9.53357 10.2402L5.76023 6.4669C5.5669 6.27357 5.5669 5.95357 5.76023 5.76023C5.95357 5.5669 6.27357 5.5669 6.4669 5.76023L10.2402 9.53357C10.4336 9.7269 10.4336 10.0469 10.2402 10.2402C10.1402 10.3402 10.0136 10.3869 9.8869 10.3869Z"
                      fill="white"
                    />
                  </svg>
                }
              >
                cash Outflow
              </Button>
              ,0)
            </div>
            {/* <TextareaAutosize
              minRows={11}
              style={Styles.textArea()}
            /> */}
          </div>
        </Box>

        <Box className="margin-top-1">
          <Typography className="primary-title font-family-Exo font-weight-400 primary-color">
            Read our <span className="link-color">Formula guide here.</span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
            mt: "3rem",
          }}
        >
          <Button
        className="tertiary-color font-weight-400"
        sx={{px: "24px", py: "10px", width: "105px", height: "48px", borderRadius: "8px", border: "1px solid #40404D", ":hover": {border: "2px solid #40404D"}}}
        onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
        className="white-color font-weight-400"
        sx={{px: "26px", py: "10px", borderRadius: "8px", bgcolor: "#40404D", ":hover": {bgcolor: "#2B2B33"}}}
        onClick={handleClose}
        >
          Confirm
        </Button>
        </Box>
      </Box>

      <Box>
      </Box>
    </SimpleDialog>
  );
};

export default EditKey;

const Styles = {
  textArea: (theme) => ({
    width: "100%",
    resize: "none",
    borderRadius: "8px",
    border: "1px solid var(--theme-primary-p-80, #C4C4CC)",
    paddingLeft: "20px",
    paddingTop: "20px",
    fontWeight: 400,
    fontSize: "16px",
    fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
    color: "#C4C4CC",
  }),
};
