import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import './manager.scss';
import { FormControlLabel } from '@mui/material';

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      border: "1px solid #E1E1E6",
      opacity: 1,
      backgroundColor: "black" ? "white" : "#E1E1E6",
      boxSizing: "border-box",
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      backgroundColor: "#40404D",
      border: "3px solid #40404D",
      width: 16,
      height: 16,
      margin: 2,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      backgroundColor: "transparent",
      color: '#40404D'
    },

    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: "#E1E1E6",
    },
  }));


export default function Account_Payable() {

  return (
    <FormGroup>
      <div>
        
            <div>
              <FormControlLabel
                control={<Android12Switch
                color='default' />}
              />
              <span style={{fontFamily:'Exo 2'}}>
                Accounts
              </span>
            </div>
         
      </div>

    </FormGroup>
  );
}