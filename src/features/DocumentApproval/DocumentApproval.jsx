import {
  Grid,
  Box,
  Button,
  Typography,
  Pagination,
  styled,
} from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import "./DocumentApproval.scss";
import { GlobalSearchBar } from "../../components/global-search-filter/global-search-filter";
import PendingScreen from "./PendingScreen";
import MakeItPaid from "./MakeItPaid";
import Paid from "./Paid";
import Rejected from "./Rejected";

const SelectedPagination = styled(Pagination)(({ theme }) => ({
  "& .Mui-selected": {
    backgroundColor: "#6B6B80",
    color: "#FFFFFF",
  },
}));

const buttonStyles = {
  Pending: {
    backgroundColor: "#FFFFFF !important",
    color: "black !important",
    border: "2px solid #C4C4CC !important",
  },
  Scheduled: {
    backgroundColor: "#FFFFFF !important",
    color: "black !important",
    border: "2px solid #C4C4CC !important",
  },
  Paid: {
    backgroundColor: "#FFFFFF !important",
    color: "black !important",
    border: "2px solid #C4C4CC !important",
  },
  Rejected: {
    backgroundColor: "#FFFFFF !important",
    color: "black !important",
    border: "2px solid #C4C4CC !important",
  },
};
const selectedButtonStyles = {
  Pending: {
    backgroundColor: "#FFF0C2 !important",
    color: "#FFBF00 !important ",
    border: "2px solid #FFBF00 !important",
  },
  Scheduled: {
    backgroundColor: "#D1DEFF !important",
    color: "#3F75FF !important",
    border: "2px solid #3F75FF !important",
  },
  Paid: {
    backgroundColor: "#D3E7D8 !important",
    color: "#48995D !important",
    border: "2px solid #48995D !important",
  },
  Rejected: {
    backgroundColor: "#FFD1D1 !important",
    color: "#FF3F3F !important",
    border: "2px solid #FF3F3F !important",
  },
};
const DocumentApproval = () => {
  const [selectedButton, setSelectedButton] = React.useState("Pending");

  return (
    <Grid container spacing={2}>
      <Grid item lg={4} xs={12} sx={{ p: 2 }}>
        <GlobalSearchBar placeholder={"Search All Documents"} />

        <Box sx={{ display: "flex", gap: 0.5, mt: 4 }}>
          <Button
            className={`tertiary-color  font-family-exo2 ${
              selectedButton === "Pending" ? "selected" : ""
            }`}
            sx={{
              p: 2,
              fontSize: { md: "16px", sx: "8px" },
              height: "10px",
              textTransform: "capitalize",
              borderRadius: "8px",
              border: "2px",
              ...(selectedButton === "Pending"
                ? selectedButtonStyles.Pending
                : buttonStyles.Pending),
            }}
            onClick={() => setSelectedButton("Pending")}
          >
            Pending
          </Button>
          <Button
            className={`tertiary-color  font-family-exo2 ${
              selectedButton === "Scheduled" ? "selected" : ""
            }`}
            sx={{
              p: 2,
              fontSize: { md: "16px", sx: "6px" },
              height: "10px",
              textTransform: "capitalize",
              borderRadius: "8px",
              border: "2px",
              ...(selectedButton === "Scheduled"
                ? selectedButtonStyles.Scheduled
                : buttonStyles.Scheduled),
            }}
            onClick={() => setSelectedButton("Scheduled")}
          >
            Scheduled
          </Button>
          <Button
            className={`tertiary-color primary-title font-family-exo2 ${
              selectedButton === "Paid" ? "selected" : ""
            }`}
            sx={{
              p: 2,
              height: "10px",
              textTransform: "capitalize",
              borderRadius: "8px",
              border: "2px",
              ...(selectedButton === "Paid"
                ? selectedButtonStyles.Paid
                : buttonStyles.Paid),
            }}
            onClick={() => setSelectedButton("Paid")}
          >
            Paid
          </Button>
          <Button
            className={`tertiary-color primary-title font-family-exo2 ${
              selectedButton === "Rejected" ? "selected" : ""
            }`}
            sx={{
              p: 2,
              height: "10px",
              textTransform: "capitalize",
              borderRadius: "8px",
              border: "2px",
              ...(selectedButton === "Rejected"
                ? selectedButtonStyles.Rejected
                : buttonStyles.Rejected),
            }}
            onClick={() => setSelectedButton("Rejected")}
          >
            Rejected
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ mt: 2, fontSize: "12px" }}
            className="secondary-color tertiary-titl font-family-exo2"
          >
            Inbox sum: £91,397.00
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "12px" }}
              className="secondary-color tertiary-titl font-family-exo2"
            >
              1-4 of 4
            </Typography>
            <SelectedPagination count={0} color="primary" />
          </Box>
        </Box>
        <Grid>
          {Array.from({ length: 5 }).map((e, i) => (
            <Box key={i}>
              <Box sx={{ mt: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 600 }}
                    className="primary-color primary-title font-family-exo2"
                  >
                    Berghotel Grosse Scheidegg
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 400 }}
                    className="tertiary-color sub-heading font-family-exo2"
                  >
                    {" "}
                    £500.00
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "2rem",
                    mt: 1,
                    mb: 2,
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#6B6B80",
                      lineHeight: "18px",
                      textAlign: "left",
                    }}
                  >
                    20/03/2023
                  </Typography>

                  <Typography
                    sx={{
                      color: selectedButtonStyles[selectedButton]?.color,

                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                      textAlign: "left",
                    }}
                  >
                    {selectedButton}
                  </Typography>
                </Box>
                <Divider sx={{ mt: 2 }} />
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>

      <Grid
        item
        lg={8}
        xs={12}
        sx={{
          borderLeft: "2px solid #C4C4CC",
          p: 2,
          "@media (max-width: 1700px)": {
            borderLeft: "none",
          },
        }}
      >
        {" "}
        {selectedButton === "Pending" ? (
          <PendingScreen />
        ) : selectedButton === "Scheduled" ? (
          <MakeItPaid />
        ) : selectedButton === "Paid" ? (
          <Paid />
        ) : selectedButton === "Rejected" ? (
          <Rejected />
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};

export default DocumentApproval;
