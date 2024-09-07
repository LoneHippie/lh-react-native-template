import { useMemo } from "react";
import useDeviceInfo from "../device_identification/useDeviceInfo";
import {
  breakpointDesktopLarge,
  breakpointDesktopSmall,
  breakpointTabletLandscape,
  breakpointTabletPortrait,
} from "./constants";
import { Breakpoint } from "./enums";

const useBreakpoint = () => {
  const { width, height, isPhoneDevice } = useDeviceInfo();
  const breakpoint = useMemo(() => {
    if (width >= breakpointDesktopLarge) return Breakpoint.desktopLarge;
    if (width >= breakpointDesktopSmall && width < breakpointDesktopLarge)
      return Breakpoint.desktopSmall;
    if (width >= breakpointTabletLandscape && width < breakpointDesktopSmall)
      return isPhoneDevice
        ? Breakpoint.tabletPortrait
        : Breakpoint.tabletLandscape;
    if (width >= breakpointTabletPortrait && width < breakpointTabletLandscape)
      return Breakpoint.tabletPortrait;
    return Breakpoint.mobile;
  }, [isPhoneDevice, width]);

  const isMobile = useMemo(
    () => breakpoint === Breakpoint.mobile,
    [breakpoint]
  );
  const isTabletPortrait = useMemo(
    () => breakpoint === Breakpoint.tabletPortrait,
    [breakpoint]
  );
  const isTabletLandscape = useMemo(
    () => breakpoint === Breakpoint.tabletLandscape,
    [breakpoint]
  );
  const isDesktopSmall = useMemo(
    () => breakpoint === Breakpoint.desktopSmall,
    [breakpoint]
  );
  const isDesktopLarge = useMemo(
    () => breakpoint === Breakpoint.desktopLarge,
    [breakpoint]
  );

  return {
    width,
    height,
    breakpoint,
    isMobile,
    isTabletPortrait,
    isTabletLandscape,
    isDesktopLarge,
    isDesktopSmall,
  };
};

export default useBreakpoint;
