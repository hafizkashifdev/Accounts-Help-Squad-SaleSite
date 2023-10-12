import React from 'react';
import CardContent from '@mui/material/CardContent';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Typography from '@mui/material/Typography';
import { Box, TextField, Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import GlobalButton from '../../../../../../components/global-button/global-button';

const UpdateRole = (props) => {
  const { handleCloseFormModal } = props;

  return (
    <div className="height-100vh flex justify-center align-center">
      <Box sx={{ width: '592px', height: '416px', borderRadius: '8px', backgroundColor: 'white', p: 2.3 }}>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: '600',
            fontFamily:'Exo 2',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          gutterBottom
        >
          Update Role
          <CancelOutlinedIcon onClick={() => handleCloseFormModal(false)} />
        </Typography>
        <CardContent>
          <Typography
            sx={{
              color: '#6B6B80',
              mt: 5,
              fontSize: 16,
              fontWeight: '400',
              height: '45px',
              fontFamily:'Exo 2',
            }}
          >
            Role Name
          </Typography>
          <TextField
            sx={styles.field__color}
            className="fields"
            fullWidth
            id="standard-basic"
            variant="standard"
          />
          <Typography
            sx={{
              color: '#6B6B80',
              mt: 5,
              fontSize: 16,
              fontWeight: '400',
              fontFamily:'Exo 2',
              height: '45px'
            }}
          >
            Description
          </Typography>
          <TextField
            sx={styles.field__color}
            fullWidth
            id="standard-basic"
            variant="standard"
          />
        </CardContent>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 40,
            gap: 10,
          }}
        >
          <Button variant="outlined" color="inherit"
            onClick={() => handleCloseFormModal(false)}
            sx={{
              color: 'black',
              borderColor: '#40404D',
              padding: '8px',
              border: '1.5px solid #40404D',
              fontWeight: 400,
              fontSize: '0.75rem',
              borderRadius: '8px',
              textTransform: 'capitalize',
              '&:hover': {
                borderColor: 'black',
                color: 'black',
              }
            }}
          >
            Cancel</Button>
          <GlobalButton
            btnText='Update'
            btnName='accent'
          />
        </div>
      </Box>
    </div >
  );
};

export default UpdateRole;


const styles = {
  field__color: () => ({
    '& label': {
      color: 'black',
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
        borderWidth: '0.15rem',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  })
}