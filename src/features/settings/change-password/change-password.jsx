import React, { useState } from "react";
import {
  Grid,
  Typography,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { ErrorMessage, Formik, useFormik, Form } from "formik";
import * as yup from "yup";
import GlobalButton from "../../../components/global-button/global-button";
import ProfileManagement from "../profile-management/profile-management";
import { Error } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object({
  password: yup
    .string()
    .required(
      <span style={{ color: "rgba(255, 85, 85, 1)" }}>
        <Error
          style={{
            marginRight: "7px",
            marginBottom: "-3px",
            fontSize: "medium",
            color: "rgba(255, 85, 85, 1)",
            transform: "rotate(180deg)",
          }}
        />{" "}
        Please enter a correct password
      </span>
    )
    .min(
      6,
      <span style={{ color: "rgba(255, 85, 85, 1)" }}>
        <Error
          style={{
            marginRight: "7px",
            marginBottom: "-3px",
            fontSize: "medium",
            color: "rgba(255, 85, 85, 1)",
            transform: "rotate(180deg)",
          }}
        />{" "}
        Password must be at least 6 characters
      </span>
    ),
    newPassword: yup.string().required("New Password"),
    confirmPassword: yup.string().required("Confirm Password"),
});

const ChangePassword = () => {
  const [profileManage, setProfileMange] = useState(false);

  const handleClickUserProfile = () => {
    setProfileMange(true);
  };

  const handleUpdatePassword = () => {
    passwordUpdated();
  };

  const toastText = "Password Updated Successfully";
  // const setSamePassword =

  const passwordUpdated = () => {
    console.log(formik.values);
  };

  const [changePassword, setChangePassword] = useState([]);

  const [emptyFields, setEmptyFields] = useState([]);

  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickNewPassword = () => setNewPassword((show) => !show);

  const handleMouseDownNewPassword = (event) => {
    event.preventDefault();
  };
  const handleClickConfirmPassword = () => setConfirmPassword((show) => !show);

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema,

    onSubmit: (values) => {
      const emptyFields = [];
      if (!values.password) emptyFields.push("password");
      if (!values.newPassword) emptyFields.push("newPassword");
      if (!values.confirmPassword) emptyFields.push("confirmPassword");

      setEmptyFields(emptyFields);
    },
  });
  const handleBlur = (event) => {
    formik.handleBlur(event);
  };

  const handleSubmit = (event) => {
    setChangePassword();
    // event.preventDefault();
    formik.handleSubmit(event);
    handleUpdatePassword();
    // setSamePassword();
  };
  const handleNext = (event) => {
    setChangePassword();
    formik.handleSubmit(event);
  };

  if (profileManage) {
    return <ProfileManagement />;
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
            ml: 3,
          }}
        >
          <Typography sx={{ fontWeight: 600 }} className="font-family-Exo">
            Change Password
          </Typography>
          <Typography
            className="font-family-Exo"
            sx={{ cursor: "pointer" }}
            color="#6197E8"
            onClick={handleClickUserProfile}
          >
            User Profile
          </Typography>
        </Grid>
        <Formik>
          <Form
            onSubmit={
              GlobalButton.btnText === "Next" ? handleNext : handleSubmit
            }
          >
            {changePassword ? (
              <Grid item xl={12} xs={12} sx={{ p: 5, height: "150px" }}>
                <label
                  htmlFor="password"
                  className="secondary-color primary-title font-family-Exo"
                >
                  Current Password
                </label>
                <TextField
                  className="width-100"
                  id="password"
                  name="password"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  placeholder="*************"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                  autoComplete={false}
                  // disabled={!editMode}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? (
                            <RiEyeLine />
                          ) : (
                            <RiEyeOffLine style={{ transform: "scaleX(-1)" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            ) : (
              <Grid className="flex" sx={{ height: "150px" }} xl={12}>
                <Grid item xl={8} xs={8} sx={{ p: 5 }}>
                  <label
                    htmlFor="newPassword"
                    className="secondary-color primary-title font-family-Exo"
                  >
                    New Password
                  </label>
                  <TextField
                    className="width-100"
                    id="newPassword"
                    name="newPassword"
                    size="small"
                    type={newPassword ? "text" : "password"}
                    placeholder="*************"
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    onBlur={handleBlur}
                    autoComplete={false}
                    // disabled={!editMode}

                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickNewPassword}
                            onMouseDown={handleMouseDownNewPassword}
                          >
                            {newPassword ? (
                              <RiEyeLine />
                            ) : (
                              <RiEyeOffLine
                                style={{ transform: "scaleX(-1)" }}
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xl={8} xs={8} sx={{ p: 5 }}>
                  <label
                    htmlFor="confirmPassword"
                    className="secondary-color primary-title font-family-Exo"
                  >
                    Confirm New Password
                  </label>
                  <TextField
                    className="width-100"
                    id="confirmPassword"
                    name="confirmPassword"
                    size="small"
                    type={confirmPassword ? "text" : "password"}
                    placeholder="*************"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={handleBlur}
                    autoComplete={false}
                    // disabled={!editMode}

                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickConfirmPassword}
                            onMouseDown={handleMouseDownConfirmPassword}
                          >
                            {confirmPassword ? (
                              <RiEyeLine />
                            ) : (
                              <RiEyeOffLine
                                style={{ transform: "scaleX(-1)" }}
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            )}
          </Form>
        </Formik>
        <Grid className="flex justify-end width-100">
          {changePassword ? (
            <GlobalButton
            type="submit"
              btnType="ChangePassword"
              btnText="Next"
              btnName="accent"
              onClick={() => {
                if (formik.values.password === "") {
                  console.error();
                } else if (formik.values.password.length < 6) {
                  console.error();
                } else {
                  handleNext();
                }
              }}
            />
          ) : (
            <GlobalButton
              btnType="ChangePassword"
              btnText="Update"
              btnName="accent"
              onClick={() => {
                if (
                  (formik.values.newPassword.length ||
                    formik.values.confirmPassword.length) < 6
                ) {
                  toast.error("Password must be at least 6 characters");
                } else if (
                  (formik.values.newPassword ||
                    formik.values.confirmPassword) === ""
                ) {
                  toast.error("Password is required");
                } else if (
                  formik.values.newPassword !== formik.values.confirmPassword
                ) {
                  toast.error("Make sure both passwords are same");
                } else {
                  toast.success(toastText, handleSubmit(setTimeout(handleClickUserProfile, 2000)));
                }
              }}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ChangePassword;
