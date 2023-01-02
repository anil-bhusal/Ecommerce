import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  fullName: '',
  token: '',
  userRole: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
     const {fullName, userRole} = actions.payload
        state.fullName =fullName
        state.userRole =userRole
    },
  }
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;


