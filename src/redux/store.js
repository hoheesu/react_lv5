import { configureStore } from "@reduxjs/toolkit";
import stateModalSlice from "./modules/stateModalSlice";
import todosReducer from "./modules/todosSlice";

export const store = configureStore({
  reducer: {
    modalState: stateModalSlice,
    todosFetch: todosReducer,
  },
});
