import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./Dashboard";
import CustomTabBar from "./components/CustomTabBar";
import MyPlaylists from "../Playlist/MyPlaylists";
import Store from "./Store";
import MyProfile from "./MyProfile";
import MixerScreen from "../Playlist/MixerScreen";

const TabBar = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <TabBar.Navigator tabBar={() => <CustomTabBar />}>
      <TabBar.Screen name="Dashboard" component={Dashboard} />
      <TabBar.Screen name="MyPlaylists" component={MyPlaylists} />
      <TabBar.Screen name="Store" component={Store} />
      <TabBar.Screen name="MyProfile" component={MyProfile} />
      <TabBar.Screen name="Mixer" component={MixerScreen} />
    </TabBar.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
