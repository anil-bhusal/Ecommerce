import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    _id: '',
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItemDetails: (state, actions) => {
      const {_id} = actions.payload
      state._id = _id
    },
    setItemDetailsNull: (state, actions) => {
        state._id = ''
    }
  }
});

export const {setItemDetails, setItemDetailsNull} = itemSlice.actions;
export default itemSlice.reducer;