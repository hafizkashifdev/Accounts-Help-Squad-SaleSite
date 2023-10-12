import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { withStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

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



const checkBoxStyles = theme => ({
  root: {
    '&$checked': {
      color: 'black',
    },
  },
  checked: {},
});

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

const UserManagement_data = ({ checkboxData2 }) => {
  const data = checkboxData2;

  return (
    <TreeView 
      aria-label="file system navigator"
      defaultCollapseIcon={<RemoveIcon />}
      defaultExpandIcon={<AddIcon />}
    >
      {data.map((item) => (
        <StyledTreeItem
        sx={{fontSize: '1px'}}
          key={item.id}
          nodeId={item.id}
          label={
            <FormControlLabel
              control={<CustomCheckbox />}
              label={item.label}
            />
          }
        >
          {item.parent.childData?.map((item2) => (
            <StyledTreeItem
              key={item2.id}
              nodeId={item2.id}
              label={
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label={item2.label}
                />
              }
            />
          ))}
        </StyledTreeItem>
      ))}
    </TreeView>
  );
};

export default UserManagement_data;
