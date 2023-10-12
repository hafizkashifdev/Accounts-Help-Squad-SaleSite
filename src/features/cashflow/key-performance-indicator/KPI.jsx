import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { DashboardSelect } from "../../dashboard-select/dashboard-select";
import checkTic from "../../../assests/images/client/check.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  KPItabledata,
  KPItableheading,
} from "../key-performance-indicator/KPI-data";
import TableAction from "../../../components/Table/TableAction";
import { ReactComponent as Add } from "../../../assests/svg/add-circle-white.svg";
import "./kpi.scss";
import DeletePrompt from "../../../components/Table/prompt/DeletePrompt";
import EditKeyModal from "./EditKeyModal";
import KeyPerformanceIndicatorModal from "./key-performance-indicator-modal";
const KPI = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [clickedRowIndex, setClickedRowIndex] = useState(-1);
  const [selectBranch, setSelectBranch] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const [isPerformanceModalOpen, setPerformanceModalOpen] = useState(false);

  const handleOpenPerformanceModal = () => {
    setPerformanceModalOpen(true);
  };

  const handleClosePerformanceModal = () => {
    setPerformanceModalOpen(false);
  };

  const handleKPIStatusClick = (index) => {
    setClickedRowIndex(index);
  };

  const handleOpenEdit = () => {
    setOpenEdit(true)
  }
  const handleCloseEdit = () => {
    setOpenEdit(false)
  }

  const filteredData = KPItabledata.filter((data) =>
    Object.values(data).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  return (
    <>
      <label
        htmlFor="kpi"
        className="primary-color font-weight-600 heading-20 font-family-Exo"
      >
        Key Performance Indicator
      </label>
      <div className="parent-kpi">
        <Grid container className="first-section">
          <Grid item xs={12} lg={2.5}>
            <DashboardSelect
              id="branch"
              placeholder="Sort By"
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
                ".MuiSelect-select:hover": {
                  bgcolor: "#F0F0F2",
                },
                ".MuiSelect-icon": { top: "40%" },
                // maxWidth: "330px",
                // width: "100%"
              }}
              selectVal={selectBranch}
              setSelectVal={setSelectBranch}
              data={[]}
            />
          </Grid>

          <Grid item className="button-section">
            <Button onClick={handleOpenPerformanceModal}>
              Add New KPI
              <span>
                <Add />
              </span>
            </Button>
          </Grid>
          <KeyPerformanceIndicatorModal
            openAdd={isPerformanceModalOpen}
            handleClosePerformanceModal={handleClosePerformanceModal}
          />
        </Grid>
        <TableContainer sx={{ mt: 2 }}>
          <Table sx={{ border: "0" }}>
            <TableHead>
              <TableRow>
                {KPItableheading.map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{ background: "#F0F0F2", fontWeight: 600 }}
                    className="secondary-color font-family-exo2 primary-title"
                  >
                    {index === 0 ? (
                      <>
                        <img
                          src={checkTic}
                          alt="icon"
                          style={{ marginLeft: 4 }}
                        />
                        {header}
                      </>
                    ) : (
                      header
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{ width: "15%" }}
                    onClick={() => handleKPIStatusClick(index)}
                  >
                    {clickedRowIndex === index ? (
                      <CheckCircleIcon />
                    ) : (
                      <CheckIcon />
                    )}
                  </TableCell>
                  <TableCell
                    className="font-family-exo2 primary-color primary-title"
                    sx={{ fontWeight: 400, width: "20%" }}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell
                    className="font-family-exo2 primary-color primary-title"
                    sx={{ fontWeight: 400, width: "25%" }}
                  >
                    {row.IndicatorName}
                  </TableCell>
                  <TableCell
                    className="font-family-exo2 primary-color primary-title"
                    sx={{ fontWeight: 400, width: "25%" }}
                  >
                    {row.Formula === "" ? (
                      <Box>
                        Value (
                        <span style={{ color: "#0084AD" }}>Cash Outflow</span>
                        ,0)
                      </Box>
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell sx={{ width: "10%" }} className="tertiary-color">
                    {row.action === "" ? (
                      <Box sx={{ display: "flex" }}>
                        <DeletePrompt>
                          Selected Category will be Deleted
                        </DeletePrompt>
                        <TableAction onClicked={handleOpenEdit}/>
                      </Box>
                    ) : (
                      row.action
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <EditKeyModal open={openEdit} handleClose={handleCloseEdit}/>
    </>
  );
};

export default KPI;
