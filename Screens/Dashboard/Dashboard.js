import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Dashboard = () => {
  return (
    <View style={styles.dashboardContainer}>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
});
