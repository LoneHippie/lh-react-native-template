import React from "react";
import { Modal, StyleSheet, View, Text, ActivityIndicator } from "react-native";

interface Props {
  isLoading: boolean;
  message?: string;
}

const FullScreenLoader = ({ isLoading, message }: Props) => {
  const styles = useStyles();

  return isLoading ? (
    <Modal visible={isLoading} transparent>
      <View style={styles.container} />
      <View style={styles.backdrop}>
        <View style={styles.content}>
          <ActivityIndicator animating={true} color={"#FFFFFF"} size="large" />
          {message && <Text style={styles.message}>{message}</Text>}
        </View>
      </View>
    </Modal>
  ) : (
    <></>
  );
};

const useStyles = () =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width: "100%",
      flex: 1,
      justifyContent: "center",
      zIndex: 999282999,
    },
    backdrop: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      opacity: 0.8,
    },
    content: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    message: {
      color: "#FFF",
      marginTop: 24,
      textAlign: "center",
    },
  });

export default FullScreenLoader;
