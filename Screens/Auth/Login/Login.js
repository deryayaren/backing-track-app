import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { userLoginRequest } from "../../../redux/actions/authActions";

const { width, height } = Dimensions.get("screen");

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginAction = () => {
    const credentials = { email, password, navigation };
    dispatch(userLoginRequest(credentials));
  };

  const navigation = useNavigation();

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}> Welcome to Backing Track App!</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCompleteType="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={loginAction}>
        <View style={styles.button}>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <View style={styles.button}>
          <Text>Don't you have an account? Signup here!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    width: width,
    backgroundColor: "#264653",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#2A9D8F",
    width: width / 1.4,
    borderRadius: 15,
    height: 35,
    paddingLeft: 20,
    marginVertical: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginBottom: 100,
  },
  button: {
    width: width / 1.4,
    backgroundColor: "#F4A261",
    height: 35,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 35,
  },
});
