"use client";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box, Grid } from "@mui/material";
import { ArrowCircleLeft, ArrowCircleRight } from "@root/assets/export";
import useCustomHook from "./useCustomStepper";
import { FC } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CustomStepper: FC<{ data: any; isRowRevers?: boolean }> = (props) => {
  const { data = [], isRowRevers = false } = props;
  const theme = useTheme();
  const { activeStep, handleNext, handleBack, handleStepChange } =
    useCustomHook();
  const maxSteps = data.length;

  return (
    <Box position={"relative"}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        // onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step: any, index: number) => (
          <div key={step.name}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid
                container
                spacing={{ xs: 2.29, md: 6.9, xl: 12.9 }}
                flexDirection={{ xs: "column-reverse", md: "row" }}
                mb={{ xs: 6, md: 4, lg: 0 }}
              >
                <Grid
                  item
                  xs={12}
                  lg={6.5}
                  sx={{
                    display: "flex",
                    flexDirection: isRowRevers ? "column-reverse" : "column",
                  }}
                >
                  <Box
                    flex={1}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      maxWidth: 585,
                    }}
                  >
                    <Typography
                      variant="h5"
                      color={"primary.main"}
                      fontWeight={400}
                    >
                      {step?.review}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        color={"primary.main"}
                        fontSize={20}
                        pb={0.8}
                      >
                        {step?.name}
                      </Typography>
                      <Typography variant="body2" color={"primary.main"}>
                        {step?.designation}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={5.5}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Box
                    sx={{
                      px: 2.05,
                      py: 1.6,
                      display: "inline-block",
                      borderRadius: "12px",
                      background: "rgba(240, 240, 242, 0.40)",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      style={{ width: "100%" }}
                      src={step?.image?.src}
                      alt={step?.name}
                      width={446}
                      height={391}
                      objectFit="cover"
                    />
                  </Box>
                </Grid>
              </Grid>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          display: "inline-block",
          position: "absolute",
          bottom: isRowRevers
            ? { xs: 0, md: "auto" }
            : { xs: 0, md: "-3%", xl: 0 },
          top: isRowRevers ? { xs: "auto", md: "95%", lg: 0 } : "auto",
          right: { xs: "35%", sm: "45%", lg: "50%" },
        }}
      >
        <MobileStepper
          variant={"progress"}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ background: "transparent" }}
          nextButton={
            <Box
              onClick={() => handleNext(maxSteps)}
              sx={{ cursor: "pointer" }}
            >
              {theme.direction === "rtl" ? (
                <ArrowCircleLeft />
              ) : (
                <ArrowCircleRight />
              )}
            </Box>
          }
          backButton={
            <Box
              onClick={() => handleBack(maxSteps)}
              sx={{ cursor: "pointer" }}
              pr={1.2}
            >
              {theme.direction === "rtl" ? (
                <ArrowCircleRight />
              ) : (
                <ArrowCircleLeft />
              )}
            </Box>
          }
        />
      </Box>
    </Box>
  );
};

export default CustomStepper;
