import { createAction } from "redux-actions";
import * as actionTypes from "./actionTypes";

import firebase from "firebase";
import "firebase/auth";

export const userLoginRequest = createAction(actionTypes.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(actionTypes.USER_LOGIN_SUCCESS);
export const userLoginError = createAction(actionTypes.USER_LOGIN_ERROR);

export const userSignupRequest = createAction(actionTypes.USER_SIGNUP_REQUEST);
export const userSignupSuccess = createAction(actionTypes.USER_SIGNUP_SUCCESS);
export const userSignupError = createAction(actionTypes.USER_SIGNUP_ERROR);

export const userLogoutRequest = createAction(actionTypes.USER_LOGOUT_REQUEST);

export const loginRequest = (credentials) => {
  const { email, password, navigation } = credentials.payload;
  console.log(credentials.payload.email);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      const response = user;
      userLoginSuccess(response);
      navigation.push("Dashboard");
    })
    .catch((error) => {
      const err = error;
      alert(err.code);
      userLoginError(err);
    });
};

export const signupRequest = (credentials) => {
  const { email, password, navigation } = credentials.payload;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      userSignupSuccess(response);
      navigation.push("Login");
    })
    .catch((error) => {
      alert(error.code);
      userSignupError(error);
    });
};
