import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import firebase from "firebase";
import AuthStackNavigator from "./Screens/Auth";
import HomeNavigator from "./Screens/Dashboard";

const firebaseConfig = {
  apiKey: "AIzaSyBDLeQe_lBSMZL0JcyYvoQJTYFAlqVV4wo",
  authDomain: "backing-track-app-e9292.firebaseapp.com",
  projectId: "backing-track-app-e9292",
  storageBucket: "backing-track-app-e9292.appspot.com",
  messagingSenderId: "22595607275",
  appId: "1:22595607275:web:10b228ed2b5014db55fcae",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const Root = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Auth" component={AuthStackNavigator} />
          <Stack.Screen name="Home" component={HomeNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
