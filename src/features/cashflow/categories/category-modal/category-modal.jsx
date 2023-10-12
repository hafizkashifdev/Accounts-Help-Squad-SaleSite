import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import AddModal from '../add-modal/add-modal';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DellIcon from '../../../../assests/images/categories/dell-butn.png';
import DeleteModel from '../../../../components/modal/DeleteModel'; // Update the path to the FinancingData file
import SubCategoryInput from '../sub-category-input/sub-category-input';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryModal = ({ categoryText, categoryIcon, data }) => {
  const [gridHovered, setGridHovered] = useState(false);
  const [contentHovered, setContentHovered] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [expandedSubcategories, setExpandedSubcategories] = useState([]);

  const [showSubCategoryInputBox, setShowSubCategoryInputBox] = useState(false);

  const handleShowSubCategoryInputBox = () => {
    setShowSubCategoryInputBox(true);
  };

  const handleHideSubCategoryInputBox = () => {
    setShowSubCategoryInputBox(false);
  };

  const handleGridMouseEnter = () => {
    setGridHovered(true);
  };

  const handleGridMouseLeave = () => {
    setGridHovered(false);
  };

  const handleContentMouseEnter = () => {
    setContentHovered(true);
  };

  const handleContentMouseLeave = () => {
    setContentHovered(false);
  };

  const handleOpenAddModal = () => {
    setAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <>

{showSubCategoryInputBox ? (
        <SubCategoryInput onSaveSubCategory={handleHideSubCategoryInputBox}   toastMessage="A Subcategory added successfully" />
      ) : (
        <>
        
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: gridHovered ? '#F0F0F2' : '#FFFFFF',
          boxShadow: '0px 0px 9px rgba(0,0,0,0.1)',
          border: '1px solid rgba(107, 107, 128, 0.1)',
          borderRadius: '8px',
          p: 2.5,
          position: 'relative',
        }}
        onMouseEnter={handleGridMouseEnter}
        onMouseLeave={handleGridMouseLeave}
      >
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 2,
            position: 'relative',
          }}
        >
          <Box
            sx={{
              mr: 4,
              cursor: 'pointer',
              '& .MuiSvgIcon-root': {
                fontSize: contentHovered ? '12px' : '16px',
                transition: 'font-size 0.3s',
                color:
                  categoryIcon === 'PlayArrowSharpIcon' && contentHovered
                    ? 'black'
                    : 'initial',
              },
            }}
            onMouseEnter={handleContentMouseEnter}
            onMouseLeave={handleContentMouseLeave}
            onClick={handleExpand}
          >
            {categoryIcon === 'FiberManualRecordIcon' ? (
              <FiberManualRecordIcon
                sx={{
                  fontSize: contentHovered ? '12px' : '16px',
                  transition: 'font-size 0.3s',
                }}
              />
            ) : (
              <PlayArrowSharpIcon
                sx={{
                  color: contentHovered ? 'black' : '#B2B2B2',
                  transition: 'color 0.3s',
                  transform: isExpanded ? 'rotate(90deg)' : 'none',
                }}
              />
            )}
          </Box>
          <Typography sx={{ fontWeight: 400 }}>{categoryText}</Typography>
        </Box>
        {gridHovered && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              sx={{
                background: 'transparent',
                fontWeight: 400,
                mr: 2,
                color: '#B2B2B2',
                '&:hover': {
                  color: '#40404D',
                  background: 'transparent',
                  '& span svg': {
                    color: '#40404D',
                  },
                },
              }}
            >
              Add Note
              <span
                style={{
                  marginLeft: '8px',
                  marginTop: '-8px',
                  color: '#B2B2B2',
                  width: '14.33px',
                  height: '14.33px',
                }}
                onClick={handleOpenAddModal}
              >
                <ControlPointIcon />
              </span>
            </Button>
            <span> | </span>
            <Button
              sx={{
                background: 'transparent',
                fontWeight: 400,
                mr: 2,
                color: '#B2B2B2',
                '&:hover': {
                  color: '#40404D',
                  background: 'transparent',
                  '& span svg': {
                    color: '#40404D',
                  },
                },
                
              }}
              onClick={handleShowSubCategoryInputBox}
            >
              Add Sub Category
              <span
                style={{
                  marginLeft: '8px',
                  marginTop: '-8px',
                  color: '#B2B2B2',
                  width: '14.33px',
                  height: '14.33px',
                }}
              >
                <ControlPointIcon />
              </span>
            </Button>
            <Box
              sx={{ mt: 1, cursor: 'pointer', mr: 2 }}
              onClick={handleOpenDeleteModal}
            >
              <span>
                <img src={DellIcon} alt="Delete Icon" />
              </span>
            </Box>
          </Box>
        )}
      </Box>
      <Box> 
        <AddModal
          openAdd={isAddModalOpen}
          handleCloseAddModal={handleCloseAddModal}
        />
      </Box>
      <DeleteModel
        open={isDeleteModalOpen}
        handleClose={handleCloseDeleteModal}
        onDeleteClick={handleCloseDeleteModal}
      />
      </>)}
     
    </>
  );
};

export default CategoryModal;
