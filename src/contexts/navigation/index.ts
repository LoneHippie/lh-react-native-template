import expoRouterFactory from "./expoRouterFactory";

const { useAppNavigation, useAppPathName, useAppRouter } = expoRouterFactory();

export { useAppNavigation, useAppPathName, useAppRouter };
