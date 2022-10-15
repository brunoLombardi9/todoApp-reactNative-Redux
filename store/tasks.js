import { createSlice } from "@reduxjs/toolkit";

const tasks = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasks,
  reducers: {
    addTask(state, action) {
      state = [...state, action.payload];
      return state;
    },
  },
});
