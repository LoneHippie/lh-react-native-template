import React, { useMemo } from "react";
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import useFontsMixin, {
  FontWeightType,
  LatoFamily,
} from "~app_contexts/theme/mixins/useFontsMixin";
import useStylesTypography from "./useStylesTypography";

declare module "react-native" {
  // eslint-disable-next-line no-unused-vars
  interface TextStyle {
    fontWeight?: FontWeightType;
    fontFamily?: LatoFamily | string;
  }
}

export interface TypographyProps {
  children?: React.ReactNode;
  textProps?: TextProps;
  size?: number;
  fontWeight?: FontWeightType;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const Typography = ({
  children,
  textProps,
  size = 14,
  fontWeight = "400",
  style,
  containerStyle,
}: TypographyProps) => {
  const { getFontWeightByFamily } = useFontsMixin();

  const { modifiedStyle, adjustedFontWeight } = useMemo(() => {
    const initialStyle = Array.isArray(style)
      ? style[0]
      : (style as NonNullable<unknown>);
    const safeStyle: TextStyle =
      initialStyle && typeof initialStyle === "object"
        ? { ...initialStyle }
        : {};

    let localFontWeight: FontWeightType = fontWeight;

    if (safeStyle.fontWeight) {
      localFontWeight = safeStyle.fontWeight;
      delete safeStyle.fontWeight;
    }
    if (safeStyle.fontFamily) {
      localFontWeight = getFontWeightByFamily(
        safeStyle.fontFamily as LatoFamily
      );
      delete safeStyle.fontFamily;
    }

    return { modifiedStyle: safeStyle, adjustedFontWeight: localFontWeight };
  }, [fontWeight, getFontWeightByFamily, style]);

  const styles = useStylesTypography({ size, fontWeight: adjustedFontWeight });

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.root, modifiedStyle]} {...textProps}>
        {children}
      </Text>
    </View>
  );
};

export default Typography;
