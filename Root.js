import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Login } from "./Screens/Auth/Login/Login";
import Dashboard from "./Screens/Dashboard/Dashboard";
import firebase from "firebase";
import { Signup } from "./Screens/Auth/Signup/Signup";

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
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
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
