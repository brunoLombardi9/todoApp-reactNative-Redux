import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasks";


const store = configureStore({
    reducer: tasksSlice.reducer
});

export default store;