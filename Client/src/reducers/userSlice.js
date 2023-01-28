import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  fullName: '',
  email: '',
  token: '',
  userRole: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
      const { fullName, email, userRole, token } = actions.payload
      state.fullName = fullName
      state.email = email
      state.userRole = userRole
      state.token = token
    },
    setUserDetailsNull: (state, actions) => {
      state.fullName = ''
      state.email = ''
      state.userRole = ''
      state.token = ''
    }
  }
});

export const { setUserDetails, setUserDetailsNull } = userSlice.actions;
export default userSlice.reducer;