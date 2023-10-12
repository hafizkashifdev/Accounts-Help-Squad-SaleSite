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
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import checkTic from "../../../../assests/images/client/check.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { workflowtabledata, workflowtableheading } from "../DummyData";
import TableAction from "../../../../components/Table/TableAction";
import CustomInput from "../../../../components/CustomInput";
import { ReactComponent as Add } from "../../../../assests/svg/add-circle-white.svg";
import "./RulesCategory.scss";
import DeletePrompt from "../../../../components/Table/prompt/DeletePrompt";
import CategoriesModel from "../CategoriesModel/CategoriesModel";
import { useNavigate } from "react-router-dom";

const RulesCategory = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [clickedRowIndex, setClickedRowIndex] = useState(-1);
  const [openEditModel, setOpenEditModel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(1);

  const handleWorkStatusClick = (index) => {
    setClickedRowIndex(index);
  };

  const filteredData = workflowtabledata.filter((data) =>
    Object.values(data).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="parent-rules-category">
      <Box className="first-section">
        <CustomInput type="select" required={false} />

        <Box className="button-section">
          <Button onClick={() => navigate("/categories")}>
            View Categories
          </Button>
          <Button>
            Add New Categories
            <span>
              <Add />
            </span>
          </Button>
        </Box>
      </Box>
      <TableContainer sx={{ mt: 2 }}>
        <Table sx={{ border: "0" }}>
          <TableHead>
            <TableRow>
              {workflowtableheading.map((header, index) => (
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
                        style={{ marginLeft: 4, width: "20px" }}
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
                <TableCell onClick={() => handleWorkStatusClick(index)}>
                  {clickedRowIndex === index ? (
                    <CheckCircleIcon />
                  ) : (
                    <CheckIcon />
                  )}
                </TableCell>
                <TableCell
                  className="font-family-exo2 primary-color primary-title"
                  sx={{ fontWeight: 400 }}
                >
                  {row.id}
                </TableCell>
                <TableCell
                  className="font-family-exo2 primary-color primary-title"
                  sx={{ fontWeight: 400 }}
                >
                  {row.workflowname}
                </TableCell>
                <TableCell
                  className="font-family-exo2 primary-color primary-title"
                  sx={{ fontWeight: 400 }}
                >
                  {row.rules}
                </TableCell>
                <TableCell
                  className="font-family-exo2 primary-color primary-title"
                  sx={{ fontWeight: 400 }}
                >
                  {row.percentage}
                </TableCell>
                <TableCell
                  className="font-family-exo2 primary-color primary-title"
                  sx={{ fontWeight: 400 }}
                >
                  {row.description}
                </TableCell>
                <TableCell
                  className="font-family-exo2 primary-color primary-title"
                  sx={{ fontWeight: 400 }}
                >
                  {row.category}
                </TableCell>
                <TableCell sx={{}} className="tertiary-color">
                  {row.action === "" ? (
                    <Box style={{ display: "flex" }}>
                      <DeletePrompt>
                        Selected Category will be Deleted
                      </DeletePrompt>
                      <TableAction
                        onClicked={() => setOpenEditModel(!openEditModel)}
                      />
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
      <CategoriesModel
        open={openEditModel}
        handleClose={() => setOpenEditModel(!openEditModel)}
      />
    </div>
  );
};

export default RulesCategory;
