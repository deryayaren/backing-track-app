import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { userSignupRequest } from "../../../redux/actions/authActions";
import { Formik } from "formik";
import * as Yup from "yup";

const { width, height } = Dimensions.get("screen");

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords should be same")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const Signup = () => {
  const dispatch = useDispatch();
  const signupAction = (values) => {
    const credentials = {
      email: values.email,
      password: values.password,
      navigation,
    };
    dispatch(userSignupRequest(credentials));
  };

  const navigation = useNavigation();

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}> Enter your details below</Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => signupAction(values)}
        validationSchema={SignUpSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <>
            <TextInput
              placeholder="Email"
              style={styles.input}
              autoCompleteType="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={styles.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Confirm Password"
              style={styles.input}
              onChangeText={handleChange("passwordConfirmation")}
              onBlur={handleBlur("passwordConfirmation")}
              error={errors.passwordConfirmation}
              touched={touched.passwordConfirmation}
            />
            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.button}>
                <Text>Sign up</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </Formik>
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
