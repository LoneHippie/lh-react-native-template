import { StyleSheet } from "react-native";
import useMixins from "~app_contexts/theme/mixins";
import { FontWeightType } from "~app_contexts/theme/mixins/useFontsMixin";
import { theme } from "~app_contexts/theme/theme";

interface StyleProps {
  size: number;
  fontWeight: FontWeightType;
}

const useStylesTypography = ({ size, fontWeight }: StyleProps) => {
  const { fontStyleByWeight } = useMixins();

  return StyleSheet.create({
    root: {
      letterSpacing: 0.5,
      fontSize: size,
      lineHeight: size * 1.5,
      color: theme.palette.text,
      ...fontStyleByWeight(fontWeight),
    },
    container: {
      flexShrink: 1,
    },
  });
};

export default useStylesTypography;
