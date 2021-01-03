import { all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { loginRequest, signupRequest } from "../actions/authActions";

/**
 * WATCHER SAGAS
 */

export function* loginRequestWatcher() {
  yield takeLatest(actionTypes.USER_LOGIN_REQUEST, loginRequest);
}

export function* signupRequestWatcher() {
  yield takeLatest(actionTypes.USER_SIGNUP_REQUEST, signupRequest);
}

/********************
 * EXPORT AUTH SAGA
 *******************/

export default function* authSaga() {
  yield all([loginRequestWatcher(), signupRequestWatcher()]);
}
