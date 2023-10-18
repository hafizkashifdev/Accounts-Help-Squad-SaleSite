import BGImg from "@root/assets/get-started/bg-img.png";
export const getStartedStyles = {
  heroContainer: {
    textAlign: "center",
    mb: "64px",
    mt: "90px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: "20px",
  },
  formContainer: {
    mb: "150px",
    pb: "80px",
    display: "flex",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPositionY: "500px",
    backgroundImage: `url('${BGImg.src}')`,
    backgroundRepeat: "no-repeat",
  },
  formBox: {
    borderRadius: "12px",
    bgcolor: "common.white",
    boxShadow: "0px 31.00949px 64px 0px rgba(0, 0, 0, 0.08)",
    p: "40px",
  },
  formBoxInnerGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submitButton: { marginTop: 3, marginLeft: 2 },
};
