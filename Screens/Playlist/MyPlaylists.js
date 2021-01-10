import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

let songs = [
  /* {
    title: "Şarkı Örneği",
    artist: "Sinancan Yaren",
    bpm: "90",
    genre: "jazz",
    bass: require("./assets/bass.mp3"),
    drum: require("./assets/drum.mp3"),
    guitar: require("./assets/guitar.mp3"),
    click: require("./assets/click.mp3"),
  },
  {
    title: "Şarkı Örneği2",
    artist: "Sinancan Yaren",
    bpm: "90",
    genre: "jazz",
    bass: require("./assets/berke/bass.mp3"),
    drum: require("./assets/berke/drum.mp3"),
    guitar: require("./assets/berke/guitar.mp3"),
    click: require("./assets/berke/click.mp3"),
  },
  {
    title: "Şarkı Örneği 3",
    artist: "Sinancan Yaren",
    bpm: "90",
    genre: "jazz",
    bass: require("./assets/onur/bass.mp3"),
    drum: require("./assets/onur/drum.mp3"),
    guitar: require("./assets/onur/guitar.mp3"),
    click: require("./assets/onur/click.mp3"),
    keyboard: require("./assets/onur/keyboard.mp3"),
  }, */
  {
    title: "Swinging on the Rope",
    artist: "Sinancan Yaren",
    bpm: "90",
    genre: "Jazz",
    bass: require("./assets/cekme/bass.mp3"),
    drum: require("./assets/cekme/drum.mp3"),
    guitar: require("./assets/cekme/guitar.mp3"),
    click: require("./assets/cekme/click.mp3"),
    fx: require("./assets/cekme/fx.mp3"),
    keyboard: require("./assets/cekme/keyboard.mp3"),
    imgSource:
      "https://freedesignfile.com/upload/2016/03/Musicians-with-jazz-music-vector-material-04.jpg",
  },
  /*  {
    title: "Şarkı Örneği 5",
    artist: "Sinancan Yaren",
    bpm: "90",
    genre: "jazz",
    bass: require("./assets/nerda/bass.mp3"),
    drum: require("./assets/nerda/drum.mp3"),
    perc: require("./assets/nerda/perc.mp3"),
    click: require("./assets/nerda/click.mp3"),
    fx: require("./assets/nerda/fx.mp3"),
    keyboard: require("./assets/nerda/keyboard.mp3"),
  }, */
];

const MyPlaylists = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1, marginTop: 50 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {songs.map((song) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Mixer", { song })}
              key={song.title}
            >
              <View
                style={{
                  width: width / 1.2,
                  backgroundColor: "tomato",
                  height: 90,
                  borderRadius: 15,
                  marginVertical: 10,
                  padding: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ height: "100%" }}>
                  <Text style={styles.title}>{song.title}</Text>
                  <Text style={styles.title2}>{song.artist}</Text>
                </View>
                <View
                  style={{ justifyContent: "space-between", height: "100%" }}
                >
                  <Text>{song.bpm}</Text>
                  <Text>{song.genre}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default MyPlaylists;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
  },
  title2: { color: "white" },
});
