import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Footer from "../../components/atoms/footer/FooterComponent";
import ReduxProvider from "./provider";
import Link from "next/link";
import favicon from '../app/favicon.ico'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Privatrezept",
  description: "Private prescription",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <Link rel="icon" href='/favicon.ico' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fustat:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${inter.className} flex -webkit-flex flex-col justify-center bg-[rgba(243,243,243)]`}
      >
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
