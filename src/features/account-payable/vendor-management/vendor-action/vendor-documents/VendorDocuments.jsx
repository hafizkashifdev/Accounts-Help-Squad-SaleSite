import React, { useState } from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  Pagination,
  styled,
  TextField,
  InputAdornment,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import "./vendordocuments.scss";
import DocumentDetail from "./document-detail/DocumentDetail";
import VendorDocumentModel from "./VendorDocumentModel";

const SelectedPagination = styled(Pagination)(({ theme }) => ({
  "& .Mui-selected": {
    backgroundColor: "#6B6B80",
    color: "#FFFFFF",
  },
}));

const selectedStatusStyles = {
  Pending: {
    color: "#FFBF00",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: `'Exo 2', "Roboto", "sans-serif"`
  },
  Scheduled: {
    color: "#3F75FF",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: `'Exo 2', "Roboto", "sans-serif"`
  },
  Paid: {
    color: "#48995D",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: `'Exo 2', "Roboto", "sans-serif"`
  },
  Rejected: {
    color: "#FF3F3F",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: `'Exo 2', "Roboto", "sans-serif"`
  },
};

const searchBarStyle = {
  width: 333,
  ".MuiInputBase-root": { alignItems: "baseline" },
  ".MuiInputBase-input": { p: "4px 10px 12px", color: "#40404D" },
  ".Mui-focused:after": {
    borderBottom: "2px solid #C4C4CC !important",
  },
  ".MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error):before": {
    borderBottom: "2px solid #C4C4CC !important",
  },
  ".MuiInputBase-root:before": {
    borderBottom: "1.6px solid #C4C4CC !important",
  },
  ".MuiInput-underline:after": {
    borderBottomColor: "#C4C4CC",
  },
  "@media (max-width: 600px)": {
    width: "100%",
  },
};

const VendorDocuments = () => {
  const [status, setStatus] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenVendor = () => {
    setOpenFilter(true);
  };
  const handleCloseVendor = () => {
    setOpenFilter(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xl={4} xs={12} sx={{ p: 2 }}>
        <TextField
          id="standard-search"
          type="search"
          fullWidth
          className="font-family-Exo"
          sx={{ ...searchBarStyle, width: { xl: "100%", md: 333, xs: 333 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z"
                    fill="#777777"
                  />
                  <path
                    d="M20.16 22.79C20.08 22.79 20 22.78 19.93 22.77C19.46 22.71 18.61 22.39 18.13 20.96C17.88 20.21 17.97 19.46 18.38 18.89C18.79 18.32 19.48 18 20.27 18C21.29 18 22.09 18.39 22.45 19.08C22.81 19.77 22.71 20.65 22.14 21.5C21.43 22.57 20.66 22.79 20.16 22.79ZM19.56 20.49C19.73 21.01 19.97 21.27 20.13 21.29C20.29 21.31 20.59 21.12 20.9 20.67C21.19 20.24 21.21 19.93 21.14 19.79C21.07 19.65 20.79 19.5 20.27 19.5C19.96 19.5 19.73 19.6 19.6 19.77C19.48 19.94 19.46 20.2 19.56 20.49Z"
                    fill="#777777"
                  />
                </svg>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <svg
                  onClick={handleOpenVendor}
                  className="cursor-pointer"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.94 22.6496C10.46 22.6496 9.99002 22.5296 9.55002 22.2896C8.67002 21.7996 8.14002 20.9096 8.14002 19.9096V14.6096C8.14002 14.1096 7.81002 13.3596 7.50002 12.9796L3.76002 9.01961C3.13002 8.38961 2.65002 7.30961 2.65002 6.49961V4.19961C2.65002 2.59961 3.86002 1.34961 5.40002 1.34961H18.6C20.12 1.34961 21.35 2.57961 21.35 4.09961V6.29961C21.35 7.34961 20.72 8.53961 20.13 9.12961L15.8 12.9596C15.38 13.3096 15.05 14.0796 15.05 14.6996V18.9996C15.05 19.8896 14.49 20.9196 13.79 21.3396L12.41 22.2296C11.96 22.5096 11.45 22.6496 10.94 22.6496ZM5.40002 2.84961C4.70002 2.84961 4.15002 3.43961 4.15002 4.19961V6.49961C4.15002 6.86961 4.45002 7.58961 4.83002 7.96961L8.64002 11.9796C9.15002 12.6096 9.65002 13.6596 9.65002 14.5996V19.8996C9.65002 20.5496 10.1 20.8696 10.29 20.9696C10.71 21.1996 11.22 21.1996 11.61 20.9596L13 20.0696C13.28 19.8996 13.56 19.3596 13.56 18.9996V14.6996C13.56 13.6296 14.08 12.4496 14.83 11.8196L19.11 8.02961C19.45 7.68961 19.86 6.87961 19.86 6.28961V4.09961C19.86 3.40961 19.3 2.84961 18.61 2.84961H5.40002V2.84961Z"
                    fill="#777777"
                  />
                  <path
                    d="M6.00004 10.7493C5.86004 10.7493 5.73004 10.7093 5.60004 10.6393C5.25004 10.4193 5.14004 9.94929 5.36004 9.59929L10.29 1.69929C10.51 1.34929 10.97 1.23929 11.32 1.45929C11.67 1.67929 11.78 2.13929 11.56 2.48929L6.63004 10.3893C6.49004 10.6193 6.25004 10.7493 6.00004 10.7493Z"
                    fill="#777777"
                  />
                </svg>
              </InputAdornment>
            ),
            className: "font-family-Exo",
          }}
          variant="standard"
          placeholder="Search"
        />

        <Box className="flex justify-space-between margin-top-3">
          <Typography
            sx={{ mt: 2 }}
            className="secondary-color tertiary-titl font-family-Exo"
          >
            Inbox sum: £91,397.00
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography
              variant="body1"
              className="secondary-color tertiary-titl font-family-Exo"
            >
              1-4 of 4
            </Typography>
            <SelectedPagination count={0} color="primary" />
          </Box>
        </Box> 
        <Grid>
          <Box sx={{ mt: 1 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography
                className="primary-color primary-title font-weight-600 font-family-Exo"
              >
                {" "}
                Berghotel Grosse Scheidegg
              </Typography>
              <Typography
                className="tertiary-color sub-heading  font-weight-400 font-family-Exo"
              >
                {" "}
                £500.00
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "2rem", mt: 1, mb: 2, alignItems: "center" }}>
              <Typography className="font-family-Exo tertiary-title font-weight-400 secondary-color">20/03/2023</Typography>

              <Typography sx={{ color: status ? selectedStatusStyles[status] : selectedStatusStyles.Pending }}>
                {status ? status : "Pending"}
              </Typography>
            </Box>
            <Divider sx={{ mt: 2 }} />
          </Box>

          <Box sx={{ mt: 1 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography
                sx={{ fontWeight: 600 }}
                className="primary-color primary-title font-weight-600 font-family-Exo"
              >
                {" "}
                Berghotel Grosse Scheidegg
              </Typography>
              <Typography
                className="tertiary-color sub-heading font-family-400 font-family-Exo"
              >
                {" "}
                £500.00
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "2rem", mt: 1, mb: 2, alignItems: "center" }}>
              <Typography className="font-family-Exo tertiary-title font-weight-400 secondary-color">20/03/2023</Typography>

              <Typography sx={{  color: status ? selectedStatusStyles[status] : selectedStatusStyles.Paid }}>
                {status ? status : "Paid"}
              </Typography>
            </Box>
            <Divider sx={{ mt: 2 }} />
          </Box>
          <Box sx={{ mt: 1 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography
                className="primary-color primary-title font-weight-600 font-family-Exo"
              >
                {" "}
                Berghotel Grosse Scheidegg
              </Typography>
              <Typography
                className="tertiary-color sub-heading font-weight-400 font-family-Exo"
              >
                {" "}
                £500.00
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "2rem", mt: 1, mb: 2, alignItems: "center" }}>
              <Typography className="font-family-Exo tertiary-title font-weight-400 secondary-color">20/03/2023</Typography>

              <Typography sx={{  color: status ? selectedStatusStyles[status] : selectedStatusStyles.Rejected }}>
                {status ? status : "Rejected"}
              </Typography>
            </Box>
            <Divider sx={{ mt: 2 }} />
          </Box>

          <Box sx={{ mt: 1 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography
                className="primary-color primary-title font-weight-600 font-family-Exo"
              >
                {" "}
                Berghotel Grosse Scheidegg
              </Typography>
              <Typography
                className="tertiary-color sub-heading font-weight-400 font-family-Exo"
              >
                {" "}
                £500.00
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "2rem", mt: 1, mb: 2, alignItems: "center" }}>
              <Typography className="font-family-Exo tertiary-title font-weight-400 secondary-color">20/03/2023</Typography>

              <Typography sx={{  color: status ? selectedStatusStyles[status] : selectedStatusStyles.Scheduled }}>
                {status ? status : "Unpaid"}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid
        item
        xl={8}
        xs={12}
        sx={{
          borderLeft: "2px solid #C4C4CC",
          p: 2,
          "@media (max-width: 1700px)": {
            borderLeft: "none",
          },
        }}
      >
        <DocumentDetail />
      </Grid>

      <VendorDocumentModel
        openFilter={openFilter}
        handleCloseVendor={handleCloseVendor}
        setStatus={setStatus}
        status={status}
      />
    </Grid>
  );
};

export default VendorDocuments;
