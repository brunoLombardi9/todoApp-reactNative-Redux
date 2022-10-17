import { configureStore } from "@reduxjs/toolkit";
import { taskIdSlice } from "./taskId";
import { tasksSlice } from "./tasks";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    taskId: taskIdSlice.reducer,
  },
});

export default store;
