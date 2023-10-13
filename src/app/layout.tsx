import ThemeProvider from "@root/theme";
import { Footer } from "@root/layouts/footer/Footer";
import { Header } from "@root/layouts/header/Header";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import Head from "next/head";
import Box from "@mui/material/Box";

const inter = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accounts Help Squad",
  description: "Your Trusted Accounting Solutions Partner",
  openGraph: {
    title: "Accounts Help Squad",
    description: "Your Trusted Accounting Solutions Partner",
    url: "https://accountanthelpsquad.co.uk/",
    siteName: "Accounts Help Squad",
    images: [
      { url: "../assets/layout/images/og-logo.png", width: 800, height: 600 },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Exo+2&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Box
            display={"flex"}
            flexDirection={"column"}
            // minHeight={"100vh"}
          >
            <Box
              marginX={{ md: 5 }}
              // position={"sticky"}
              // top={0}
              // zIndex={50}
              paddingY={2}
            >
              <Header />
            </Box>
            <Box flexGrow={1}>{children}</Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
