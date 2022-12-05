import { createStore } from "redux";
import { reducer } from "./reducer";

// initialize the store with the Reducer
const store = createStore(reducer);

export { store };
