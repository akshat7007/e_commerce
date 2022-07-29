import { createSlice } from "@reduxjs/toolkit";
// import { useReducer } from "react";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    tokens: "",
  },
  reducers: {
      getToken(state, action) {
          console.log(action.payload)
          state.tokens=action.payload
    },
  },
});

export const { getToken } = UserSlice.actions;
export default UserSlice.reducer;

// export default UserSlice
