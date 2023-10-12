import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';
import { withStyles } from '@material-ui/core';


const styles = {
    root: {
      color: 'black',
      backgroundColor: 'white',
      '& .MuiTreeItem-content': {
        backgroundColor: 'white',
      },
      '& .MuiTreeItem-content.Mui-selected': {
        backgroundColor: 'white',
      },
      '& .MuiTreeItem-label:hover': {
        backgroundColor: 'white',
        color: 'black',
      },
      '& .MuiFormControlLabel-label': {
        fontSize: '14px',
        fontFamily: 'Exo 2',
      },
    },
  };
  
  const StyledTreeItem = withStyles(styles)(TreeItem);


const Reports = ({ checkboxData, onClickBtn }) => {

    const checkBoxStyles = theme => ({
        root: {
          '&$checked': {
            color: 'black',
          },
        },
        checked: {},
       })
    
    const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

    const [data, setData] = useState([checkboxData])
    // console.log(data);


    return (
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<RemoveIcon />}
            defaultExpandIcon={<AddIcon />}
        >
            {checkboxData?.map((item) => {
                return (

                    <StyledTreeItem
                        nodeId={item.id} label={
                            <FormControlLabel
                                control={<CustomCheckbox/>} label={item.label} />
                        }>
                        {item.parent.childData?.map((item2) => {
                            return (

                                <StyledTreeItem nodeId={item2.id} label={
                                    <FormControlLabel control={<CustomCheckbox/>}
                                        label={item2.label} />
                                } />
                            )
                        })}
                    </StyledTreeItem>
                )
            })}
        </TreeView>
    );
};


export default Reports;
