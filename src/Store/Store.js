import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Store/Slice/UserSlice'

const store = configureStore({
    reducer: {
      user:userReducer
  }
  });

export default store;
