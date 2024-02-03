import Head from "next/head";
import { FC, PropsWithChildren } from "react";

interface IMetaProps {
  title: string;
}

const getCurrentTitle = (title: string): string => {
  return `${title} | Yoldi Agency`;
};

export const Meta: FC<PropsWithChildren<IMetaProps>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title itemProp="headline">{getCurrentTitle(title)} </title>
      </Head>
      {children}
    </>
  );
};
