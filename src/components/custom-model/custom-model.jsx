import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { CustomModalStyle } from './custom-modal.style';

export const CustomModel = ({
  setOpenModel,
  openModel,
  children,
  styleModal,
  ...prop
}) => {
  const handleClose = () => {
    setOpenModel(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModel}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        {...prop}
      >
        <Fade in={openModel}>
          <Box
            sx={{
              ...CustomModalStyle,
              ...styleModal,
            }}
          >
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
