export const faqsItemStyles = {
  accordianBox: {
    "&:before": { display: "none" },
    mb: "12px",
    borderRadius: "12px !important",
    bgcolor: "common.white",
    boxShadow: "0px 17px 30px 0px rgba(0, 0, 0, 0.02)",
  },
  accordianTitle: {
    "& .MuiAccordionSummary-content": {
      margin: "20px 0px !important",
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(0deg)",
    },
  },
};
