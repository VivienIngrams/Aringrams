import "@/css/tailwind.css";
import "@/css/prism.css";
import "katex/dist/katex.css";

import "@fontsource/inter/variable-full.css";
import "@fontsource-variable/playfair-display";
import "@fontsource/khand";

import { ThemeProvider } from "next-themes";
import Head from "next/head";

import LayoutWrapper from "@/components/LayoutWrapper";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}
