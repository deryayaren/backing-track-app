import { configureStore } from "@reduxjs/toolkit";
import { reduxBatch } from "@manaflair/redux-batch";
import { persistStore } from "redux-persist";

import { rootReducer } from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";
import middleware, { sagaMiddleware } from "./middlewares";

const store = configureStore({
  reducer: rootReducer,
  middleware,
  enhancers: [reduxBatch],
});

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default store;