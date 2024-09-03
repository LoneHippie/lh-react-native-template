import React from "react";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
  const styles = useStyles();
  return (
    <View>
      <Text style={styles.title}>HELLLOOOO</Text>
    </View>
  );
};

const useStyles = () =>
  StyleSheet.create({
    title: {
      fontSize: 20,
      color: "#FFF",
    },
  });

export default index;
