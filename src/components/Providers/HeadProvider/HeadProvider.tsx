import { FC, PropsWithChildren } from "react";
import NextNProgress from "nextjs-progressbar";
import { yellowColor } from "@/src/shared/constants/constants";
import Head from "next/head";
import { FiveIcons } from "./FiveIcons";

export const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextNProgress
        color={yellowColor}
        height={2}
        startPosition={0.3}
        options={{ showSpinner: false }}
      />
      <Head>
        <FiveIcons />
      </Head>
      {children}
    </>
  );
};
