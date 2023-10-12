import React from "react";
import Categories from "../features/cashflow/categories/Categories";
import { useOutlet } from "react-router-dom";

const CategoryCashflow = () => {
  const outlet = useOutlet();
  return (
    <>
      <Categories outlet={outlet} />
    </>
  );
};

export default CategoryCashflow;
