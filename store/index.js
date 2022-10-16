import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasks";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;
