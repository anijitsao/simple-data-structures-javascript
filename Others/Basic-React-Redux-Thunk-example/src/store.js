import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

// initialize the store with the Reducer
const store = configureStore({ reducer });

export { store };
