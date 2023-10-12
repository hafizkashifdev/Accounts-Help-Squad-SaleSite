import React from 'react';
import dayjs from 'dayjs';
import { Card, Box, Modal, Typography, Grid, Button } from "@mui/material";
import CustomTable from "../../../../components/Table/CustomTable";
import TableHeader from "../../../../components/Table/TableHeader";
import { useTableParams } from "../../../../components/Table/useTableParams";
import TableAction from '../../../../components/Table/TableAction';
import DeleteModel from '../../../../components/modal/DeleteModel';
import SettingIcon from "../../../../assests/svg/setting-4.png";
import FormDialog from '../../../../components/modal/ModalPractice';

import Manager from '../role_rights_manager/Manager'

import { ROLE_RIGHTS_DATA } from ".";
import { useRolesRights } from "./use-roles-andright";
import { BasicInformationForm } from '../basic-information';

import { Link } from "react-router-dom";
import Add_role from './Add_Update_cards/Add_Update_cards/Add_role';
import Update_role from './Add_Update_cards/Add_Update_cards/Update_role';



export const RolesRightsTable = () => {
  const {
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
  } = useRolesRights();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
    
  const [openFormModal, setOpenFormModal] = React.useState(false);
  const [addRoleModal, setAddRoleModal] = React.useState(false);
  const handleOpenFormModal = () => setOpenFormModal(true);
  const handleCloseFormModal = () => setOpenFormModal(false);
  const openAddRoleModal = () => setAddRoleModal(true)
  const closeAddRoleModal = () => setAddRoleModal(false)
  const columns = [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => info.getValue(),
      header: () => <span>Id</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.roleName,
      id: "roleName",
      cell: (info) => info.getValue(),
      header: "Role Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.createdOn,
      id: "createdOn",
      cell: (info) => dayjs(info.getValue()).format("DD MMM, YYYY"),
      header: "Created On",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.description,
      id: "description",
      cell: (info) => info.getValue(),
      header: "Description",
      // isSortable: true,
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="delete" onClicked={handleOpen} />
          <TableAction type="edit" onClicked={handleOpenFormModal} />
          <Link to="/user-management/role-right-manager"><TableAction type='setting'/></Link>
        </Box>
      ),
      header: () => <span className='flex justify-center width-100'>Actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
        <TableHeader
          ref={tableHeaderRef}
          title="Health & Safety"
          searchKey="search"
          showAddBtn
          open={openForm}
          onClose={handleCloseForm}
          onAdd={() => { 
            setAddRoleModal(!addRoleModal)
           }}
        // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={ROLE_RIGHTS_DATA}
          columns={columns}
          // showSerialNo
          showHeaderFilter={false}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
          isPagination={true}
        />
      <DeleteModel
        open={open}
        handleClose={handleClose}
        onDeleteClick={handleClose}
      />


      <Modal
        open={openFormModal}
        onClose={handleCloseFormModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <BasicInformationForm/> */}
        
            {openFormModal && <Update_role handleCloseFormModal={setOpenFormModal} />}
          </Typography>
        </Box>
      </Modal>
      
      <Modal
        open={addRoleModal}
        onClose={closeAddRoleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-description" >
            {/* <BasicInformationForm/> */}
           {addRoleModal && <Add_role closeAddRoleModal = {closeAddRoleModal} />}
          </Typography>
        </Box>
      </Modal>


    </>

  );
};
