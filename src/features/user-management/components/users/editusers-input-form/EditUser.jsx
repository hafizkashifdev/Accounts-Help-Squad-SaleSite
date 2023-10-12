import React from "react";
import EditUserForm from "./EditUserForm";
import "./edituser.scss";
import { SimpleDialog } from "../../../../../components/modal/simple-dialog";

const EditUser = (props) => {
  const { openForm, handleCloseForm } = props;


  return (
    <SimpleDialog handleClose={handleCloseForm} open={openForm} title="Edit User Details" titleClass="edituser_header primary-color font-weight-600 heading-20">
      <EditUserForm />
    </SimpleDialog>
  );
};

export default EditUser;
