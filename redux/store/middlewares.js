import createSagaMiddleware from "redux-saga";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  }),
  sagaMiddleware,
];

export default middleware;