import useFontsMixin from "./useFontsMixin";

const useMixins = () => {
  const { fontStyleByWeight, getFontWeightByFamily } = useFontsMixin();

  return { fontStyleByWeight, getFontWeightByFamily };
};

export default useMixins;
