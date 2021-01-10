import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Audio } from "expo-av";

const { width } = Dimensions.get("screen");
const MixerScreen = ({
  route: {
    params: { song },
  },
}) => {
  // STATES
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [drum, setDrum] = useState();
  const [songLength, setSongLength] = useState(0);

  // USE EFFECT
  useEffect(() => {
    const loadSounds = async () => {
      console.log("loading");
      const { sound: drum } = await Audio.Sound.createAsync(song.drum);
      setDrum(drum);

      const songStatus = await drum.getStatusAsync();
      setSongLength(songStatus.playableDurationMillis);
      drum.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    };
    loadSounds();
  }, []);

  // Playback Status Update Function

  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      drum.stopAsync();
      setPlaying(false);
      setPosition(0);
    }
    setPosition(status.positionMillis);
  };

  const playPauseHandler = async () => {
    playing ? await drum.pauseAsync() : drum.playAsync();
    setPlaying(!playing);
  };

  const stopHandler = async () => {
    await drum.stopAsync();
    setPlaying(false);
  };

  const loopingHandler = async () => {
    await drum.setIsLoopingAsync(!isLooping);
    setIsLooping(!isLooping);
  };

  const slideHandler = async (value) => {
    await drum.setPositionAsync(value);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => console.log(drum.getStatusAsync())}>
          <View
            style={{
              width: width / 1.5,
              height: 40,
              backgroundColor: "tomato",
            }}
          >
            <Text style={{ color: "white" }}>DEBUG</Text>
          </View>
        </TouchableOpacity>
        <Text>Mixer Screen</Text>
      </View>
      <View style={styles.controlsContainer}>
        <View style={styles.songInfo}>
          <View>
            <Image source={{ uri: song.imgSource }} style={styles.image} />
          </View>
          <View>
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.songArtist}>{song.artist}</Text>
          </View>
        </View>
        <Slider
          style={styles.mainSlider}
          value={position}
          minimumValue={0}
          onValueChange={(value) => slideHandler(value)}
          maximumValue={songLength}
          minimumTrackTintColor="#fff"
          maximumTrackTintColor="#3b303f"
          thumbTintColor="tomato"
        />
        <View style={styles.controls}>
          <TouchableOpacity onPress={loopingHandler}>
            <Ionicons
              name="repeat"
              size={30}
              color={isLooping ? "tomato" : "white"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={playPauseHandler}>
            {playing ? (
              <Ionicons name="pause" size={40} color="white" />
            ) : (
              <Ionicons name="play" size={40} color="white" />
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={stopHandler}>
            <Ionicons name="stop" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MixerScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B1a22",
  },
  content: {
    flex: 0.7,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  controlsContainer: {
    flex: 0.3,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  mainSlider: {
    width: width / 1.2,
    height: 40,
    marginVertical: 15,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width / 1.2,
  },
  songInfo: {
    width: width / 1.2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  songTitle: {
    color: "white",
    fontSize: 20,
    textAlign: "right",
  },
  songArtist: {
    color: "rgba(255,255,255,0.60)",
    fontSize: 17,
    marginTop: 5,
    textAlign: "right",
  },
  image: {
    width: 50,
    height: 50,
  },
});
