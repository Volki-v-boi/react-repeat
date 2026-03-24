import { configureStore } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";

const initialState = {
  contacts: {
    items: initialContacts,
  },
  filters: {
    name: "",
  },
};

const rootReducer = (state = initialState, actions) => {
  return state;
};

// створення стору
export const store = configureStore({
  reducer: rootReducer,
});
