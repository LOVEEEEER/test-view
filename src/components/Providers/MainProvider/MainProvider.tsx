import { store } from "@/src/store/store";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { Layout } from "../../layout/Layout";
import { HeadProvider } from "../HeadProvider/HeadProvider";
import { WindowProvider } from "./WindowProvider";

export const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <HeadProvider>
          <WindowProvider>
            <Layout>{children}</Layout>
          </WindowProvider>
        </HeadProvider>
      </Provider>
    </>
  );
};
