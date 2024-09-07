import { Slot } from "expo-router";
import React from "react";
import AppLayout from "~app_tools/components/AppLayout";

const _layout = () => {
  return (
    <AppLayout>
      <Slot />
    </AppLayout>
  );
};

export default _layout;
