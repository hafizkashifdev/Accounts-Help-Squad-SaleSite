import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography } from '@mui/material';

function ExportModal() {

    const [selectedFormat, setSelectedFormat] = useState(null);

  const handleFormatChange = (format) => {
    setSelectedFormat(format);
  };

  const handleApplyClick = () => {
    if (selectedFormat) {
    //   onApply(selectedFormat);
    }
    // onClose();
  };

  const handleClearClick = () => {
    setSelectedFormat(null);
  };

  return (
    <div
        // style={{
        //   height: '316px',
        //   width: '592px',
        //   borderRadius: '8px',
        //   background: '#FFFFFF',
        //   boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.16)',
        //   padding: '16px',
        //   position: 'relative',
        // }}
      >
        <Typography className='font-family-exo2 secondary-color primary-title' sx={{mt:5}}>Export this report as</Typography>
        <div>
          <div style={{ display: 'flex' ,marginTop:'35px'}}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                flexBasis: '50%',
                // marginTop:'30px'
              }}
              className='font-family-exo2 secondary-color primary-title'
              onClick={() => handleFormatChange('pdf')}
            >
              {selectedFormat === 'pdf' ? (
                <CheckCircleIcon />
              ) : (
                <CheckIcon />
              )}
              <span style={{ marginLeft: '8px',}} className='font-family-exo2 tertiary-colo primary-title'>PDF</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                flexBasis: '50%',
              }}
              onClick={() => handleFormatChange('excel')}
            >
              {selectedFormat === 'excel' ? (
                <CheckCircleIcon />
              ) : (
                <CheckIcon />
              )}
              <span style={{ marginLeft: '8px' }} className='font-family-exo2 tertiary-colo primary-title'>Excel</span>
            </div>
          </div>
        </div>
       
      </div>
  )
}

export default ExportModal