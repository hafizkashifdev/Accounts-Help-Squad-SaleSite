import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import FormationBookMagic from "@root/assets/services/images/formation-book/FormationBookMagic.png";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import { dataArray } from "./black-section.data";

const BlackSection = () => {
  return (
    <Box
      bgcolor={"primary.main"}
      color={"common.white"}
      paddingY={{ xs: 5, md: 10 }}
      paddingLeft={{ xs: 1, md: 5 }}
      mt={10}
    >
      <Grid container>
        <Grid item xs={12} md={6} margin={"auto"} paddingX={{ xs: 1, md: 5 }}>
          <Typography variant="h2">
            Your Formation Book Dashboard - Where the Magic Happens
          </Typography>
          <Typography variant="body1" mt={1} color={"common.ghost"}>
            Your journey with Formation Book is made even more seamless through
            our user-friendly dashboard. Here's what you can expect
          </Typography>
          <List>
            {dataArray?.map((item: any) => (
              <ListItem alignItems="flex-start" key={item?.id}>
                <ListItemAvatar
                  sx={{ "&.MuiListItemAvatar-root": { minWidth: "30px" } }}
                >
                  <StopRoundedIcon sx={{ fontSize: "8px" }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography component="span" variant="h6">
                      {item?.title}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color={"common.ghost"}
                    >
                      {item?.desc}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6} textAlign={"end"} marginY={"auto"}>
          <Image
            src={FormationBookMagic}
            alt={"Formation Book"}
            width={0}
            height={0}
            style={{ width: "90%", height: "90%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlackSection;
