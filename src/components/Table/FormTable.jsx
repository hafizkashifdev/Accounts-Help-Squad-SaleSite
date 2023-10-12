import React from 'react';
import { Box, Button, Grid, Modal, Stack } from "@mui/material";
import CustomTable from "./CustomTable";
import TableAction from "./TableAction";

// RHF
import { useForm, useFormContext, useWatch } from "react-hook-form";

// Yub
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// @mui icons
import AddIcon from "@mui/icons-material/Add";
import { FormProvider, RHFTextField } from "../hook-form";
import RHFDatePicker from "../hook-form/RHFDatePicker";
import { useState } from "react";

const ANON_FUNC = () => {};

const FIELDS_OBJ = {
  textField: RHFTextField,
  datePicker: RHFDatePicker,
};

// ----------------------------------------------------------------------
// Modal
function TableFormModal(props) {
  const {
    onAccept = ANON_FUNC,
    onCancel = ANON_FUNC,
    onAdd = ANON_FUNC,
    onUpdate = ANON_FUNC,
    columns = [],
    defaultValues = {},
    type: actionType = "Add",
  } = props;

  const schema = {};

  for (const column of columns) {
    if (column.validation) {
      schema[column.key] = column.validation(Yup);
    }
  }

  const formSchema = Yup.object().shape(schema);

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (data) => {
    if (actionType.toLowerCase() === "add") onAdd(data);
    else if (actionType.toLowerCase() === "update") onUpdate(data);
  };

  const onAcceptHandler = (data) => {
    handleSubmit(onSubmit)();
    onAccept();
  };

  return (
    <Modal
      open
      onClose={onCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <Box sx={styles.root}>
        <FormProvider methods={methods}>
          <Grid container spacing={2}>
            {columns.map(({ inputType, key, label, ...other }) => {
              const Component = FIELDS_OBJ[inputType];
              return (
                <Grid key={key} item xs={12} md={6}>
                  <Component name={key} label={label} />
                </Grid>
              );
            })}
          </Grid>
          <Box sx={styles.actionBtnBox}>
            <Button
              onClick={onAcceptHandler}
              disabled={!isValid}
              sx={styles.btnSuccess}
            >
              {actionType}
            </Button>
            <Button onClick={onCancel} sx={styles.btnError}>
              Cancel
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Modal>
  );
}

// ----------------------------------------------------------------------
// Form Table

export default function FormTable(props) {
  const { tableKey, columns: tableColumns } = props;
  const { setValue, getValues } = useFormContext();
  const tableData = useWatch({ name: tableKey }) ?? [];
  const [actionData, setActionData] = useState(null);

  /* Set up formatters for updating the display data */
  const formatters = {};
  for (const column of tableColumns) {
    if (column.format) formatters[column.key] = column.format;
  }

  /* COLUMNS */
  let columns = tableColumns.map(({ key, label }) => {
    return {
      accessorFn: (row) => {
        if (formatters[key]) return formatters[key](row[key]);

        return row[key];
      },
      id: label,
      cell: (info) => info.getValue(),
      header: () => <span>{label}</span>,
    };
  });

  columns.push({
    id: "actions",
    cell: (info) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="edit"
          onClicked={(id) => onEditHandler(info.row.index)}
        />
        <TableAction
          type="delete"
          onClicked={(id) => onDeleted(info.row.index)}
        />
      </Box>
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  });

  /* CANCEL HANDLER */
  function onCancelHandler() {
    setActionData(null);
  }

  /* ADD HANDLER */
  function onAddHandler() {
    const defaultValues = {};

    tableColumns.forEach((column) => {
      defaultValues[column.key] = column.defaultValue ?? "";
    });

    setActionData({
      type: "Add",
      defaultValues,
    });
  }

  function onAdded(data) {
    setValue(tableKey, [...getValues()[tableKey], data]);
    setActionData(null);
  }

  /* DELETE HANDLER */
  function onDeleted(index) {
    const tableRowData = getValues()[tableKey];
    const leftArr = tableRowData.slice(0, index);
    const rightArr = tableRowData.slice(index + 1);
    setValue(tableKey, [...leftArr, ...rightArr]);
  }

  /* UPDATE HANDLER */
  function onEditHandler(index) {
    const tableRowData = getValues()[tableKey][index];

    setActionData({
      type: "Update",
      index,
      defaultValues: tableRowData,
    });
  }

  function onUpdated(data) {
    const tableRowData = getValues()[tableKey];
    const { index } = actionData;
    tableRowData[index] = data;

    setValue(tableKey, tableRowData);
    setActionData(null);
  }

  return (
    <div>
      {actionData && (
        <TableFormModal
          columns={tableColumns}
          onAdd={onAdded}
          onUpdate={onUpdated}
          onCancel={onCancelHandler}
          {...actionData}
        />
      )}
      <CustomTable
        data={tableData}
        columns={columns}
        isPagination={false}
        isSuccess={true}
      />
      <Button variant="text" startIcon={<AddIcon />} onClick={onAddHandler}>
        Add
      </Button>
    </div>
  );
}

//-----------------------------------------------------------------------
// styles
const styles = {
  root: (theme) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(95vw, 40rem)",
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  actionBtnBox: (theme) => ({
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    mt: 2,
  }),
  btnError: (theme) => ({
    bgcolor: "#b02a37",
    color: "#fff",
    "&:hover": { bgcolor: "#b02a37" },
  }),
  btnSuccess: (theme) => ({
    bgcolor: "#18938D",
    color: "#fff",
    minWidth: "100px",
    "&:hover": { bgcolor: "#18938D" },
    "&:disabled": {
      backgroundColor: "#C4CDD5",
    },
  }),
};
