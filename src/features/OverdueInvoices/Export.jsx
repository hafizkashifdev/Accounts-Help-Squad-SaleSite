import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Export() {

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
        <p>Export this report as</p>
        <div>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                flexBasis: '50%',
              }}
              onClick={() => handleFormatChange('pdf')}
            >
              {selectedFormat === 'pdf' ? (
                <CheckCircleIcon />
              ) : (
                <CheckIcon />
              )}
              <span style={{ marginLeft: '8px' }}>PDF</span>
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
              <span style={{ marginLeft: '8px' }}>Excel</span>
            </div>
          </div>
        </div>
       
      </div>
  )
}

export default Export