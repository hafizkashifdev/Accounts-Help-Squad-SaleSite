import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import { dataArray } from "./services.data";

const Services = () => {
  return (
    <Box paddingX={{ xs: 1, md: 5 }} color={"primary.main"} mt={10}>
      <Typography variant="h2" textAlign={"center"}>
        Our Comprehensive Services Include
      </Typography>
      <Grid container spacing={4} mt={1}>
        {dataArray?.map((item: any) => (
          <Grid item xs={12} md={6} display={"flex"} key={item?.id}>
            <Image src={item?.src} width={0} height={0} alt={item?.title} />
            <Box>
              <Typography variant="h5">{item?.title}</Typography>
              <Typography variant="body1" mt={1} color={"primary.lighter"}>
                {item?.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
