import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';
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
  },
};

const StyledTreeItem = withStyles(styles)(TreeItem);

const labelstyles = theme => ({
  root: {
    '& .MuiFormControlLabel-label': {
      fontSize: '14px',
      fontFamily: 'Exo 2',
    },
  },
});

const LabelStyle = withStyles(labelstyles)(FormControlLabel);


const Clients = ({ checkboxData, onClickBtn }) => {

  const checkBoxStyles = theme => ({
    root: {
      '&$checked': {
        color: 'black',
      },
    },
    checked: {},
   })

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);


  const [data, setData] = useState([checkboxData]);
//   console.log(data);

  const renderSimpleData = () => {
    return checkboxData
      .filter(item => !item.parent)
      .map((item, index) => (
        <LabelStyle
          id={item.id}
          key={index}
          onClick={onClickBtn}
          control={<CustomCheckbox />}
          label={item.label}
        />
      ));
  };

  

  const renderTreeViewData = () => {
    return checkboxData
      .filter(item => item.parent)
      .map(item => (
        <StyledTreeItem
          nodeId={item.id}
          label={
            <LabelStyle control={<CustomCheckbox />} label={item.label} />
          }
        >
          {item.parent.childData.map((item2, index) => (
            <StyledTreeItem
              nodeId={item2.id}
              key={index}
              label={
                <LabelStyle
                  control={<CustomCheckbox />}
                  label={item2.label}
                />
              }
            />
          ))}
        </StyledTreeItem>
      ));
  };

  return ( 
    <>
      <Box sx={{ ml: 3.8 }}>
        <FormGroup>{renderSimpleData()}</FormGroup>
      </Box>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<RemoveIcon />}
        defaultExpandIcon={<AddIcon />}
      >
        {renderTreeViewData()}
      </TreeView>
    </>
  );
};

export default Clients;
