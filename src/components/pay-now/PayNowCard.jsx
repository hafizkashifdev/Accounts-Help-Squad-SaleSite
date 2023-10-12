import React, { useState } from 'react';
import { Select, Grid, Button, Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Down } from "../../assests/svg/chev-bottom.svg";
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import './paynow.scss'
import Paynowbtn from './Paynowbtn'
import { DateIcon } from '../date-icon/date-icon';
import { SimpleDialog } from '../modal/simple-dialog';
import LinkNewCard from '../../features/Subscriptioninvoice/LinkNewCard/LinkNewCard';


const PaynowCardData = [
    {
        id: '0',
        cardNumber: '1234 5231 6547 3214',
        cvnNumber: '4411',
        date: '18/23',
        password: '*********'
    },
    {
        id: '1',
        cardNumber: '1234 5231 6547 5555',
        cvnNumber: '3021',
        date: '19/23',
        password: '*********'
    },
    {
        id: '2',
        cardNumber: '1234 5231 6547 4444',
        cvnNumber: '3033',
        date: '11/23',
        password: '*********'
    },
];

const PayNowCard = ({ open, onClose }) => {
    // const [startDate, setStartDate] = useState();
    const [selectedCard, setSelectedCard] = useState(null);
    const [open2, setOpen2] = useState(false);
    const handleCardChange = (event) => {
        const selectedCardId = event.target.value;
        setSelectedCard(selectedCardId);
        // setStartDate(null);
    };
    const handleClose = () => {
        setOpen2(false)
    }

    // const formatDate = dayjs(startDate).format('MM/YY');

    const getCardDetails = (cardId) => {
        return PaynowCardData.find((card) => card.id === cardId);
    };

    const selectedCardDetails = selectedCard ? getCardDetails(selectedCard) : null;

    const isFieldsEmpty =
        !selectedCardDetails ||
        (selectedCardDetails.cardNumber === '' &&
            selectedCardDetails.cvnNumber === '' &&
            selectedCardDetails.date === '' &&
            selectedCardDetails.password === '');

    return (
        <>
            <SimpleDialog open={open} handleClose={onClose} title="Pay Now"
                titleClass="primary-color font-weight-600 heading-20" paperSx={{ maxWidth: '1251px' }}>
                <Grid container sx={{ p: 1 }}>
                    <label htmlFor="Select" className="font-family-Exo secondary-color margin-top-3">
                        Select Card
                    </label>
                    <Grid container className="justify-space-between">
                        <Grid item xs={12} lg={8} className='margin-top-1'>
                            <Select
                                sx={{
                                    '&:before': {
                                        borderColor: '#C4C4CC',
                                    },
                                    '&:after': {
                                        borderColor: '#C4C4CC',
                                    },
                                    '& .MuiSelect-select': {
                                        padding: '10px',
                                        color: '#6B6B80',
                                    },
                                }}
                                fullWidth
                                variant="standard"
                                IconComponent={Down}
                                value={selectedCard}
                                onChange={handleCardChange}
                                displayEmpty // Add the displayEmpty prop
                                renderValue={(value) =>
                                    value ? selectedCardDetails?.cardNumber :
                                        <span style={{ color: '#E1E1E6', fontFamily: 'Exo 2' }}>Card Number Format</span>
                                }
                                inputProps={{
                                    className: 'font-family-Exo'
                                }}
                            >
                                {PaynowCardData.map((card) => (
                                    <MenuItem key={card.id} value={card.id}>
                                        {`Bank XYZ - Card: ${card.cardNumber}`}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item mt={{ xs: '10px' }}>
                            <Button

                                onClick={()=>setOpen2(true)}
                                variant="outlined"
                                sx={{
                                    color: '#6B6B80',
                                    borderColor: '#6B6B80',
                                    px: '15px',
                                    py: '10px',
                                    border: '2px solid #6B6B80',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    borderRadius: '8px',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        borderColor: 'black',
                                        border: '2px solid black',
                                        color: 'black',
                                    },
                                }}
                            >
                                Link New Card

                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container className="margin-top-3">
                        <Grid container xs={12} lg={7} className="justify-center">
                            <Grid item xs={10}>
                                <label htmlFor="Card-number" className="secondary-color font-family-Exo">
                                    Card Number
                                </label>
                                <Select
                                    sx={{
                                        mt: '10px',
                                        '&:before': {
                                            borderColor: '#C4C4CC',
                                        },
                                        '&:after': {
                                            borderColor: '#C4C4CC',
                                        },
                                        '& .MuiSelect-select': {
                                            padding: '10px',
                                            color: '#6B6B80',
                                        },
                                    }}
                                    fullWidth
                                    variant="standard"
                                    IconComponent={Down}
                                    value={selectedCard}
                                    onChange={handleCardChange}
                                    inputProps={{
                                        className: 'font-family-Exo'
                                    }}
                                >
                                    {selectedCardDetails && (
                                        <MenuItem value={selectedCardDetails.id}>
                                            {selectedCardDetails.cardNumber}
                                        </MenuItem>
                                    )}
                                </Select>
                            </Grid>
                            <Grid container xs={10} className="justify-space-between">
                                <Grid xs={12} lg={5} sx={{ mt: 6.5 }}>
                                    <label htmlFor="Card-number" className="secondary-color font-family-Exo">
                                        CVN Number
                                    </label>
                                    <TextField
                                        sx={styles.field__color}
                                        className="fields"
                                        placeholder='4412'
                                        fullWidth
                                        id="standard-basic"
                                        variant="standard"
                                        value={selectedCardDetails ? selectedCardDetails.cvnNumber : ''}
                                        disabled={!selectedCardDetails}
                                        inputProps={{
                                            className: 'font-family-Exo'
                                        }}
                                    />
                                </Grid>
                                <Grid xs={12} lg={5} className="margin-top-3">
                                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: '10px',
                                                '@media (max-width: 600px)': {
                                                    width: 'auto',
                                                    flexDirection: 'column',
                                                },
                                            }}
                                        > */}
                                    <Typography className="font-family-exo2 secondary-color primary-title">
                                        Expiry Date
                                    </Typography>
                                    <TextField
                                        sx={styles.field__color}
                                        className="fields"
                                        placeholder='MM/YY'
                                        fullWidth
                                        id="standard-basic"
                                        variant="standard"
                                        value={selectedCardDetails ? selectedCardDetails.date : ''}
                                        disabled={!selectedCardDetails}
                                        inputProps={{
                                            className: 'font-family-Exo'
                                        }}
                                        InputProps={{
                                            endAdornment: (
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', color: '#777777', marginRight: '15px' }}>
                                                    <DateIcon />
                                                </div>
                                            ),
                                        }}
                                    />
                                    {/* </Box>
                                    </DemoContainer>
                                </LocalizationProvider> */}
                                </Grid>
                                <Grid xs={12} sx={{ mt: 6 }}>
                                    <label htmlFor="Card-number" className="secondary-color font-family-Exo">
                                        Password
                                    </label>
                                    <TextField
                                        sx={styles.field__color}
                                        className="fields"
                                        placeholder='*********'
                                        fullWidth
                                        id="standard-basic"
                                        variant="standard"
                                        value={selectedCardDetails ? selectedCardDetails.password : ''}
                                        disabled={!selectedCardDetails}
                                        inputProps={{
                                            className: 'font-family-Exo'
                                        }} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item mt={{ xs: '10px' }} xs={12} lg={5} className="flex justify-center align-center">
                            {isFieldsEmpty ? (
                                <Box
                                    sx={{
                                        width: '422px',
                                        height: '247px',
                                        borderRadius: '12px',
                                        border: '2px dashed #A6A6B3',
                                    }}
                                >
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        width: '422px',
                                        height: '247px',
                                        borderRadius: '12px',
                                        border: '5px solid #A6A6B3',
                                    }}
                                >
                                    <Box>
                                        <div className='card_data flex justify-space-between'>
                                            <div className="card_rightside"></div>
                                            <div className='flex'>
                                                <div className="card_leftside"></div>
                                                <div className="card_leftside_2"></div>
                                            </div>
                                        </div>
                                    </Box>
                                    <Box sx={{ marginTop: '3.5rem' }} className="flex justify-center">
                                        <Typography className='sub-heading font-weight-400 font-family-Exo'
                                            onChange={handleCardChange}>
                                            {selectedCardDetails.cardNumber}
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                    <Paynowbtn
                        isFieldsEmpty={isFieldsEmpty}
                    />
                </Grid>
            </SimpleDialog>
            
             <LinkNewCard open={open2}
                handleClose={handleClose}
            />
        </>
    );
};

export default PayNowCard;


const styles = {
    field__color: () => ({
        marginTop: '20px',
        "& .MuiInput-underline:after": {
            borderBottomColor: "#2B2B33",
        },
        "& input": {
            paddingLeft: "15px",
            pb: "8px",
        },
        // "& .MuiInputBase-root:hover": {
        //     backgroundColor: "#F0F0F2",
        // },
        "& :before": {
            borderBottom: "1.6px solid #C4C4CC !important",
        },
        "&:before": {
            borderColor: "black",
        },
        "&:after": {
            borderColor: "black",
        },
    }),
};