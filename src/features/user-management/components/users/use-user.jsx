import { useTheme } from "@mui/material";

import React, { useRef } from "react";

export const useUsers = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
    const [openForm, setOpenForm] = React.useState(false);
    const [openAddForm, setOpenAddForm] = React.useState(false);

  const handleFormDialog = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleFormAddDialog = () => {
    setOpenAddForm(true);
  };

  const handleCloseAddForm = () => {
    setOpenAddForm(false);
  };

//   const router = useRouter();
  const tableHeaderRef = useRef();
  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
    openForm,
    setOpenForm,
    handleFormDialog,
    handleCloseForm,
    openAddForm,
    setOpenAddForm,
    handleFormAddDialog,
    handleCloseAddForm,
    theme,
    // router,
    tableHeaderRef,
  };
};
