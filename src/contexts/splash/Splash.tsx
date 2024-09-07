import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import React, { useEffect, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { FullScreenLoader } from "~app_tools/components";

SplashScreen.preventAutoHideAsync();

interface Props {
  children: React.ReactNode;
}

const Splash = ({ children }: Props) => {
  const styles = useStyles();

  const [fontsLoaded] = useFonts({
    LatoBlack: require("~app_assets/fonts/LatoBlack.ttf"),
    LatoBold: require("~app_assets/fonts/LatoBold.ttf"),
    LatoLight: require("~app_assets/fonts/LatoLight.ttf"),
    LatoRegular: require("~app_assets/fonts/LatoRegular.ttf"),
    LatoThin: require("~app_assets/fonts/LatoThin.ttf"),
  });

  const continueLoading = useMemo(() => !fontsLoaded, [fontsLoaded]);

  useEffect(() => {
    if (!continueLoading) {
      SplashScreen.hideAsync();
    }
  }, [continueLoading]);

  return (
    <View style={styles.container}>
      {continueLoading ? <FullScreenLoader isLoading /> : children}
    </View>
  );
};

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default Splash;
