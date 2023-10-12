import React from "react";
import { Button, Card, Typography, Box } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ExportModal from "../export-modal/export-modal";
import DatePickerModal from "../date-picker-modal/date-picker-modal";
import "./card.scss";

const CardFilter = ({ handleClick, filter_type, isOpen }) => {
  return (
    <div>
      {isOpen && (
        <Card
          sx={{
            width: "592px",
            // height: '376px',
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

          {filter_type === "Export" ? (
            <ExportModal />
          ) : (
            filter_type === "More" && <DatePickerModal />
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
};

export default CardFilter;
