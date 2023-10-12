import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './compose_email.scss';
import { Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailEditor = ({ handleClose }) => {
  const [editorContent, setEditorContent] = useState('');


  const handleEditorChange = (content) => {
    try {
      setEditorContent(content);
    } catch (error) {
      console.error('Error setting editor content:', error);
    }
  };

  const handleSureClick = () => {
    const toastText = 'Email send successfully';
    sendEmail();
    toast.success(toastText);
  };

  const sendEmail = () => {
    console.log('Sending email:', editorContent);
  };

  // const cancelEmail = () => {
  //   handleClose(false);
  // };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  return (
    <>
      <div className="editor_content editor_scroll">
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          modules={modules}
        />
      </div>
      <div className="btns">
        <Button sx={{
          color: 'black',
          borderColor: '#40404D',
          px: "25px",
          py: "8px",
          border: '1.5px solid #40404D',
          fontWeight: 400,
          fontSize: '16px',
          fontFamily:'Exo 2',
          borderRadius: '8px',
          textTransform: 'capitalize',
          '&:hover': {
            borderColor: 'black', 
            color: 'black',
          },
        }} onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button
          sx={{
            background: '#2B2B33',
            color: 'white',
            fontWeight: 400,
            fontSize: '16px',
            fontFamily:'Exo 2',
            borderRadius: '8px',
            px: "25px",
            py: "8px",
            textTransform: 'capitalize',
            '&:hover': {
              background: '#2B2B33',
            },
          }}
          onClick={handleSureClick}
        >
          Send
        </Button>
      </div>
      <ToastContainer />
    </>
  );
};

export default EmailEditor;
