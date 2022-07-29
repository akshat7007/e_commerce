import { createSlice } from "@reduxjs/toolkit";
// import { useReducer } from "react";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {
      getToken(state, action) {
          state.action=action.payload
    },
  },
});

export const { getToken } = UserSlice.actions;
export default UserSlice.reducer;

// export default UserSlice
