import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "~app_contexts/theme/theme";

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const styles = useStyles();

  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <Text>HEADER</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView style={styles.content}>{children}</ScrollView>
      </View>
    </View>
  );
};

const useStyles = () =>
  StyleSheet.create({
    rootContainer: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: theme.palette.background,
    },
    header: {
      width: "100%",
      alignSelf: "stretch",
      height: 64,
      backgroundColor: "magenta",
    },
    contentContainer: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
    content: {
      flex: 1,
    },
  });

export default AppLayout;
