import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const createAppStore = () => {
  try {
    const store = configureStore({ reducer: rootReducer });
    return store;
  } catch (error) {
    throw new Error("Some error occurred");
  }
};

export default createAppStore;
