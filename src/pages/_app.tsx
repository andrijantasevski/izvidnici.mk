import Layout from "@/layouts/Layout";
import QueryLayout from "@/layouts/QueryLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ display: "swap", subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <QueryLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <Toaster position="top-right" />
      </QueryLayout>
    </>
  );
}
