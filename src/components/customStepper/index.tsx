"use client";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { ArrowCircleLeft, ArrowCircleRight } from "@root/assets/export";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import useCustomHook from "./useCustomStepper";
import { FC } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CustomStepper: FC<{ data: any; service?: boolean }> = (props) => {
  const { data = [], service = false } = props;
  const theme = useTheme();
  const { activeStep, handleNext, handleBack } = useCustomHook();
  const maxSteps = data.length;

  return (
    <Box position={"relative"}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        enableMouseEvents
      >
        {data.map((step: any) => (
          <Grid container spacing={4} key={step.name}>
            <Grid item xs={12} md={6.5}>
              {service ? (
                <Box>
                  <Typography variant="h3" mb={1}>
                    {step?.name}
                  </Typography>
                  {step?.designation && (
                    <Typography variant="h6" color={"primary.lighter"} mb={3}>
                      {step?.designation}
                    </Typography>
                  )}
                  {step?.bullets &&
                    step?.bullets?.map((item: any) => (
                      <ListItem alignItems="flex-start" key={item}>
                        <ListItemAvatar
                          sx={{
                            "&.MuiListItemAvatar-root": { minWidth: "30 px" },
                          }}
                        >
                          <StopRoundedIcon sx={{ fontSize: "8px" }} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography component="span" variant="body1">
                              {item}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  {step?.headings &&
                    step?.headings?.map((item: any) => (
                      <Box key={item?.heading}>
                        <Typography variant="h6">{item?.heading}</Typography>
                        <Typography
                          variant="body1"
                          color={"primary.lighter"}
                          mb={3}
                        >
                          {item?.desc}
                        </Typography>
                      </Box>
                    ))}
                </Box>
              ) : (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  height={"80%"}
                >
                  <Typography variant="h4" fontWeight={400}>
                    {step?.review}
                  </Typography>
                  <Box>
                    <Typography variant="h5">{step?.name}</Typography>
                    <Typography variant="body1">{step?.designation}</Typography>
                  </Box>
                </Box>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              md={5.5}
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
        ))}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          display: "inline-block",
          position: "absolute",
          bottom: service ? { xs: 0, md: "auto" } : { xs: 0, md: "-3%", xl: 0 },
          top: service ? { xs: "auto", md: "95%", lg: 0 } : "auto",
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
