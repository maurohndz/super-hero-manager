import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false
  },
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
