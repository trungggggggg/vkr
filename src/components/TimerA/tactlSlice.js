import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: Array(16).fill(0),
};

export const tactlSlice = createSlice({
  name: "tactl",
  initialState,
  reducers: {
    invert: (state, action) => {
      state.value[action.payload] = 1 - state.value[action.payload];
    },
    changeBitArray: (state, action) => {
      const { payload } = action;
      for (let i = 0; i < payload.bitArray.length; i++)
        state.value[payload.start + i] = payload.bitArray[i];
    },
  },
});

export const { invert, changeBitArray } = tactlSlice.actions;

export default tactlSlice.reducer;
