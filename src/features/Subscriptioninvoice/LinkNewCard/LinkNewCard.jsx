import React from "react";
import { Button, Typography, IconButton, Grid, Autocomplete, TextField, InputLabel } from "@mui/material";
import InputAdornment from "@material-ui/core/InputAdornment";
import { AUTOCOMPLETEINPUT, ListBoxPaper } from "../../../layout/components/header/components/search-card/search-card-mui-style";
import './styles.scss';
import { DateIcon } from "../../../components/date-icon/date-icon";
import { SimpleDialog } from "../../../components/modal/simple-dialog";
export default function LinkNewCard({ open, handleClose }) {
  const condition1 = [
    {
      title: "Barclays",
      value: "Barclays",
    },
    {
      title: "Natwest",
      value: "Natwest",
    },
    {
      title: "Some other Bank",
      value: "Some other Bank",
    },
  ];
  return (
    <div>
              <SimpleDialog open={open} handleClose={handleClose} title="Link New Card" sx={{mt:10}}
                titleClass="primary-color font-weight-600 heading-20" paperSx={{ maxWidth: '630px'}}>
        <Grid container >
          <Grid items xs={12}  sx={{ mb: 1, mt: 4 }}>
               <Grid className=" model-body   " >
                <Grid container xs={12} className="justify-space-between">
                  <Grid xs={12} sx={{ mb: 8 }}>
                    <Autocomplete
                      id="search-which-is-on-sidebar-already"
                      sx={{ transition: 'all .25s linear', ".MuiInputBase-root": { pr: '10px !important' }, width: { sm: '590px', xs: '170px' }, color: 'Black' }}
                      isOptionEqualToValue={(option, value) => option.id === value.id}
                      ListboxProps={{ className: 'header-search-card', style: { maxHeight: "210px", paddingTop: 0, paddingBottom: 0 } }}
                      size="small"
                      PaperComponent={ListBoxPaper}
                      options={condition1}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <>
                          <label htmlFor="Card-number" className="secondary-color font-family-Exo ">
                            Select Bank
                          </label>
                          <TextField 
                           sx={styles.field__color}
                          id="standard-basic"
                            {...params}
                             sx={{ AUTOCOMPLETEINPUT, display: "flex" }}
                            placeholder="Type Here "
                            fullWidth
                            InputProps={{
                              ...params.InputProps,
                              endAdornment: (
                                <InputAdornment position="end" color="#777777" SX={{
                                  width: 24,
                                  height: 24,
                                  flexShrink: 0,
                                }}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z"
                                      fill="#777777"
                                    />
                                    <path
                                      d="M20.16 22.79C20.08 22.79 20 22.78 19.93 22.77C19.46 22.71 18.61 22.39 18.13 20.96C17.88 20.21 17.97 19.46 18.38 18.89C18.79 18.32 19.48 18 20.27 18C21.29 18 22.09 18.39 22.45 19.08C22.81 19.77 22.71 20.65 22.14 21.5C21.43 22.57 20.66 22.79 20.16 22.79ZM19.56 20.49C19.73 21.01 19.97 21.27 20.13 21.29C20.29 21.31 20.59 21.12 20.9 20.67C21.19 20.24 21.21 19.93 21.14 19.79C21.07 19.65 20.79 19.5 20.27 19.5C19.96 19.5 19.73 19.6 19.6 19.77C19.48 19.94 19.46 20.2 19.56 20.49Z"
                                      fill="#777777"
                                    />
                                  </svg>
                                </InputAdornment>
                              ),
                               className: "font-family-Exo padding-left-2",
                            }}
                          />
                        </>
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container xs={12} className="justify-space-between">
                  <Grid xs={12} sx={{ mb: 5 }}>
                    <label htmlFor="Card-number" className="secondary-color font-family-Exo ">
                      *Name on Card
                    </label>
                    <TextField
                      sx={styles.field__color}
                      className="fields"
                      placeholder='Card Number Format'
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      inputProps={{
                        className: 'font-family-Exo '
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container xs={12} className="justify-space-between">
                  <Grid xs={12} sx={{ mb: 0 }}>
                    <label htmlFor="Card-number" className="secondary-color font-family-Exo ">
                      Card Number
                    </label>
                    <TextField
                      sx={styles.field__color}
                      className="fields"
                      placeholder='Card Number Format'
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      inputProps={{
                        className: 'font-family-Exo'
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container xs={12} sx={{ mb: 0 }} className="justify-space-between">
                  <Grid xs={12} lg={5.7} sx={{ mt: 6 }}>
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
                      inputProps={{
                        className: 'font-family-Exo'
                      }}
                    />
                  </Grid>
                  <Grid xs={12} lg={5.7} className="margin-top-3">
                    <Typography className="font-family-exo2 secondary-color primary-title">
                      Expiry Date
                    </Typography>
                    <TextField
                      sx={styles.field__color}
                      className="fields"
                      placeholder='12/18'
                      fullWidth
                      id="standard-basic"
                      variant="standard"
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
                  </Grid>
                  <Button className="save-button " onClick={handleClose}>
                    SAVE
                  </Button>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </SimpleDialog>
    </div>
  );
}
const styles = {
  field__color: () => ({
    marginBottom: '20px',
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2B2B33",
    },
    "& input": {
      paddingLeft: "38px !importaNT",
      pb: "8px",
    },
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