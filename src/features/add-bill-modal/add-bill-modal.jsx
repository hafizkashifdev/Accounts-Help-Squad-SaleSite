import React from "react";
import { SimpleDialog } from "../../components/modal/simple-dialog";
import { Box, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useMUIModal } from "../../hooks/use-mui-modal";
import { ReactComponent as DocumentUpload } from "../../assests/svg/bill-management/document-upload.svg";
import { ReactComponent as AddMunallySvg } from "../../assests/svg/bill-management/add-manually.svg";
import { ReactComponent as SendEmail } from "../../assests/svg/bill-management/send-email.svg";
import { CustomBtn } from "./custom-btn/custom-btn";
import { Link } from "react-router-dom";

const addBillModalData = [
  {
    id: "1",
    title: "Upload a File",
    svg: <DocumentUpload />,
    btn: (
      <CustomBtn otherProps={{ component: "label" }}>
        Browse Files
        <input type="file" hidden />
      </CustomBtn>
    ),
  },
  {
    id: "2",
    title: "Add Manually",
    svg: <AddMunallySvg />,
    btn: (
      <Link to="/bills/add-bill">
        <CustomBtn>Enter Manually</CustomBtn>
      </Link>
    ),
  },
  {
    id: "3",
    title: "Email A Bill",
    svg: <SendEmail />,
    btn: (
      <CustomBtn
        onClick={() => {
          navigator.clipboard
            .writeText("hello bro")
            .then(() => {
              alert("successfully copied");
            })
            .catch(() => {
              alert("something went wrong");
            });
        }}
      >
        Copy Email Address
      </CustomBtn>
    ),
  },
];
export const AddBillModal = () => {
  const { openDialog, handleCloseMUIModal, handleOpenMUIModal } = useMUIModal();
  return (
    <>
      <CustomBtn
        otherProps={{ endIcon: <AddIcon /> }}
        onClick={handleOpenMUIModal}
      >
        Add Bill
      </CustomBtn>
      <SimpleDialog
        open={openDialog}
        paperSx={{ maxWidth: "900px", width: "900px" }}
        handleClose={handleCloseMUIModal}
        title="Add Bill"
      >
        <Grid mt="30px" container spacing={3}>
          {addBillModalData.map((item) => (
            <Grid key={item.id} item xs={4}>
              <Box
                className="border-radius-8 flex align-center flex-column"
                sx={{
                  bgcolor: "#F3F3F3",
                  height: "298px",
                  justifyContent: "space-evenly",
                }}
              >
                {item.svg}
                <div
                  className="sub-heading primary-color"
                  style={{ fontWeight: 600 }}
                >
                  {item.title}
                </div>
                {item.btn}
              </Box>
            </Grid>
          ))}
        </Grid>
      </SimpleDialog>
    </>
  );
};
