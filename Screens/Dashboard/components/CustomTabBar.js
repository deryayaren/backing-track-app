import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const { width, height } = Dimensions.get("screen");

const CustomTabBar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.tabbar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Dashboard");
            setSelected("Dashboard");
          }}
        >
          <View style={styles.component}>
            <MaterialIcons
              name="dashboard"
              size={20}
              color={selected === "Dashboard" ? "#F78710" : "white"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyPlaylists");
            setSelected("Playlist");
          }}
        >
          <View style={styles.component}>
            <MaterialCommunityIcons
              name="playlist-music"
              size={24}
              color={selected === "Playlist" ? "#F78710" : "white"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Store");
            setSelected("Store");
          }}
        >
          <View style={styles.component}>
            <FontAwesome5
              name="store-alt"
              size={20}
              color={selected === "Store" ? "#F78710" : "white"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyProfile");
            setSelected("MyProfile");
          }}
        >
          <View style={styles.component}>
            <FontAwesome
              name="user"
              size={20}
              color={selected === "MyProfile" ? "#F78710" : "white"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16161A",
    width,
    height: height / 13,
    justifyContent: "center",
    alignItems: "center",
  },
  tabbar: {
    flexDirection: "row",
    width,
    justifyContent: "space-evenly",
  },
  component: {
    height: height / 13,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
