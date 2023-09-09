import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./components/ducks/modeSlice";

export const store = configureStore({
    reducer: modeReducer
 })