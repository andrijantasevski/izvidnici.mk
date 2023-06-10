import Layout from "@/layouts/Layout";
import "@/styles/globals.css";
import "../styles/Footer.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ display: "swap", subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
