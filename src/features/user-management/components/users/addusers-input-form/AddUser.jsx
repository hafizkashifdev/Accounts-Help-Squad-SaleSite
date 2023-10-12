import React from "react";
import AddUserForm from "./AddUserForm";
import "./adduser.scss";
import { CustomPopover } from "../../../../../components/custom-popover/custom-popover";

const AddUser = () => {

  return (
    <CustomPopover
              mainTitle="Add New User"
              mainTitleClass="primary-color heading-20 font-weight-600 margin-bottom-1"
              popoverOpenerTitle="Add"
              popoverOpenerProps={{
                variant:"contained",
                sx: {
                  color: "#ffffff",
                  bgcolor: "#2B2B33",
                  border: "1.5px solid #40404D !important",
                  height: "32px",
                  borderRadius: "8px",
                  mb: "-16px",
                  "&:hover": {
                    border: "2px solid #2B2B33 !important",
                    bgcolor: "#2B2B33"
                  },
                },
                endIcon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.9987 15.1654C4.04536 15.1654 0.832031 11.952 0.832031 7.9987C0.832031 4.04536 4.04536 0.832031 7.9987 0.832031C11.952 0.832031 15.1654 4.04536 15.1654 7.9987C15.1654 11.952 11.952 15.1654 7.9987 15.1654ZM7.9987 1.83203C4.5987 1.83203 1.83203 4.5987 1.83203 7.9987C1.83203 11.3987 4.5987 14.1654 7.9987 14.1654C11.3987 14.1654 14.1654 11.3987 14.1654 7.9987C14.1654 4.5987 11.3987 1.83203 7.9987 1.83203Z" fill="white"/>
                <path d="M10.6654 8.5H5.33203C5.0587 8.5 4.83203 8.27333 4.83203 8C4.83203 7.72667 5.0587 7.5 5.33203 7.5H10.6654C10.9387 7.5 11.1654 7.72667 11.1654 8C11.1654 8.27333 10.9387 8.5 10.6654 8.5Z" fill="white"/>
                <path d="M8 11.1654C7.72667 11.1654 7.5 10.9387 7.5 10.6654V5.33203C7.5 5.0587 7.72667 4.83203 8 4.83203C8.27333 4.83203 8.5 5.0587 8.5 5.33203V10.6654C8.5 10.9387 8.27333 11.1654 8 11.1654Z" fill="white"/>
                </svg>,
                className:
                  "buttons-filters font-family-Exo font-weight-400 tertiary-title",
              }}
            >
              {(popupState) => (
                <AddUserForm/>
              )}
            </CustomPopover>
  );
};

export default AddUser;
