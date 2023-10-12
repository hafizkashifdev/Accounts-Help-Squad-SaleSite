import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../../components/CustomInput";
import { Box, Button } from "@mui/material";
import { ReactComponent as Add } from "../../../../assests/svg/add-circle-white.svg";
import SubCategoryInput from "../sub-category-input/sub-category-input";
import Fainancing from "../components/financing/financing";
import CategoryModal from "../category-modal/category-modal";
import Sales from "../components/sales/sales";
import DailyExpense from "../components/daily-expense/daily-expense";
const AddCategories = () => {
  const [showSubCategoryInputBox, setShowSubCategoryInputBox] = useState(false);
  const navigate = useNavigate();
  
  const handleSaveSubCategory = () => {

    setShowSubCategoryInputBox(false);
  };
  const handleShowSubCategoryInputBox = () => {
    setShowSubCategoryInputBox(!showSubCategoryInputBox);
  };

  const condition1 = [
    {
      title: "Category 1",
      value: "Category 1",
    },
    {
      title: "Category 2",
      value: "Category 12",
    },
    {
      title: "Category 3",
      value: "Category 3",
    },
  ];

  return (
    <>
      <div className="parent-rules-category">
        <Box className="first-section">
          <CustomInput type="select" required={false} options={condition1} />

          <Box className="button-section">
            <Button onClick={()=> navigate('/categories/view-category')}>View Categories Rules</Button>
            <Button onClick={handleShowSubCategoryInputBox}>
              Add New Categories
              <span>
                <Add />
              </span>
            </Button>
          </Box>
        </Box>
      </div>

      <CategoryModal
        categoryText="Uncategorized"
        categoryIcon="FiberManualRecordIcon"
      />

      <Fainancing />
      <Sales />
      <DailyExpense />
      {showSubCategoryInputBox && (
        <SubCategoryInput
          onSaveSubCategory={handleSaveSubCategory}
          toastMessage="A new Category added successfully "
        />
      )}
    </>
  );
};

export default AddCategories;
