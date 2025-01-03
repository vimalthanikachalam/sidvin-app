import { Header } from "@/components/Header";
import { LayoutWrapper } from "@/components/Layout";
import "@/styles/index.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sidvin | Interactive Videos</title>
        <meta name="description" content="Sidvin | Interactive Videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Header />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </main>
    </>
  );
}
