import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Fade,
} from "@mui/material";
import { MinusCircleIcon } from "@root/assets/faqs/icons/minus-circle";
import { PlusCircleIcon } from "@root/assets/faqs/icons/plus-circle-icon";
import React from "react";
import { faqsItemStyles } from "./FaqsItem.styles";

export const FaqsItem = ({ title, description }: any) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <Accordion
        elevation={0}
        sx={faqsItemStyles.accordianBox}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          sx={faqsItemStyles.accordianTitle}
          expandIcon={expanded ? <MinusCircleIcon /> : <PlusCircleIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography variant="h5" color="#2B2B33">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Fade in={expanded} unmountOnExit timeout={700}>
            <Typography
              variant="caption"
              fontWeight="500"
              color="primary.lighter"
            >
              {description}
            </Typography>
          </Fade>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
