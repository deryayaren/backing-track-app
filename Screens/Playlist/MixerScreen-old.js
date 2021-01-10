import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";

import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("screen");

const MixerScreen = ({ route }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [position, setPosition] = useState(0);
  const [songLength, setSongLength] = useState(0);
  const [drum, setDrum] = useState(null);
  const [bass, setBass] = useState(null);
  const [guitar, setGuitar] = useState(null);
  const [click, setClick] = useState(null);
  const [fx, setFx] = useState(null);
  const [perc, setPerc] = useState(null);
  const [keyboard, setKeyboard] = useState(null);

  useEffect(() => {
    async function playSound() {
      console.log("Loading items");

      const { sound: drum } = route.params.song.drum
        ? await Audio.Sound.createAsync(route.params.song.drum)
        : null;
      console.log("drum set");
      setDrum(drum);

      const { sound: bass } = route.params.song.bass
        ? await Audio.Sound.createAsync(route.params.song.bass)
        : null;
      console.log("bass set");
      setBass(bass);

      const { sound: guitar } = route.params.song.guitar
        ? await Audio.Sound.createAsync(route.params.song.guitar)
        : null;
      console.log("guitar set");
      setGuitar(guitar);

      const { sound: click } = await Audio.Sound.createAsync(
        route.params.song.click
      );
      console.log("click set");
      setClick(click);

      const { sound: keyboard } = route.params.song.keyboard
        ? await Audio.Sound.createAsync(route.params.song.keyboard)
        : null;
      console.log("keyboard set");
      setKeyboard(keyboard);

      const { sound: fx } = route.params.song.fx
        ? await Audio.Sound.createAsync(route.params.song.fx)
        : null;
      console.log("fx set");
      setFx(fx);

      const { sound: perc } = route.params.song.perc
        ? await Audio.Sound.createAsync(route.params.song.perc)
        : null;
      console.log("perc set");
      setPerc(perc);

      const status = drum ? await drum.getStatusAsync() : null;
      console.log(status);
      status && setSongLength(status.playableDurationMillis);
      status && setPosition(status.positionMillis);
      drum ? drum.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate) : undefined;
    }
    playSound();

    return () => {
      console.log("unloading");
      drum ? drum.unloadAsync() : undefined;
      guitar ? guitar.unloadAsync() : undefined;
      bass ? bass.unloadAsync() : undefined;
      click ? click.unloadAsync() : undefined;
      keyboard ? keyboard.unloadAsync() : undefined;
      perc ? perc.unloadAsync() : undefined;
      fx ? fx.unloadAsync() : undefined;
    };
  }, []);

  const onPlaybackStatusUpdate = (status) => {
    console.log("did just finish check");
    console.log(status.didJustFinish);
    if (status.didJustFinish) {
      drum && drum.stopAsync();
      bass && bass.stopAsync();
      guitar && guitar.stopAsync();
      click && click.stopAsync();
      setIsPlaying(false);
      setPosition(0);
    }
    setIsBuffering(status.isBuffering);
    setPosition(status.positionMillis);
  };

  const handlePlayPause = async () => {
    isPlaying && drum ? await drum.pauseAsync() : await drum.playAsync();
    isPlaying && bass ? await bass.pauseAsync() : await bass.playAsync();
    isPlaying && guitar ? await guitar.pauseAsync() : await guitar.playAsync();
    isPlaying && click ? await click.pauseAsync() : await click.playAsync();
    isPlaying && perc ? await perc.pauseAsync() : await perc.playAsync();
    isPlaying && fx ? await fx.pauseAsync() : await fx.playAsync();
    isPlaying && keyboard
      ? await keyboard.pauseAsync()
      : await keyboard.playAsync();

    setIsPlaying(!isPlaying);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B1A22",
      }}
    >
      <View
        style={{
          flex: 0.75,
          width,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider
          style={{ width: width / 1.2, height: 40, marginBottom: 25 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#3B393F"
          onValueChange={(value) => drum.setVolumeAsync(value)}
          thumbTintColor="orange"
        />
        <Slider
          style={{ width: width / 1.2, height: 40, marginBottom: 25 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#3B393F"
          onValueChange={(value) => bass.setVolumeAsync(value)}
          thumbTintColor="orange"
        />
        <Slider
          style={{ width: width / 1.2, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#3B393F"
          onValueChange={(value) => guitar.setVolumeAsync(value)}
          thumbTintColor="orange"
        />
      </View>
      <View
        style={{
          flex: 0.25,
          justifyContent: "center",
          alignItems: "center",
          width,
        }}
      >
        <View
          style={{
            width: width / 1.2,
            marginBottom: 15,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
            Şarkı Örneği
          </Text>
          <Text style={{ color: "white" }}>Sinancan Yaren</Text>
        </View>
        <Slider
          style={{ width: width / 1.2, height: 40 }}
          minimumValue={0}
          value={position}
          maximumValue={songLength}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#3B393F"
          onValueChange={(value) => console.log(value)}
          thumbTintColor="orange"
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <Entypo name="controller-jump-to-start" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPause}>
            <LinearGradient
              style={{
                backgroundColor: "black",
                height: 70,
                width: 70,
                borderRadius: 35,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 15,
                marginBottom: 15,
                marginRight: 40,
                marginLeft: 40,
              }}
              colors={["#FFFA65", "#FF9F1A"]}
            >
              {isPlaying ? (
                <Entypo name="controller-paus" size={40} color="white" />
              ) : (
                <Entypo name="controller-play" size={40} color="white" />
              )}
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="controller-next" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: "white" }}>STOP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MixerScreen;

const styles = StyleSheet.create({});
