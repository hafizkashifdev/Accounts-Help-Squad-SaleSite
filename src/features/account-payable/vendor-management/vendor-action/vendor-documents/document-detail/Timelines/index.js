import { Box, Typography } from "@mui/material";
import './style.scss'

const Timelines = () => {
    const array = Array.from({ length: 20 });
    return (
      <>
        <Box sx={{ marginTop: "20px" }}>
          {array.map((e, i) => (
            <Box className="timeline-first-section" key={i}>
              <Typography className="time-timeline">
                Mar 31, 2023 3:37 p.m.
              </Typography>
              <Typography className="time-description">
                Usman Saeed has modified the payment currency from DKK to GBP{" "}
              </Typography>
            </Box>
          ))}
        </Box>
      </>
    );
  };
  
  export default Timelines