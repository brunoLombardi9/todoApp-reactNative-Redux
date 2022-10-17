import { createSlice } from "@reduxjs/toolkit";

const taskIdInitialState = 0;

export const taskIdSlice = createSlice({
  name: "taskId",
  initialState: taskIdInitialState,
  reducers: {
    newId(state) {
      state++;
      return state;
    },
  },
});

export default taskIdActions = taskIdSlice.actions;
