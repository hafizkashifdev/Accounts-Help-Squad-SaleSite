import React, {useState} from 'react';
import { Button, Card } from '@mui/material';
import "./addnote.scss";
import EditIcon from '../../../../../assests/svg/edit.png';
import AddNoteIcon from '../../../../../assests/svg/addnote.png';
import AddNoteModel from './AddNoteModel';

const AddNote = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div style={{height:"100%",display: "flex", flexDirection: "column", justifyContent: "start"}}>
      <h5 style={{marginBottom: "1rem"}}>Note History</h5>
      <Card className='addnote_container'>
        <div className='addnote_main'>
          <div className="addnote_header">
            <p>Add Note</p>
            <button className="cursor-pointer" onClick={handleOpen}>
              <img src={EditIcon} alt="edit" />
            </button>
          </div>
        </div>
        <div className='flex justify-center padding-top-3'>
          <img src={AddNoteIcon} alt="bg_image" />
        </div>
      </Card>
      <AddNoteModel
        open={open}
        handleClose={handleClose}
        onDeleteClick={handleClose}
      />
    </div>
  );
}

export default AddNote;
