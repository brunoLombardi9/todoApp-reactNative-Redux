import { createSlice } from "@reduxjs/toolkit";

const tasksInitalState = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitalState,
  reducers: {
    addTask(state, action) {
      state = [action.payload, ...state];
      return state;
    },
  },
});

export default taskActions = tasksSlice.actions;
