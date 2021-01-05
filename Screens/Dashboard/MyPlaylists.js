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

let songs = [1, 2, 4, 55, 23, 43, 123, 54566, 34345,65,34578,87654,3456,5432345,34465];

const MyPlaylists = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1, marginTop: 50 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {songs.map((song) => (
            <View
              key={song}
              style={{
                width: width / 1.2,
                backgroundColor: "tomato",
                height: 90,
                borderRadius: 15,
                marginVertical: 10,
              }}
            />
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
});
