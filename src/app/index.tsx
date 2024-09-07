import React from "react";
import { StyleSheet, View } from "react-native";
import { Typography } from "~app_tools/components/Text";

const Index = () => {
  const styles = useStyles();

  return (
    <View>
      <Typography size={18} fontWeight={"700"} style={styles.title}>
        HELLLOOOO
      </Typography>
    </View>
  );
};

const useStyles = () =>
  StyleSheet.create({
    title: {
      color: "#FFF",
    },
  });

export default Index;
