import "../src/assets/globals.scss";
import type { AppProps } from "next/app";
import { MainProvider } from "@/src/components/Providers/MainProvider/MainProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
}
