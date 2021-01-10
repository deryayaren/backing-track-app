import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import firebase from "firebase";
import AuthStackNavigator from "./Screens/Auth";
import HomeNavigator from "./Screens/Dashboard";

const firebaseConfig = {
  apiKey: "AIzaSyDhRk3jGPVzcv90d4qnymCVwtDWD0MTdUA",
  authDomain: "backing-track-app-b56c2.firebaseapp.com",
  projectId: "backing-track-app-b56c2",
  storageBucket: "backing-track-app-b56c2.appspot.com",
  messagingSenderId: "1096771674617",
  appId: "1:1096771674617:web:e997dbb5cf6de887cedd28",
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
