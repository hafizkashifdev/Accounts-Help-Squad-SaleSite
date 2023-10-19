"use client";

import Box from "@mui/material/Box";
import { Footer } from "@root/layouts/sale-site/footers/Footer";
import { Header } from "@root/layouts/sale-site/header/Header";
import store from "@root/redux/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider {...{ store }}>
      <SnackbarProvider
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      >
        <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
          <Box
            marginX={{ xs: 1, md: 5 }}
            // position={"sticky"}
            // top={0}
            // zIndex={50}
            paddingY={{ xs: 1, md: 2 }}
            marginBottom={{ xs: 2, md: 3 }}
          >
            <Header />
          </Box>
          <Box flexGrow={1}>{children}</Box>
          <Box marginTop={{ xs: 2.5, md: 4.5 }}>
            <Footer />
          </Box>
        </Box>
      </SnackbarProvider>
    </Provider>
  );
}
