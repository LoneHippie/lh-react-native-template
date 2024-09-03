import { Linking, Platform } from "react-native";

export const openNewTab = (url: string) => {
  if (Platform.OS === "web") {
    window.open(url, "_blank");
  } else {
    Linking.openURL(url);
  }
};

export const addMaximumScaleToMetaViewport = () => {
  const viewportMetaTag = document.querySelector("meta[name=viewport]");

  if (viewportMetaTag !== null) {
    let content = viewportMetaTag.getAttribute("content") ?? "";
    const regExp = /maximum-scale=[0-9.]+/g;

    if (regExp.test(content)) {
      content = content.replace(regExp, "maximum-scale=1.0");
    } else {
      content = [content, "maximum-scale=1.0"].join(", ");
    }

    viewportMetaTag.setAttribute("content", content);
  }
};
