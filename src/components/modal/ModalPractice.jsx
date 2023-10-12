import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
    const{ openForm,
        handleFormDialog,
        handleCloseForm,setOpenForm  } = props;
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpenForm(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleFormDialog}>
        Open form dialog
      </Button> */}
      <Dialog open={openForm} onClose={handleCloseForm}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button onClick={handleCloseForm}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}