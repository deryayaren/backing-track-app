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
              color={selected === "Dashboard" ? "tomato" : "black"}
            />
            <Text style={{ marginTop: 5 }}>Dashboard</Text>
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
              color={selected === "Playlist" ? "tomato" : "black"}
            />
            <Text style={{ marginTop: 0 }}>My Playlists</Text>
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
              color={selected === "Store" ? "tomato" : "black"}
            />
            <Text style={{ marginTop: 5 }}>Store</Text>
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
              color={selected === "MyProfile" ? "tomato" : "black"}
            />
            <Text style={{ marginTop: 5 }}>My Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
