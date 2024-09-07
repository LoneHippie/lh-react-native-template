import { Slot } from "expo-router";
import React, { useCallback, useEffect } from "react";
import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppProviders from "~app_contexts/AppProviders";
import AppLoader from "~app_contexts/loader/AppLoader";
import Splash from "~app_contexts/splash";
import AppLayout from "~app_tools/components/AppLayout";
import { addMaximumScaleToMetaViewport } from "~app_tools/utils/page";

const _layout = () => {
  const setWebDefaults = useCallback(() => addMaximumScaleToMetaViewport(), []);

  useEffect(() => {
    if (Platform.OS === "web") {
      setWebDefaults();
    }
  }, [setWebDefaults]);

  return (
    <AppProviders>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Splash>
          <AppLoader />
          <AppLayout>
            <Slot />
          </AppLayout>
        </Splash>
      </GestureHandlerRootView>
    </AppProviders>
  );
};

export default _layout;
