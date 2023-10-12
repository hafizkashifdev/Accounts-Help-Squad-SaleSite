import { Box } from '@mui/material';
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AppTooltip } from '../app-tooltip/app-tooltip';

export const DashboardCard = ({
  heading,
  children,
  headingSibling,
  paddingForMd = '20px 24px',
  paddingForSm = '20px 20px',
  headingSize = '14px',
  headingWeight = "600",
  headingColor ="#40404D",
  tooltipMessage,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        boxShadow:
          '0px 0px 9px rgba(0,0,0,0.1)',
        border: '1px solid rgba(107, 107, 128, 0.1)',
        borderRadius: '8px',
        p: { md: paddingForMd, sm: paddingForSm, xs: '10px' },
        width: '100%',
      }}
    >
      {!!heading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: '10px',
          }}
        >
          <Box className="flex align-center" sx={{ color: headingColor, fontSize: headingSize, fontWeight: headingWeight }}>
            {heading}
            {!!tooltipMessage && <AppTooltip message={tooltipMessage}><InfoOutlinedIcon className='cursor-pointer'  sx={{fontSize: '15px !important',ml:'5px'}}/></AppTooltip>}
          </Box>
          {headingSibling}
        </Box>
      )}
      {children}
    </Box>
  );
};
