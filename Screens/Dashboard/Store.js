import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Store = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>store</Text>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
