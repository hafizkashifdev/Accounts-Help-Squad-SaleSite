import { Fragment } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import FormationBookHero from "@root/assets/services/images/FormatioBookHero.png";
import CompanyIncorporation from "@root/assets/services/icons/red.svg";
import BankingServices from "@root/assets/services/icons/blue.svg";
import LicenseFinder from "@root/assets/services/icons/orange.svg";
import DocumentServices from "@root/assets/services/icons/purple.svg";

const FormationBook = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          margin={"auto"}
          paddingX={{ xs: 1, md: 5 }}
          color={"primary.main"}
        >
          <Typography variant="h1">Formation Book</Typography>
          <Typography variant="h5">
            Your Gateway to Seamless Business Establishment
          </Typography>
          <Typography
            variant="body1"
            mt={1}
            width={"90%"}
            color={"primary.lighter"}
          >
            Welcome to Formation Book, your all-in-one solution for starting and
            managing your business journey. We understand that starting a
            company can be daunting, and that's why we've crafted a service that
            simplifies the process, saving you time and effort.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} textAlign={"end"}>
          <Image
            src={FormationBookHero}
            alt={"Formation Book"}
            width={0}
            height={0}
            style={{ width: "90%", height: "90%" }}
          />
        </Grid>
      </Grid>
      <Box paddingX={{ xs: 1, md: 5 }} color={"primary.main"}>
        <Typography variant="h2" textAlign={"center"}>
          Our Comprehensive Services Include
        </Typography>
        <Grid container spacing={4} marginX={"auto"} mt={1}>
          <Grid item xs={12} md={6} display={"flex"}>
            <Image
              src={CompanyIncorporation}
              width={0}
              height={0}
              alt="Company Incorporation"
            />
            <Box>
              <Typography variant="h5">Company Incorporation</Typography>
              <Typography variant="body1" mt={1} color={"primary.lighter"}>
                We take care of the mandatory Companies House incorporation
                process, ensuring your business is set up correctly and legally.
                Once incorporated, you'll receive a printed Certificate of
                Incorporation, and we'll provide you with a digital copy for
                your records.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display={"flex"}>
            <Image
              src={BankingServices}
              width={0}
              height={0}
              alt="Banking Services"
            />
            <Box>
              <Typography variant="h5">Banking Services</Typography>
              <Typography variant="body1" mt={1} color={"primary.lighter"}>
                Say goodbye to the hassle of searching for a suitable business
                bank account. With Formation Book, you gain access to a free
                business bank account, and we sweeten the deal with a merchant
                account offering cashback benefits. It's banking made easy.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display={"flex"}>
            <Image
              src={LicenseFinder}
              width={0}
              height={0}
              alt="License Finder"
            />
            <Box>
              <Typography variant="h5">License Finder</Typography>
              <Typography variant="body1" mt={1} color={"primary.lighter"}>
                Not sure which licenses and permits your business needs? Our
                License Finder tool will help you discover the licenses and
                permits required for your specific industry and location. We'll
                even guide you through the process of obtaining theme.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display={"flex"}>
            <Image
              src={DocumentServices}
              width={0}
              height={0}
              alt="Document Services"
            />
            <Box>
              <Typography variant="h5">Document Services</Typography>
              <Typography variant="body1" mt={1} color={"primary.lighter"}>
                Keeping track of essential company documents is a breeze with
                Formation Book. We provide printed Share Certificates and
                Minutes of the First Board Meeting. Plus, all your critical
                company documents are sent to you by email, including copies of
                key documents like the Certificate of Incorporation and
                Memorandum & Articles of Association.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default FormationBook;
