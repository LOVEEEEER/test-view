import Link from "next/link";
import { FC } from "react";
import { ReactComponent as LogoImage } from "../../../assets/images/logo-wrapper.svg";

export const Logo: FC = () => {
  return (
    <Link href="/">
      <LogoImage />
    </Link>
  );
};
