import { useCallback, useEffect, useMemo, useState } from "react";
import { Dimensions, Platform, useWindowDimensions } from "react-native";
import { DeviceType, OrientationType } from "./enums";
import {
  breakpointTabletLandscape,
  breakpointTabletPortrait,
} from "../responsive/constants";

interface WindowDimensions {
  window: {
    height: number;
    width: number;
  };
}

const useDeviceInfo = () => {
  const { width, height } = useWindowDimensions();
  const [oreintation, setOrientation] = useState<OrientationType>(
    OrientationType.portrait
  );

  const deviceType = useMemo(() => {
    if (width <= breakpointTabletPortrait) {
      return DeviceType.phone;
    } else if (width >= breakpointTabletLandscape) {
      return DeviceType.desktop;
    } else {
      return DeviceType.tablet;
    }
  }, [width]);

  const isPhoneDevice = useMemo(
    () => deviceType === DeviceType.phone,
    [deviceType]
  );
  const isTabletDevice = useMemo(
    () => deviceType === DeviceType.tablet,
    [deviceType]
  );
  const isDesktopView = useMemo(
    () => deviceType === DeviceType.desktop,
    [deviceType]
  );
  const osType = useMemo(() => Platform.OS, []);
  const isSafari = useMemo(
    () =>
      Platform.OS === "web" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome"),
    []
  );

  const updateOrientation = useCallback((newOrientation: number) => {
    setOrientation(
      newOrientation === 1 || newOrientation === 2
        ? OrientationType.portrait
        : OrientationType.landscape
    );
  }, []);

  useEffect(() => {
    const updateOrientationListener = ({
      window: { width, height },
    }: WindowDimensions) => {
      updateOrientation(width < height ? 1 : 3);
    };

    Dimensions.addEventListener("change", updateOrientationListener);
  }, [updateOrientation]);

  return {
    width,
    height,
    deviceType,
    oreintation,
    osType,
    isPhoneDevice,
    isTabletDevice,
    isDesktopView,
    isSafari,
  };
};

export default useDeviceInfo;
