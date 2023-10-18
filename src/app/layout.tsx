import "./globals.scss";
import ThemeProvider from "@root/theme";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";

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
      { url: "/og-logo.png", width: 800, height: 600 },
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
