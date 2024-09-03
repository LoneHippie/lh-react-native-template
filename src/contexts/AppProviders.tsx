import React from "react";
import AppStateProvider from "./state/redux/AppStateProvider";
import AppLoader from "./loader/AppLoader";

interface Props {
  children: React.ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return <AppStateProvider>{children}</AppStateProvider>;
};

export default AppProviders;
