import { Slot } from "expo-router";
import React, { useCallback, useEffect } from "react";
import { Platform } from "react-native";
import AppProviders from "~app_contexts/AppProviders";
import AppLoader from "~app_contexts/loader/AppLoader";
import AppLayout from "~app_tools/components/AppLayout";
import { addMaximumScaleToMetaViewport } from "~app_tools/utils/page";

const _layout = () => {
  const setWebDefaults = useCallback(() => addMaximumScaleToMetaViewport(), []);

  useEffect(() => {
    if (Platform.OS === "web") {
      setWebDefaults();
    }
  }, []);

  return (
    <AppProviders>
      <AppLoader />
      <AppLayout>
        <Slot />
      </AppLayout>
    </AppProviders>
  );
};

export default _layout;
