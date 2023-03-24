import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { loginReducer } from "./Login";
import { signUpSlice } from "./signupSlice";
import { persistReducer,persistStore,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { updateInfo } from "./update/updateInfoSlice.js";
import { createTaskSlice } from "./task/taskSlice";
import contractorSignupSlice from "./contractor/contractorSignupSlice";


const persistConfig = {
  key: "authentication",
  storage
};

const middlewares = [];

if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, loginReducer);
const rootReducer = combineReducers({
   signup: signUpSlice,
   userDetails: persistedReducer,

   userUpdateInfo:updateInfo

   createTask:createTaskSlice,
   createContractor:contractorSignupSlice

});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger),
});

export default store;

export const persistor = persistStore(store);