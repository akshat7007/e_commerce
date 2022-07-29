import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";
const store = configureStore({
  reducers: UserSlice.reducer,
  });

export default store;
