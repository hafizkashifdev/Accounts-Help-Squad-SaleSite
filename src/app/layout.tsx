import ThemeProvider from "@root/theme";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import Head from "next/head";

const inter = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accounts Help Sqad",
  description: "Your Trusted Accounting Solutions Partner",
  openGraph: {
    title: "Accounts Help Sqad",
    description: "Your Trusted Accounting Solutions Partner",
    url: "https://accountanthelpsquad.co.uk/",
    siteName: "Accounts Help Sqad",
    images: [{ url: "../assets/layout/og-logo.png", width: 800, height: 600 }],
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
