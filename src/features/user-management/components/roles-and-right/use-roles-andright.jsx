import { useTheme } from "@mui/material";

import React, { useRef } from "react";

export const useRolesRights = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
    const [openForm, setOpenForm] = React.useState(false);

  const handleFormDialog = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
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
    theme,
    // router,
    tableHeaderRef,
  };
};
