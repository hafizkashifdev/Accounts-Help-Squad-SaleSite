

import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import FinancingData from '../financing/financing-data';
import CategoryExpandModal from '../../category-exppand-modal/category-exppand-modal';

const DailyExpense = () => {
  const data = FinancingData();
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <Box sx={{mt:2 }}>
      <CategoryExpandModal
        categoryText="Daily Expense"
        categoryIcon="PlayArrowSharpIcon"
        data={data}
        isExpanded={isExpanded}
        onExpand={handleExpand}
      />
    </Box>
  );
};

export default DailyExpense;

