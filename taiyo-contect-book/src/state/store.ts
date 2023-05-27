import { legacy_createStore, combineReducers } from "redux";
import contactReducer from "./reducers/contactReducer";

const rootReducer = combineReducers({
  contact: contactReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = legacy_createStore(rootReducer);

export default store;
