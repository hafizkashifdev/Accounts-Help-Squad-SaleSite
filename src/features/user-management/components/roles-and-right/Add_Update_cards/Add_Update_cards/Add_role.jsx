import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Typography from '@mui/material/Typography';
import { Box, TextField } from '@mui/material';
import GlobalButton from '../../../../../../components/global-button/global-button';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

const AddRole = ({ closeAddRoleModal }) => {
    const [roleName, setRoleName] = useState('');
    const [roleNameError, setRoleNameError] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const handleSubmit = () => {
        let isValid = true;

        if (roleName.trim() === '') {
            setRoleNameError('Role Name is required');
            isValid = false;
        } else {
            setRoleNameError('');
        }

        if (description.trim() === '') {
            setDescriptionError('Description is required');
            isValid = false;
        } else {
            setDescriptionError('');
        }

        if (isValid) {
            // Handle form submission here
            console.log({
                roleName: roleName,
                description: description,
            });
        }
    };

    return (
        <div className="height-100vh flex justify-center align-center">
            <Box
                sx={{
                    width: '592px',
                    height: '416px',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    p: 1,
                }}
            >
                <CardContent>
                    <Typography
                        sx={{
                            fontSize: 20,
                            fontWeight: '600',
                            display: 'flex',
                            fontFamily: 'Exo 2',
                            justifyContent: 'space-between',
                        }}
                        gutterBottom
                    >
                        Add New Role
                        <CancelOutlinedIcon onClick={closeAddRoleModal} />
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sx={{ height: '60px', mt: 6 }}>
                            <div className="label margin-bottom-1">
                                <label htmlFor="fullName">
                                    <span
                                        style={{
                                            color: 'rgba(255, 85, 85, 1)',
                                            marginTop: '-5px',
                                        }}
                                    >
                                        *
                                    </span>
                                    Role Name
                                </label>
                            </div>
                            <TextField
                                sx={styles.field__color}
                                id="roleName"
                                variant="standard"
                                fullWidth
                                type="text"
                                placeholder="Enter Role Name"
                                name="rolename"
                                value={roleName}
                                onChange={(e) => setRoleName(e.target.value)}
                                error={roleNameError !== ''}
                                helperText={roleNameError}
                                InputProps={{
                                    style: {
                                        fontSize: '14px',
                                        paddingLeft: '20px',
                                    },
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ height: '60px', mt: 6 }}>
                            <div className="label margin-bottom-1">
                                <label htmlFor="fullName">
                                    <span
                                        style={{
                                            color: 'rgba(255, 85, 85, 1)',
                                            marginTop: '-5px',
                                        }}
                                    >
                                        *
                                    </span>
                                    Description
                                </label>
                            </div>
                            <TextField
                                sx={styles.field__color}
                                id="description"
                                variant="standard"
                                fullWidth
                                type="text"
                                placeholder="Enter Description"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                error={descriptionError !== ''}
                                helperText={descriptionError}
                                InputProps={{
                                    style: {
                                        fontSize: '14px',
                                        paddingLeft: '20px',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: 40,
                            gap: 10,
                            marginTop: '65px',
                        }}
                    >
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={closeAddRoleModal}
                            sx={{
                                color: 'black',
                                borderColor: '#40404D',
                                type: 'submit',
                                padding: '8px',
                                border: '1.5px solid #40404D',
                                fontWeight: 400,
                                fontSize: '0.75rem',
                                borderRadius: '8px',
                                textTransform: 'capitalize',
                                '&:hover': {
                                    borderColor: 'black',
                                    color: 'black',
                                },
                            }}
                        >
                            Cancel
                        </Button>
                        <GlobalButton btnText="Add" btnName="accent" onClick={handleSubmit} />
                    </div>
                </CardContent>
            </Box>
        </div>
    );
};

export default AddRole;

const styles = {
    field__color: {
        '& label': {
            color: 'black',
        },
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
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
    },
};
