import { TextStyle as RNTextStyles } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export type FontWeightType = Pick<RNTextStyles, "fontWeight">["fontWeight"];
export type LatoFamily =
  | "LatoThin"
  | "LatoLight"
  | "LatoRegular"
  | "LatoBold"
  | "LatoBlack";

const useFontsMixin = () => {
  const fontFamilyByWeight = (fontWeight: FontWeightType): LatoFamily => {
    switch (fontWeight) {
      case "100":
        return "LatoThin";
      case "300":
        return "LatoLight";
      case "400":
      case "500":
        return "LatoRegular";
      case "600":
      case "700":
        return "LatoBold";
      case "800":
      case "900":
        return "LatoBlack";
      default:
        return "LatoRegular";
    }
  };

  const getLatoWeight = (fontWeight: FontWeightType): FontWeightType => {
    switch (fontWeight) {
      case "100":
      case "200":
        return fontWeight;
      case "400":
      case "500":
        return "400";
      case "600":
      case "700":
        return "700";
      case "800":
      case "900":
        return "900";
      default:
        return "400";
    }
  };

  const getFontWeightByFamily = (fontFamily: LatoFamily): FontWeightType => {
    switch (fontFamily) {
      case "LatoThin":
        return 100;
      case "LatoLight":
        return "300";
      case "LatoRegular":
        return "400";
      case "LatoBold":
        return "700";
      case "LatoBlack":
        return "900";
      default:
        return "400";
    }
  };

  const fontStyleByWeight = (
    fontWeight: FontWeightType
  ): {
    fontFamily: LatoFamily;
    fontWeight?: FontWeightType;
    webProperties?: Record<string, string>;
  } => {
    const fontFamily = fontFamilyByWeight(fontWeight);

    return {
      fontFamily,
      fontWeight: getLatoWeight(fontWeight),
    };
  };

  return { fontStyleByWeight, getFontWeightByFamily };
};

export default useFontsMixin;
