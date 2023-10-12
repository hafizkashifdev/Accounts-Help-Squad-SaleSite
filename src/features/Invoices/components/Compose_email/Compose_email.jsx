import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './compose_email.scss'
import { useTheme } from "@emotion/react";
import { Chip, Modal } from '@mui/material';
import Editor_page from './editor'



export default function Compose_email(props) {

  const { open, handleClose, setOpenModel } = props;
  const theme = useTheme();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <div className="mail__container">
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p:1}}
    >
      <Card sx={{ width: 900}}>
        <CardContent sx={{ ml: 0 }}>
          <div className="tags_email">
            <div className="card_data flex justify-space-between font-weight-400 font-family-Exo">
              <ul>
                <li>To</li>
                <li><Chip label="Chip Filled"
                  size="small" />
                </li>
              </ul>
              <ul className='margin-right-1 cursor-pointer'>
                <li>Cc</li>
              </ul>
            </div>
            <div className="card_data margin-top-nag">
              <ul>
                <li>From</li>
                <li><Chip
                  label="Clickable Deletable"
                  size="small"
                  onClick={handleClick}
                  onDelete={handleDelete}
                /></li>
              </ul>
            </div>
            <div className="card_data">
              <ul>
                <li>Subject</li>
                <li>{`{{COMPANY NAME - 12Days}}`}</li>
              </ul>
            </div>
          </div>
          <CardContent sx={{ border: '1px solid lightgray', height: 5 }}>
            <div className="tags_bar">
              <ul>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Insert</li>
                <li>Format</li>
                <li>Tools</li>
                <li>Table</li>
              </ul>
            </div>
          </CardContent>
          <div className="email_card">
            <Editor_page handleClose={handleClose}/>
          </div>
        </CardContent>
      </Card>
    </Modal>
    </div>
  );
}