import { Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import { dataArray } from "./features.data";
import Announcement from "@root/assets/services/icons/announcement.svg";

const MoreFeatures = () => {
  return (
    <Box bgcolor={"#FCFCFC"} paddingY={10}>
      <Grid container spacing={4} paddingX={{ xs: 1, md: 5 }}>
        <Grid item xs={12} md={6} margin={"auto"}>
          <Typography variant="h2" color={"primary.main"}>
            More Features
          </Typography>
          <Typography variant="h4" fontWeight={400} color={"primary.lighter"}>
            But that's not all! Our interactive dashboard offers even more
            innovative features
          </Typography>
          <Button
            type="button"
            sx={{
              fontFamily: "__Exo_2_b9bafb",
              bgcolor: "primary.main",
              color: "common.white",
              borderRadius: 2,
              padding: "16px 32px",
              mt: 2,
              ":hover": { bgcolor: "#565666" },
            }}
          >
            Optimize Your Receivables with Accounts Receivable
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            {dataArray?.map((item: any) => (
              <Grid item xs={12} md={6} key={item?.id}>
                <Box
                  bgcolor={"common.white"}
                  borderRadius={2}
                  padding={2}
                  textAlign={"center"}
                  height={"100%"}
                >
                  <Image
                    src={Announcement}
                    alt={item?.title}
                    height={0}
                    width={0}
                  />
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color={"primary.main"}
                  >
                    {item?.title}
                  </Typography>
                  <Typography variant="body1" color={"primary.lighter"}>
                    {item?.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoreFeatures;
