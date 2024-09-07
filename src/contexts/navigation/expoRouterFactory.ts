/* eslint-disable no-unused-vars */
import { useNavigation, usePathname, useRouter } from "expo-router";
import { RootStackParamList, NavigationParams } from "./types";

type Paths = keyof RootStackParamList;
export type Href =
  | Paths
  | `${Paths}?${keyof NavigationParams}=${string}`
  | `${Paths}/${string}`;

const expoRouterFactory = () => {
  return {
    useAppRouter: useRouter as () => {
      push: (href: Href) => void;
      replace: (href: Href) => void;
      back: () => void;
      setParams: (params?: NavigationParams) => void;
    },

    useAppPathName: usePathname as <K extends keyof RootStackParamList>() => K,

    useAppNavigation: useNavigation as () => {
      setParams: (params?: NavigationParams) => void;
    },
  };
};

export default expoRouterFactory;
