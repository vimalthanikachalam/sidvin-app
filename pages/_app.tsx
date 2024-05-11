import { Header } from "@/components/Header";
import { LayoutWrapper } from "@/components/Layout";
import "@/styles/index.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </main>
  );
}
