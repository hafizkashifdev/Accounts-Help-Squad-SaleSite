import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { withStyles } from '@material-ui/core';
const Invoices = ({checkboxData, onClickBtn}) => {

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


    return (
        <FormGroup>
            {checkboxData.map((item, index) => {
                return (

                    <LabelStyle id={item.id}
                    key={index}
                    onClick={onClickBtn}
                        control={<CustomCheckbox/>}
                        label={item.label} />
                )
            })}
        </FormGroup>                                     
    )
}

export default Invoices