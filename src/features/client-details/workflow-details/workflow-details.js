import React, { useEffect, useState } from "react";
import {
  workflowtableheading,
  workflowtabledata,
} from "./workflow-details-data";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { GlobalSearchBar } from "../../../components/global-search-filter/global-search-filter";
import filterIcon from "../../../assests/images/client/filter.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import checkTic from "../../../assests/images/client/check.png";
import CardFilter from "../components/card-filter/card-filter";
import GlobalModal from "../../../components/global-modal/global-modal";
import { toast } from "react-toastify";
import editIcon from "../../../assests/images/client/editIcon.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GlobalButton from "../../../components/global-button/global-button";
import WorkflowModel from "../../workflows-page/Model/WorkflowModel";
import InvoiceCreationDate from "../../workflows-page/Model/InvoiceCreationDate";
import BeforeDueDate from "../../workflows-page/Model/BeforeDueDate";
import OnDueDate from "../../workflows-page/Model/OnDueDate";
import AfterDueDate from "../../workflows-page/Model/AfterDueDate";
import OnPaymentCollectionDate from "../../workflows-page/Model/OnPaymentCollectionDate";

const WorkflowDetails = ({setActiveTab}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [clickedRowIndex, setClickedRowIndex] = useState(-1);
  const [openEditModel, setOpenEditModel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(1);

  useEffect(()=>{
    setActiveTab(1);
  },[])

  const handleWorkStatusClick = (index) => {
    setClickedRowIndex(index);
  };
  // Modal Function
  const modalClickHandlar = () => {
    setIsOpen(!isOpen);
  };

  const openModalClickHandler = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleSureClick = () => {
    const toastText = "Workflow has been Changed";
    setOpenModal(false);
    toast.success(toastText);
  };
  const filteredData = workflowtabledata.filter((data) =>
    Object.values(data).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCloseEditModel = () => {
    setEdit(true);
    setOpenEditModel(!openEditModel);
  };

  const tabbing_data = [
    {
      label: "Invoice Creation Date",
      id: 1,
      component: InvoiceCreationDate,
      step: 1,
    },
    {
      label: "Before Due Date",
      id: 21,
      component: BeforeDueDate,
      step: 2,
      template: true,
    },
    {
      label: "On Due Date",
      id: 41,
      component: OnDueDate,
      step: 3,
    },
    {
      label: "After Due Date",
      id: 11,
      component: AfterDueDate,
      step: 4,
      template: true,
    },
    {
      label: "On Payment Collection Date",
      id: 15,
      component: OnPaymentCollectionDate,
      step: 5,
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div
        className="container-table"
        style={{
          margin: "5px",
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div style={{ alignSelf: "flex-start" }} className="search-bar">
          {" "}
          <GlobalSearchBar value={searchQuery} onChange={handleSearchChange} />
        </div>
        <div
          style={{ marginLeft: "auto", gap: "10px" }}
          className="invoices-tabal-header"
        >
          {clickedRowIndex !== -1 && (
            <Button
              variant="contained"
              width="122px"
              height="32px"
              sx={{
                mr: 2,
                background: "#2B2B33",
                fontWeight: 400,
                fontSize: "0.75rem",
                borderRadius: "8px",
                textTransform: "capitalize",
                "&:hover": {
                  background: "#2B2B33",
                },
                '@media (max-width: 600px)': {
                  width:'100%'
                },
              }}
              onClick={openModalClickHandler}
            >
              Change Workflow
            </Button>
          )}
          <GlobalButton
            variant="outlined"
            className="invoice-second-btn"
            btnText=" More Filters"
            endIcon={
              <img src={filterIcon} alt="More Filter" width={16} height={16} />
            }
            onClick={() => {
              setType("More");
              modalClickHandlar();
            }}
          />
           
         
          <CardFilter
            filter_type={type}
            handleClick={modalClickHandlar}
            isOpen={isOpen}
          />

          <GlobalModal
            open={openModal}
            handleClose={handleModalClose}
            onSureClick={handleSureClick}
            modalText="You want to change Workflow"
            modalIcon={editIcon}
          />
        </div>
      </div>
      <TableContainer sx={{ mt: 2 }}>
        <Table sx={{ border: "0" }}>
          <TableHead>
            <TableRow>
              {workflowtableheading.map((header, index) => (
                <TableCell key={index}  sx={{ background: '#F0F0F2',fontWeight:600 }} className='secondary-color font-family-exo2 primary-title'>
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
                <TableCell className='font-family-exo2 primary-color primary-title' sx={{fontWeight:400}}>{row.id}</TableCell>
                <TableCell className='font-family-exo2 primary-color primary-title' sx={{fontWeight:400}}>{row.workflowname}</TableCell>
                <TableCell className='font-family-exo2 primary-color primary-title' sx={{fontWeight:400}}>{row.rules}</TableCell>
                <TableCell className='font-family-exo2 primary-color primary-title' sx={{fontWeight:400}}>{row.percentage}</TableCell>
                <TableCell className='font-family-exo2 primary-color primary-title' sx={{fontWeight:400}} >{row.description}</TableCell>
                <TableCell sx={{}} className="tertiary-color" onClick={handleCloseEditModel}>
                  {row.action === "" ? <VisibilityIcon /> : row.action}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <WorkflowModel
        open={openEditModel}
        handleClose={handleCloseEditModel}
        Tabbing_data={tabbing_data}
        value={value}
        edit={edit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default WorkflowDetails;
