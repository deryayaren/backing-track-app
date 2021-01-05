import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const TabBarContent = ({ component: { label, icon, screen, iconFamily } }) => {
  return (
    <View style={styles.container}>
      <SimpleLineIcons name={icon} size={24} color="black" />
      <Text>{label}</Text>
    </View>
  );
};

export default TabBarContent;

const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
});
