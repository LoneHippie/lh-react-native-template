import React from "react";
import { useSelector } from "react-redux";
import { selectLoader } from "./loaderSlice";
import { FullScreenLoader } from "~app_tools/components";

const AppLoader = () => {
  const { isLoading } = useSelector(selectLoader);
  return isLoading ? <FullScreenLoader isLoading={true} /> : <></>;
};

export default AppLoader;
