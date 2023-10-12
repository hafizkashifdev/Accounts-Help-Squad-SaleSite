import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import FinancingData from '../financing/financing-data';
import CategoryExpandModal from '../../category-exppand-modal/category-exppand-modal';

const Sales = () => {
  const data = FinancingData();
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <Box sx={{mt:2 }}>
      <CategoryExpandModal
        categoryText="Sales"
        categoryIcon="PlayArrowSharpIcon"
        data={data}
        isExpanded={isExpanded}
        onExpand={handleExpand}
      />
    </Box>
  );
};

export default Sales;

