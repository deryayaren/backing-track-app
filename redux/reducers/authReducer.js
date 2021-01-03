import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as actionTypes from "../actions/actionTypes";

const initialStates = {
  isLoading: false,
  error: false,
  errorMessage: "",
  data: null,
  token: null,
};

const authReducer = (state = initialStates, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload,
        token: action.payload,
      };
    case actionTypes.USER_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload.message,
      };
    case actionTypes.USER_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case actionTypes.USER_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
};

export default authReducer;
