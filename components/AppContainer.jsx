import React from "react";
import { StyleSheet, View } from "react-native";

const AppContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2a33",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppContainer;
