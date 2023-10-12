import React from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Export from "./Export";
import Date_Range from "./Date_Range";
import ExportModal from "../client-details/components/export-modal/export-modal";
import DatePickerModal from "../client-details/components/date-picker-modal/date-picker-modal";
import FilterModal from "../client-details/components/filter-modal/FilterModal";

function ShowFilters({ handleClick, filter_type, isOpen, page, input_filter }) {
  return (
    <div>
      {isOpen && (
        <Card
          sx={{
            width: "592px",
            // height: '376px',
            overflow: "auto !important",
            maxHeight: "460px",
            position: "absolute",
            right: "50px",
            zIndex: 999,
            padding: "24px",
            marginTop: "12px",
            background: "#FFFFFF",
            boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.16)",
            borderRadius: "8px",

            "@media (max-width: 768px)": {
              width: "auto",
              padding: "20px",
              margin: "10px",
            },
          }}
        >
          {/* <ul> */}
          <div
            className="icon-filter"
            onClick={handleClick}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <CancelOutlinedIcon className="cance-circle-icon" />{" "}
          </div>
          <div className="">
            <Typography
              className="heading-20 font-family-exo2 primary-color"
              sx={{ fontWeight: 600 }}
            >
              {filter_type === "More"
                ? "Filters"
                : filter_type === "Export" && "Export"}
            </Typography>
          </div>
          {filter_type == "Export" ? (
            <ExportModal />
          ) : filter_type === "filters" ? (
            <FilterModal />
          ) : filter_type == "More" && !page && !input_filter ? (
            <DatePickerModal />
          ) : (
            filter_type == "More" &&
            page &&
            input_filter && (
              <>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    {input_filter?.map((val, index) => (
                      <Grid
                        style={{ marginBottom: "40px" }}
                        spacing={2}
                        key={index}
                        item
                        xs={12}
                        md={6}
                        lg={6}
                      >
                        <InputLabel
                          id="demo-simple-select-filled-label"
                          className="field-label"
                        >
                          {val?.field}
                        </InputLabel>
                        <FormControl
                          variant="standard"
                          style={{ width: "260px", height: "48px" }}
                        >
                          <InputLabel id="demo-simple-select-filled-label">
                            Select
                          </InputLabel>
                          <Select
                            placeholder="Select"
                            labelId="demo-simple-select-filled-label"
                            // id="demo-simple-select-filled"
                            // value={value}
                            // onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {val?.Items?.map((data, i) => (
                              <React.Fragment key={i}>
                                <MenuItem value={data?.item}>
                                  {data?.item}
                                </MenuItem>
                              </React.Fragment>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </>
            )
          )}
          {/* </ul> */}
          <Box
            className="filter-below-btn"
            sx={{
              display: "flex",
              float: "right",
              marginTop: "40px",
              "@media (max-width: 600px)": {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                float: "none",
              },
            }}
          >
            <Button
              className="btn1 font-family-exo2 "
              onClick={handleClick}
              sx={{
                marginRight: "8px",
                "@media (max-width: 600px)": {
                  width: "100%",
                },
                "&:hover": {
                  borderColor: "#000000",
                  color: "#000000",
                },
              }}
            >
              Clear
            </Button>
            &nbsp;
            <Button
              className="btn2"
              onClick={handleClick}
              sx={{
                color: "#FFFFFF",
                background: "#000000",
                "&:hover": {
                  background: "#000000",
                  color: "#FFFFFF",
                },
              }}
            >
              Apply
            </Button>
          </Box>
        </Card>
      )}
    </div>
  );
}

export default ShowFilters;
