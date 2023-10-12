import { Box, TextField } from '@mui/material';
import React from 'react';
import "./custom-field.scss"

export const CustomField = ({ label, id, children }) => {
  return (
    <>
      <Box className="flex flex-column custom-field-for-ap">
        <label htmlFor={id} className='secondary-color'  >
          {label}
        </label>
        {children}
      </Box>
    </>
  )
}
