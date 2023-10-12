import React from 'react';
import { Button } from '@mui/material';

const GlobalButton = (props) => {
  const {
    btnType,
    btnName,
    btnText,                                                                                                                        
    startIcon, // Added startIcon prop
    endIcon,
    width,
    disableElevation,
    fullWidth,
    onClick,
    className,
    id,
    type,
    disabled,
    btnValue,
  } = props;

  const getButtonStyle = () => {
    if (btnName === 'accent') {
      return {
        variant: 'contained',
        sx: {
          background: '#2B2B33',
          fontWeight: 400,
          fontSize: '0.75rem',
          borderRadius: '8px',
          px: btnType && "20px",
          py: btnType && "10px",
          textTransform: 'capitalize',
          '&:hover': {
            background: '#2B2B33',
          },
        },
      };
    } else {
      return {
        variant: 'outlined',
        sx: {
          color: 'black',
          borderColor: '#40404D',
          width: btnType ? '' : '122px',
          padding: '8px',
          height: '32px',
          border: '1.5px solid #40404D',
          fontWeight: 400,
          fontSize: '0.75rem',
          borderRadius: '8px',
          textTransform: 'capitalize',
          '&:hover': {
            borderColor: 'black',
            color: 'black',
          },
        },
      };
    }
  };

  const buttonStyle = {
    ...getButtonStyle(),
    sx: {
      ...getButtonStyle().sx,
      ...props.sx,
      '&:hover': {
        ...getButtonStyle().sx['&:hover'],
        ...props.sx?.['&:hover'],
      },
    },
  };

  return (
    <Button
      variant={buttonStyle.variant}
      className={`global-button font-family-Exo ${className} width-sm-full`}
      sx={buttonStyle.sx}
      disableElevation={disableElevation}
      fullWidth={fullWidth}
      onClick={onClick}
      id={id}
      type={type}
      disabled={disabled}
      value={btnValue}
      startIcon={startIcon} // Added startIcon prop
      endIcon={endIcon}
    >
      {btnText} 
    </Button>
  );
};

export default GlobalButton;
