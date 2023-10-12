import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { withStyles } from '@material-ui/core';


const Settings = (checkboxData2) => {
    const checkBoxStyles = theme => ({
        root: {
          '&$checked': {
            color: 'black',
          },
        },
        checked: {},
       })
    
    const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

    const labelstyles = theme => ({
        root: {
          '& .MuiFormControlLabel-label': {
            fontSize: '14px',
            fontFamily: 'Exo 2',
          },
        },
      });
      
      const LabelStyle = withStyles(labelstyles)(FormControlLabel);
      

    const data = checkboxData2.checkboxData2
    console.log(checkboxData2.checkboxData2)
    return (
        <FormGroup>
            {data.map((item, index) => {
                return (
                    <LabelStyle
                        key={index}
                        control={<CustomCheckbox />}
                        label={item.label}
                    />
                )
            })}
        </FormGroup>
    )
}

export default Settings